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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true)  {
    return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(givenArray) {
  if (givenArray.length < 3) {
    //Array does not have a middle element, return empty array
    return [];
  }
  if (givenArray.length % 2 === 1) {
    //Odd number of elements, return 1 elements
    return givenArray.slice((Math.floor((givenArray.length - 1) / 2)), ((Math.floor((givenArray.length - 1) / 2)) + 1));
  } else {
    //Even number of elements, return 2 element
    return givenArray.slice((Math.floor((givenArray.length - 1) / 2)), ((Math.floor((givenArray.length - 1) / 2)) + 2));
  }
};

const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

assertArraysEqual(middle(testArray), [4, 5]);

