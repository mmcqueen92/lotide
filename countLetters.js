const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(givenString)  {
  const results = {};
  for (const letter of givenString) {
    if (letter !== ' ') {
      if (results[letter])  {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return (results);
};

assertEqual(countLetters("lighthouse in the house")['e'], 3);