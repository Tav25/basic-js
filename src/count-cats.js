const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // console.log(matrix.length)
  let cat = 0;
  for (x in matrix){
    // console.log(matrix[x])
    for (i in matrix[x]){ 
      // console.log(matrix[x][i])
      if ( matrix[x][i] === '^^') {cat++;}
    }
  }
  return cat;
  };
