import assert from "assert";
import transportFee from "../transportFee.js";

describe('this test is the function transportFee' , function(){
    it('should show R20 for morning' , function(){
        assert.equal(transportFee('morning'), 'R20');
       
    });
    it('should show R10 for afternoon' , function(){
      
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should show free for night' , function(){
      
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

    });

});