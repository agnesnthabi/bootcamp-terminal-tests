import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe('this test is the function countAllPaarl' , function(){
    it('should show number of registration numbers' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

       
    });
    it('should show number of registration numbers' , function(){
      
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));

    });

});