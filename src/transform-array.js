const CustomError = require("../extensions/custom-error");
console.log("-------------------------------------------------------------------------------------------")
module.exports = function transform(arr) {
  console.log("**********")
  if (Array.isArray(arr) === false) { throw new Error('Error! no Array!') }

  // console.log(arr)
  let newArr = [];
  for (x in arr) {
    // console.log(x)
    if (typeof arr[x] === "string") {
      // console.log("len: " +arr.length)
      if (arr[x] === "--discard-next") {newArr.splice((x * 1) + 1, 1); }
      else if (arr[x] === "--discard-prev" ){ newArr.splice((x * 1) - 1, 1);}
      else if (arr[x] === "--double-next" &&  x !== (arr.length-1).toString() ){ newArr.push(arr[(x * 1) + 1]); }
      else if(arr[x] === "--double-prev" &&  x !== "0" ){ newArr.push(arr[(x * 1) - 1]); }
    }
    else {
      newArr.push(arr[x])
    }
  }
  console.log(` ${arr} @@@@@ ${newArr} `)//
  return newArr;
};
