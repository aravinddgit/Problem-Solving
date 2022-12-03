


let nums = [3, 2, 6, 50, 10];
console.log(`Nums before sort: ${nums}`);
nums.sort()
console.log(`Nums after sort without comparator: ${nums}`);


nums = [3, 2, 6, 50, 10];
/**
 * In true JavaScript fashion, a callback is passed to this function which is used to tell the sorting algorithm how two elements compare to each other. The compareFunc should have two parameters, a and b, and works like this:

If compareFunc returns 0 then the elements are treated as equal
If compareFunc returns 1 then b is sorted before a
If compareFunc returns -1 then a is sorted before b
 */
nums.sort((a, b) => a - b);
console.log(`Nums after sort with a comparator: ${nums}`);


// Sorting an array of objects
let users = [
    {name: 'Scotty', age: '18'},
    {name: 'Tommy', age: '21'},
    {name: 'Sally', age: '71'},
    {name: 'Billy', age: '18'},
    {name: 'Timmy', age: '21'}
];
console.log(`Users before sort: ${JSON.stringify(users)}`);
users.sort();
console.log(`Users after sort without comparator function: ${JSON.stringify(users)}`);


users = [
    {name: 'Scotty', age: '18'},
    {name: 'Tommy', age: '21'},
    {name: 'Sally', age: '71'},
    {name: 'Billy', age: '18'},
    {name: 'Timmy', age: '21'}
];

users.sort((a, b) => {
    let keyA = a.age + a.name;
    let keyB = b.age + b.name;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
});
console.log(`Users after sort based on age and then name inside a comparator function: ${JSON.stringify(users)}`);