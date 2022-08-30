const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it('return [2, 3] when passed [1, 2, 3]', () => {
    const array = [1, 2, 3];
    const actual = tail(array);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });
  it('return [] when passed [5]', () => {
    const array = [5];
    const actual = tail(array);
    const expected = [];
    assert.deepEqual(actual, expected);
  })
});