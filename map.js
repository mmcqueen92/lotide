const map = function(array, callback)  {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  }
  return results;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true)  {
    return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  } 
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, number => number *3)
const results3 = map(words, word => word.length)

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

assertArraysEqual(results2, [3, 6, 9, 12, 15])

assertArraysEqual(results3, [6, 7, 2, 5, 3])

