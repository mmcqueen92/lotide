const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else  {
    console.log(`💀💀💀 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const tail = function(givenArray) {
  return givenArray.slice(1);
};

//TEST CASES
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.join(), ["Lighthouse", "Lads"].join());

// const result = tail(["Labs"]);
// assertEqual(result.join(), ["Lighthouse", "Labs"].join(', '));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!