const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [1, 2, 3, 4, 5, 6, 7, 8];

assertArraysEqual(middle(testArray1), [3]);
assertArraysEqual(middle(testArray2), [4, 5]);