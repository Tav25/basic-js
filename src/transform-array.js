const CustomError = require("../extensions/custom-error");
console.log("-------------------------------------------------------------------------------------------")
module.exports = function transform(arrIndex) {
  // console.log(`[${arr}]`);
  if (Array.isArray(arrIndex) === false) { throw new Error('Error! no Array!') }
  
  let newArr = [];
  let arr = [];
  let command = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"]

  // console.log(arr)
  for (x in arrIndex){ arr.push(arrIndex[x])}

  for (x in arr) {
    // console.log(x)
    // console.log(command.includes(arr[x]) + "**************");
    if (command.includes(arr[x])) {
      // console.log("len: " +arr.length)
      if (arr[x] === "--discard-next" || arr[x] === "--discard-next") {
        arr.splice((x * 1), 1);
        arr.splice((x * 1) + 1, 1);
        if (arr[x * 1 + 2] === "--double-prev") { console.log("dop") }
      }
      else if (arr[x] === "--discard-prev") { newArr.splice((x * 1) - 1, 1); }
      else if (arr[x] === "--double-next" && x !== (arr.length - 1).toString()) { newArr.push(arr[(x * 1) + 1]); }
      else if (arr[x] === "--double-prev" && x !== "0") { newArr.push(arr[(x * 1) - 1]); }
    }
    else {
      newArr.push(arr[x])
    }
  }
  console.log(`-----------------------------
in: [${arrIndex}]
res:[${newArr}]

`)//
  return newArr;
};
