const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type) {
        this.type = type;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  encrypt(plainText, keyword) {
      if( typeof(plainText) !== "string" ){
          throw new Error('Not implemented');
      }
      if( typeof(keyword) !== "string" ){
          throw new Error('Not implemented');
      }
    plainText = plainText.toUpperCase();
    keyword = keyword.match(/[a-z]/gi).join("").toUpperCase();
    var encryptedText = "";
    var specialCharacterCount = 0;
    for( var i = 0; i < plainText.length; i++ ){
      var keyLetter = (i - specialCharacterCount) % keyword.length;
      var keywordIndex = this.alphabet.indexOf(keyword[keyLetter]);
      var sdwig=keywordIndex+this.alphabet.indexOf(plainText[i]);
      if(sdwig>=26){
        sdwig=sdwig-26;
      }
      if(this.alphabet.indexOf(plainText[i])!==-1){
        encryptedText += this.alphabet.charAt(sdwig)
      }else{
        encryptedText += plainText[i];
        specialCharacterCount++;
      }
    }
    return this.type===false ? encryptedText.split('').reverse().join('') : encryptedText;
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }    
  decrypt(encryptText, keyword) {
      if( typeof(encryptText) !== "string" ){
          throw new Error('Not implemented');
      }
      if( typeof(keyword) !== "string" ){
          throw new Error('Not implemented');
      }
    encryptText = encryptText.toUpperCase();
    keyword = keyword.match(/[a-z]/gi).join("").toUpperCase();
    var decryptedText = "";
    var specialCharacterCount = 0;
    for( var i = 0; i < encryptText.length; i++ ){
      var keyLetter = (i - specialCharacterCount) % keyword.length;
      var keywordIndex = this.alphabet.indexOf(keyword[keyLetter]);
      var sdwig=this.alphabet.indexOf(encryptText[i])-keywordIndex;
      if(sdwig<0){
        sdwig=26+sdwig;
      }
      if(this.alphabet.indexOf(encryptText[i])!==-1){
        decryptedText += this.alphabet.charAt(sdwig)
      }else{
        decryptedText += encryptText[i];
        specialCharacterCount++;
      }
    }
    return this.type===false ? decryptedText.split('').reverse().join('') : decryptedText;
    throw new CustomError('Not implemented');
  }

    // remove line with error and write your code here

}

module.exports = VigenereCipheringMachine;
