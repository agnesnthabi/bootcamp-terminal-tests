import assert from "assert";
import regCheck from "../regCheck.js";

describe('this test the function regCheck' , function(){
    it('should show True for the first one, False for the second one' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
       
    });
    it('should show True for the first one, False for the second one' , function(){
      
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'M'), false);
    });
    it('should show True for the first one, False for the second one' , function(){
      
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });
    it('should show True for the first one, False for the second one' , function(){
      
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

});