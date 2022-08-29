const takeUntil = function(array, callback) {
  const returnArray = [];
  for (const element of array) {
    if (callback(element))  {
      return returnArray;
    }
    returnArray.push(element);
  };
  return returnArray;
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true)  {
    return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["This", "whole", "array", "should", "remain"];
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');
const results3 = takeUntil(data3, x => x === 'something that is not in the array')


assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, ["This", "whole", "array", "should", "remain"]);

    // const takeUntil2 = function(array, callback)  {
    //   let returnArray = [];
    //   let index = 0;
    //   while (!callback(array[index]) && index < array.length) {
    //     returnArray.push(array[index]);
    //     index++;
    //   }
    //   return returnArray;
    // };