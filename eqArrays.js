const eqArrays = function (array1, array2) {
  let output = true;
  if (array1.length !== array2.length) {
    output = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (output === true) {
      if (Array.isArray(array1[i]) === true) {
        if (Array.isArray(array2[i]) === false) {
          output = false;
        }
        output = eqArrays(array1[i], array2[i]);
      } else if (array1[i] !== array2[i]) {
        output = false;
      }
    }
  }
  return output;
};

module.exports = eqArrays;