const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  countArray = 1

  calculateDepth(array) {
    for (let x of array) {
      if (Array.isArray(x)) {
        countArray++
        array = array.flat()
        calculateDepth(array)      // 
        break
      }else{

        let xcv = this.countArray
        this.countArray = 1
        return xcv
      }
    }
  }
}