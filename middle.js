const middle = function(givenArray) {
  if (givenArray.length < 3) {
    //Array does not have a middle element, return empty array
    return [];
  }
  else if (givenArray.length % 2 === 1) {
    //Odd number of elements, return 1 elements
    return givenArray.slice((Math.floor((givenArray.length - 1) / 2)), ((Math.floor((givenArray.length - 1) / 2)) + 1));
  } else {
    //Even number of elements, return 2 element
    return givenArray.slice((Math.floor((givenArray.length - 1) / 2)), ((Math.floor((givenArray.length - 1) / 2)) + 2));
  }
};



module.exports = middle;
