const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } 
    }
  } else {
    return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (const key in object1) {
      if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true)  {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      }
      else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const assertObjectEquals = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

assertObjectEquals({ a: '1', b: '2', c: '3' }, { b: '2', a: '1', })