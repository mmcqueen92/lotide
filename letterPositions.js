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

const letterPositions = function(sentence) {
  const results = {};
  //create arrayedString from the sentence
  // const arrayedString = [...sentence];
  //loop through sentence string
  i = 0;
  for (const v of sentence) {
    if (v !== ' ') {
      //if a key equal to the current letter exists push the current index to that key's value
      if (results[v]) {
        results[v].push(i);
      } else {
        //if a key equal to the current letter does not exist, create one with an array containing the current index as the value
        results[v] = [i];
      }
    }
    i++
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
