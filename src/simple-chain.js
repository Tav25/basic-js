const CustomError = require("../extensions/custom-error");

const chainMaker = {
  splitter: "~~",
  chainArr: [],

  getLength() {
    return this.chainArr.length
  },

  addLink(value) {
    this.chainArr.push(value);
    return this
  },


  removeLink(position) {
    if (position > 0
      && position < this.chainArr.length
      && position % 1 === 0
    ) {
      this.chainArr.splice(position - 1, 1);
    }
    else { 
      this.chainArr = []
      throw new Error('Err') }
    return this
  },


  finishChain() {
    for (x in this.chainArr) {
      // console.log(this.chainArr[x])
      this.chainArr[x] = `( ${this.chainArr[x]} )${this.splitter}`
    }
    string = this.chainArr.join('').slice(0, -2)
    this.chainArr = []
    return string
  },

  reverseChain() {
    this.chainArr.reverse()
    return this
    // remove line with error and write your code here
  },
}

console.log("-----------------------------------")

module.exports = chainMaker;
