const assertArraysEqual = require('../assertArraysEqual')
const tail = require('../tail')

const actual1 = tail(["Hello", "Lighthouse", "Labs"]);
const expected1 = ["Lighthouse", "Labs"]
assertArraysEqual(actual1, expected1);

const actual2 = tail([1, 2, 3, 4, 5]);
const expected2 = [2, 3, 4, 5]
assertArraysEqual(actual2, expected2);

const actual3 = [];
const expected3 = [];
assertArraysEqual(actual3, expected3);