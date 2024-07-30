import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('this test is the function totalPhoneBill' , function(){
    it('should show the amount for 2 calls, 3 smses' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

       
    });
    it('should show the amount for 1 call, 1 sms ' , function(){
      
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('should show the amount for 2 smses' , function(){
      
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });


});