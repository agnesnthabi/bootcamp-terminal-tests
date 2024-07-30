import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('this test is the function yearsAgo' , function(){
    it('should show how many years ago' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
       
    });
    it('should show how many years ago' , function(){
      
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});