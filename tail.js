const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual');

const tail = function(givenArray) {
  return givenArray.slice(1);
};

module.exports = tail;