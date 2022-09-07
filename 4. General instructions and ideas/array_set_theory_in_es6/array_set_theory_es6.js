
var arrA = [1, 3, 4, 5, 5];
var arrB = [1, 2, 5, 6, 7, 5]; 

console.log(`Array1: ${arrA}`);
console.log(`Array2: ${arrB}`);

// Intersection
let intersection = arrA.filter((arrAElement) => {
    return arrB.includes(arrAElement);
});

console.log(`Intersection: ${intersection}`);

// Difference
let difference = arrA.filter((element) => {
    return !arrB.includes(element);
})

console.log(`Difference: ${difference}`);

// Symmetrical Difference
let symmetricalDifference = arrA.filter((element) => {
    return !arrB.includes(element)
}).concat(arrB.filter((element) => {
    return !arrA.includes(element);
}))

console.log(`Symmetrical Difference: ${symmetricalDifference}`);

// Symmetrical Differenc2
let symmetricalDifference2 = [ ...(arrA.filter((element) => {
    return !arrB.includes(element)
})), ...(arrB.filter((element) => {
    return !arrA.includes(element);
}))]

console.log(`Symmetrical Difference 2: ${symmetricalDifference2}`);


// Union
let union = [ ...new Set([ ...arrA, ...arrB ])];
console.log(`Union: ${union}`);