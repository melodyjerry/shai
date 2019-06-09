const shai  = require('../lib/shai');
const Schema =  require('async-validator');

describe('async兼容验证测试', function () {
  var source = {
    name: '',
    age: 40
  }

  shai.validator.setting.isdev = true;
  var ageRule = shai.validator.number.required.name('年龄').lt(30).gt(50).get();  

  /* var test =  {
    type: 'number',
    required: true,
    min: 5,
    max: 10,
  }; */
  /* var test =  [{
    type:'number',
    required: true,
    message: '11111'
  },{
    validator: (rule, value, callback) => {      
      return new Error("%s must be lowercase alphanumeric characters", rule.field);
    }
  }];  */

  var schema = new Schema({
    age: ageRule
  }); 

  //console.dir(ageRule);
  
  schema.validate(source, (errors, fields) => {
    console.log(errors);
  })

})