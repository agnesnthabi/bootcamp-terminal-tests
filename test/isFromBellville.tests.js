import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('this test isFromBellville' , function(){
    it('should show you True' , function(){
        assert.equal(isFromBellville('CY 123'), true);

    });
    it('should show you False' , function(){

assert.equal(isFromBellville('CJ 123'), false);
    });
});