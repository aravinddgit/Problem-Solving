There's numerous ways to loop over arrays and objects in JavaScript, and the
tradeoffs are a [common cause of confusion](https://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript). Some style guides go so far as to [ban certain looping constructs](http://airbnb.io/javascript/#iterators--nope). In this article, I'll describe the differences between iterating over an array with the 4 primary looping constructs:

* `for (let i = 0; i < arr.length; ++i)`
* `arr.forEach((v, i) => { /* ... */ })`
* `for (let i in arr)`
* `for (const v of arr)`

I'll provide an overview of the difference between these looping constructs using several different edge cases. I'll also link to the relevant [ESLint](http://eslint.org/) rules that you can use to enforce looping best practices in your projects.

Syntactic Overview
------------------

The `for` and `for/in` looping constructs give you access to the index in the array, not the actual element. For example, suppose you want to print out the values stored in the below array:

```javascript
const arr = ['a', 'b', 'c'];
```

With `for` and `for/in`, you need to print out `arr[i]`:

```javascript
for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}

for (let i in arr) {
  console.log(arr[i]);
}
```

With the other two constructs, `forEach()` and `for/of`, you get access to the array element itself. With `forEach()` you can access the array index `i`, with `for/of` you cannot.

```javascript
arr.forEach((v, i) => console.log(v));

for (const v of arr) {
  console.log(v);
}
```

Non-Numeric Properties
----------------------

JavaScript arrays are objects. That means you can add string properties to your array,
not just numbers.

```javascript
const arr = ['a', 'b', 'c'];

typeof arr; // 'object'

// Assign to a non-numeric property
arr.test = 'bad';

arr.test; // 'abc'
arr[1] === arr['1']; // true, JavaScript arrays are just special objects
```

3 of the 4 looping constructs ignore the non-numeric property. However, `for/in` will actually print out "bad":

```javascript
const arr = ['a', 'b', 'c'];
arr.test = 'bad';

// Prints "a, b, c, bad"
for (let i in arr) {
  console.log(arr[i]);
}
```

This is why [iterating through an array using `for/in` is generally bad practice](https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea). The other looping constructs correctly ignore the num-numeric key:

```javascript
const arr = ['a', 'b', 'c'];
arr.test = 'abc';

// Prints "a, b, c"
for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}

// Prints "a, b, c"
arr.forEach((el, i) => console.log(i, el));

// Prints "a, b, c"
for (const el of arr) {
  console.log(el);
}
```

**Takeaway:** Avoid using `for/in` over an array unless you're certain you mean to iterate over non-numeric keys and inherited keys. Use the [`guard-for-in` ESLint rule](https://eslint.org/docs/rules/guard-for-in) to disallow `for/in`.

Empty Elements
--------------

JavaScript arrays allow [empty elements](https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript). The below array is syntactically valid and has length 3:

```javascript
const arr = ['a',, 'c'];

arr.length; // 3
```

What makes things even more confusing is that looping constructs treat `['a',, 'c']`
differently from `['a', undefined, 'c']`. Below is how the 4 looping constructs handle `['a',, 'c']` with an empty element. `for/in` and `for/each` skip the empty element, `for` and `for/of` do not.

```javascript
// Prints "a, undefined, c"
for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}

// Prints "a, c"
arr.forEach(v => console.log(v));

// Prints "a, c"
for (let i in arr) {
  console.log(arr[i]);
}

// Prints "a, undefined, c"
for (const v of arr) {
  console.log(v);
}
```

In case you're wondering, all 4 constructs print "a, undefined, c" for `['a', undefined, 'c']`.

There's another way to add an empty element to an array:

```javascript
// Equivalent to `['a', 'b', 'c',, 'e']`
const arr = ['a', 'b', 'c'];
arr[5] = 'e';
```

`forEach()` and `for/in` skip empty elements in the array, `for` and `for/of` do not. The `forEach()` behavior may cause problems, however, holes in JavaScript arrays are generally rare because they are not supported in JSON:

```
$ node
> JSON.parse('{"arr":["a","b","c"]}')
{ arr: [ 'a', 'b', 'c' ] }
> JSON.parse('{"arr":["a",null,"c"]}')
{ arr: [ 'a', null, 'c' ] }
> JSON.parse('{"arr":["a",,"c"]}')
SyntaxError: Unexpected token , in JSON at position 12

```

So you don't have to worry about holes in user data, unless you give your users access to the full JavaScript runtime.

**Takeaway:** `for/in` and `forEach()` skip empty elements, also known as
["holes"](http://2ality.com/2013/07/array-iteration-holes.html), in the array.
There's rarely any reason to treat holes as a special case as opposed to treating
the index as having value `undefined`. If the special behavior with holes
causes you concern, below is an example `.eslintrc.yml` file that disallows calling `forEach()`.

```
parserOptions:
  ecmaVersion: 2018
rules:
  no-restricted-syntax:
    - error
    - selector: CallExpression[callee.property.name="forEach"]
      message: Do not use `forEach()`, use `for/of` instead
```

Function Context
----------------

[Function context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#Function_context) is a fancy way of saying what `this` refers to. `for`, `for/in`, and `for/of` retain the outside scope's value of `this`, but the `forEach()` callback will have a different `this` _unless_ you use an [arrow function](https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881).

```javascript
'use strict';

const arr = ['a'];

// Prints "undefined"
arr.forEach(function() {
  console.log(this);
});
```

**Takeaway:** Use arrow functions with `forEach()`. Use the [`no-arrow-callback` ESLint rule](https://eslint.org/docs/rules/prefer-arrow-callback) to require arrow functions for all callbacks that don't use `this`.

Async/Await and Generators
-----------------------

Another edge case with `forEach()` is that it [doesn't quite work right with async/await](https://thecodebarbarian.com/basic-functional-programming-with-async-await.html) or [generators](http://es2015generators.com/). If your `forEach()` callback is synchronous then it doesn't matter, but you can't use `await` within a `forEach()` callback:

```javascript
async function run() {
  const arr = ['a', 'b', 'c'];
  arr.forEach(el => {
    // SyntaxError
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  });
}
```

You can't use `yield` either:

```javascript
function* run() {
  const arr = ['a', 'b', 'c'];
  arr.forEach(el => {
    // SyntaxError
    yield new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  });
}
```

The above examples work fine with `for/of`:

```javascript
async function asyncFn() {
  const arr = ['a', 'b', 'c'];
  for (const el of arr) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  }
}

function* generatorFn() {
  const arr = ['a', 'b', 'c'];
  for (const el of arr) {
    yield new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  }
}
```

Even if you mark your `forEach()` callback as `async`, you're in for [substantial headache](https://thecodebarbarian.com/basic-functional-programming-with-async-await.html#motivation-and-foreach-) in trying to get async `forEach()` to work in series and pause your async function. For example, the below script will print 0-9 in _reverse order_.

```javascript
async function print(n) {
  // Wait 1 second before printing 0, 0.9 seconds before printing 1, etc.
  await new Promise(resolve => setTimeout(() => resolve(), 1000 - n * 100));
  // Will usually print 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 but order is not strictly
  // guaranteed.
  console.log(n);
}

async function test() {
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(print);
}

test();
```

**Takeaway:** If you're using [async/await](http://asyncawait.net/) or [generators](http://es2015generators.com/), remember that `forEach()` is syntactic sugar. Like sugar, it should be used sparingly and shouldn't be used for everything.

Conclusions
-----------

Generally, `for/of` is the most robust way to iterate over an array in JavaScript.
It is more concise than a conventional `for` loop and doesn't have as many edge
cases as `for/in` and `forEach()`. The major downsides of `for/of` is that you
need to do extra work to access the index (1), and you can't
chain like you can with `forEach()`. `forEach()` comes with several caveats and
should be used sparingly, but there are numerous cases where it makes code more
concise.

(1) To access the current array index in a `for/of` loop, you can use
[the `Array#entries()` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries).

```javascript
for (const [i, v] of arr.entries()) {
  console.log(i, v); // Prints "0 a", "1 b", "2 c"
}
```

### Reference:
https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript.html