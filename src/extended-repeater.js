const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let str1=String(str);
  let str2=String(str);
  let obj=options;
  if ("repeatTimes" in obj){
    str1=str1.repeat(options.repeatTimes).split('');
    var strmass = [];
    var result = '';
    for (var i=0; i<str1.length; i++ ){
      if (result!=str2) {
        result=result+str1[i];
        if(result==str2){
          strmass.push(result);
          result=''
        }
      }
    }
    str1=strmass.join('+');
  }
  if ("separator" in obj){
    str1=str1.split('+').join(options.separator);
  }
  if ("addition" in obj){
    if (typeof options.separator!='string'){
      str1=str1.split('+');
    } else {
      str1=str1.split(`${options.separator}`);
    }
      if (typeof options.additionRepeatTimes!='number'){
          options.additionRepeatTimes=1;
      }
    var z=1;
    while(z<=options.additionRepeatTimes){
    for (i=0; i<str1.length; i++){
        if (z===options.additionRepeatTimes){
            str1[i]=str1[i]+options.addition;
        } else {
            if (typeof options.additionSeparator!='string'){
                options.additionSeparator='|';
            }
            str1[i]=str1[i]+options.addition+options.additionSeparator;
        }
    }
    z++;
    }
    if (typeof options.separator!='string'){
      str1=str1=str1.join('+');
    } else {
      str1=str1.join(options.separator);
    }
  }
  return str1;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
  