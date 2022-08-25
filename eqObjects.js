const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// --TEST OBJECTS--

const ab = { a: '1', b: '2', };
const ba = { b: '2', a: '1', };
const abc = { a: '1', b: '2', c: '3', };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc));