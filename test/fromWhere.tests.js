import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('this test is the function fromWhere' , function(){
    it('should show registration number, for Bellvillle' , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
       
    });
    it('should show registration number, for Paarl' , function(){
      
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });
    it('should show registration number, for Cape Town' , function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it('should show registration number, for some other place' , function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });

});