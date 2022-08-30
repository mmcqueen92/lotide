const eqArrays = require('../eqArrays')

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];
const array4 = ['first', 'second', 'third', 'fourth', 'fifth'];
const array5 = ['first', 'second', 'third', 'fourth', 'fifth'];
const array6 = ['this', 'array', 'is', 'not', 'the', 'same'];
const array7 = [[2, 3], [4]]
const array8 = [[2, 3], [4]]
const array9 = [[2, 4], [4]]
const array10 = [[2, 3], 4]
const array11 = [2, 3, [4]]


console.log(eqArrays(array1, array2)); // should return pass
console.log(eqArrays(array1, array3)); // should return fail
console.log(eqArrays(array4, array5)); // should return pass
console.log(eqArrays(array5, array6)); // should return fail
console.log(eqArrays(array7, array8)); // should return pass
console.log(eqArrays(array7, array9)); // should return fail
console.log(eqArrays(array7, array10)); // should return fail
console.log(eqArrays(array7, array11)); // should return fail