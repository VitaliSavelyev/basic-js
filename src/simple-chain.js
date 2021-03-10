const CustomError = require("../extensions/custom-error");

/
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
