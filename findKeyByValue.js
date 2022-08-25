const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(givenObject, givenValue) {
  let firstKey;
  for (const key in givenObject) {
    if (givenObject[key] === givenValue) {
    firstKey = key;
    }
  }
  return firstKey;
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);