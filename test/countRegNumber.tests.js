import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('this test the function countRegNumber', function() {
    it('should show number of registration numbers for "CA 182736,CY 523519,CJ 812328"', function() {
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });

    it('should show number of registration numbers for "CA 42665, AA 12 RT GP"', function() {
        assert.equal(countRegNumber('CA 42665, AA 12 RT GP'), 2);
    });

    it('should show number of registration numbers for an empty string', function() {
        assert.equal(countRegNumber(''), 1); 
    });

    it('should show number of registration numbers for a single registration', function() {
        assert.equal(countRegNumber('CA 182736'), 1);
    });
});
