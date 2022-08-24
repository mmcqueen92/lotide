const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true)  {
    return console.log(`✅✅✅ Assertion Passed: ${array1} ===  ${array2}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${array1} !==  ${array2}`);
  }
};

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

const without = function(source, itemsToRemove) {
  let newArray = source.slice();
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (itemsToRemove[i] === newArray[j]) {
        newArray.splice(j, 1);
      }
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);