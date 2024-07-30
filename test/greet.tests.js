import assert from "assert";
import greet from "../greet.js";

describe('this test is the function greet' , function(){
    it('should show Hello, Bob' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
       
    });
    it('should show Hello, Sam' , function(){
      
        assert.equal(greet('Sam'), 'Hello, Sam');
    });

});