const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', () => {
  it("returns console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) when passed [1, 2, 3] and [1, 2, 3]", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    actual = assertArraysEqual(array1, array2);
    expected = console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
    assert.strictEqual(actual, expected)
  });
  it("returns console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) for when passed [[2, 3], [4]] and [[2, 3], [4]]", () => {
    const array1 = [[2, 3], [4]]
    const array2 = [[2, 3], [4]]
    actual = assertArraysEqual(array1, array2);
    expected = console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
    assert.strictEqual(actual, expected)
  });
  it("returns console.log(`💀💀💀 Assertion Failed: ${array1} !== ${array2}` when passed [1, 2, 3] and [3, 2, 1]", () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 2, 1];
    actual = assertArraysEqual(array1, array2);
    expected = console.log(`💀💀💀 Assertion Failed: ${array1} !== ${array2}`);
    assert.strictEqual(actual, expected);
  })
  it("returns console.log(`💀💀💀 Assertion Failed: ${array1} !== ${array2}` fwhen passed [[2, 3], [4]] and [[2, 4], [4]]", () => {
    const array1 = [[2, 3], [4]]
    const array2 = [[2, 4], [4]]
    actual = assertArraysEqual(array1, array2);
    expected = console.log(`💀💀💀 Assertion Failed: ${array1} !== ${array2}`);
    assert.strictEqual(actual, expected);
  })
})