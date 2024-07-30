import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('this test is the function countAllFromTown', function() {
    it('should show registration numbers for Stellies', function() {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.equal(fromStellies, 3);
    });
    it('should show registration numbers for Kuilsriver', function() {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromKuilsriver, 1);
    });
});
