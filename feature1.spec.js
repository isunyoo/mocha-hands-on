// tests for: feature1

const assert = require('assert');

const { add } = require('./feature1.js');

describe('feature1', () => {

  describe('add', () => {

    // tests go here
    it('works with specific values', () => {
        // specific known values
        const result = add(10, 8);
        const expected = 18;
        assert.equal(result, expected);
      });

      it('is commutative', () => {
        // a + b = b + a
        const leftHandSide = add(15, 99);
        const rightHandSide = add(99, 15);
        assert.equal(leftHandSide, rightHandSide);
      });

      it('is associative', () => {
        // (a + b) + c = a + (b + c)
        const leftHandSide = add(add(15, 99), 890);
        const rightHandSide = add(15, add(99, 890));
        assert.equal(leftHandSide, rightHandSide);
      });

  });

});