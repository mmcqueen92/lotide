const middle = require('../middle');
const assert = require('chai').assert

describe('#middle', () => {
  it('return 3 when passed [1, 2, 3, 4, 5]', () => {
    const array = [1, 2, 3, 4, 5];
    const actual = middle(array);
    const expected = [3];
    assert.deepEqual(actual, expected);
  });
  it('return [3, 4] when passed [1, 2, 3, 4, 5, 6]', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const actual = middle(array);
    const expected = [3, 4];
    assert.deepEqual(actual, expected);
  });
});