# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mmcqueen/lotide`

**Require it:**

`const _ = require('@mmcqueen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(function(givenArray) {
  return givenArray[0];
};)`: returns the first element in a given array
* `middle(function(givenArray) {
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
};)`: returns an array with the middle element or elements of a given array
* `tail(function(givenArray) {
  return givenArray.slice(1);
};)`: returns an array with all elements other than the first