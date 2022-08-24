const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
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

assertEqual(eqArrays([1, 2 ,3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2 ,3], [1, 2, '3']), true);
assertEqual(eqArrays([3, 2 ,1], [1, 2, 3]), true);