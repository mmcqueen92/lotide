const eqArrays = function(array1, array2) {
  let output = false;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        output = true;
      } else {
        output = false;
        return output;
      }
    }
  } else {
    return output;
  }
  return output;
};

// const assertEqual = function(actual, expected) {
//   if (actual === expected)  {
//     console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
//   } else  {
//     console.log(`💀💀💀 Assertion Failed: ${actual} !==  ${expected}`);
//   }
// };

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true)  {
    return console.log(`✅✅✅ Assertion Passed: ${array1} ===  ${array2}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${array1} !==  ${array2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 3]);