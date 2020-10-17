// let countArray = 1
// function calculateDepth(array){
//     for (let x of array){
//     if (Array.isArray(x)){
//       countArray++
//       array = array.flat()
//       calculateDepth(array)      // 
//       break
//       }
//   }
//   console.log(countArray)
// }

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  depth = 1

  calculateDepth2(array) {
    for (let x of array) {
      if (Array.isArray(x)) {
        this.depth++
        array = array.flat()
        this.calculateDepth2(array)      // 
        break
      }
    }
    console.log(this.depth)
    
  }
  
  calculateDepth(array) {
    if (array.length === 0) return 1
    this.calculateDepth2(array)
    const x = this.depth
    this.depth = 1
    return x
  }


}