import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('this test is the function isWeekday' , function(){

    it('should show False, if not a Weekday' , function(){
        assert.equal(isWeekday('Saturday'), false);

    });
    it('should show False, if not a Weekday' , function(){
      
        assert.equal(isWeekday('Sunday'), false);

    });

    });