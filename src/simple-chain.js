const CustomError = require("../extensions/custom-error");

/*
const chainMaker = {
    mass:[],
  getLength() {
      return this.mass.length;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value='') {
        console.log(this.mass);
      this.mass.push(`( ${value} )`);
      return this;
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
        if((position<1)||(position>this.mass.lengt)){throw new Error()}
      this.mass.splice(position-1, 1);
return this;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
      this.mass.reverse();
      return this;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
        this.mass.join('~~');
      return this.mass;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};
*/
const chainMaker = {
    mass : [],
    getLength() {
        return this.mass.length;
    },
    addLink(value = '( )') {
        this.mass.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (position < 0 || position > this.mass.length || !position || !(Number.isInteger(position))) {
            this.mass = [];
            throw new Error();
        }
        this.mass.splice(position-1,1);
        return this;
    },
    reverseChain() {
        this.mass.reverse();
        return this;
    },
    finishChain() {
        let str = this.mass.slice();
        this.mass = [];
        return str.join('~~');
    }
};

module.exports = chainMaker;
