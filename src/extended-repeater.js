const CustomError = require("../extensions/custom-error");

module.exports = function repeater(stringIn, option) {
  // console.log(option)
  if (option.separator === undefined) option.separator = "+";
  if (option.additionSeparator === undefined) option.additionSeparator = "|";
  if (option.additionRepeatTimes === undefined) option.additionRepeatTimes = 1;
  if (option.repeatTimes === undefined) option.repeatTimes = 1;

  let stringOut = "";
  let i = 0;
  let additionIn = ""
  if (option.addition !== undefined) { // if !addition 
    additionIn = repeatStr((option.addition + option.additionSeparator), option.additionRepeatTimes);
    additionIn = additionIn.slice(0, additionIn.length - option.additionSeparator.length)
  }
  stringOut = repeatStr((stringOut + stringIn + additionIn + option.separator), option.repeatTimes)
  stringOut = stringOut.slice(0, stringOut.length - option.separator.length)
  return stringOut;
};

function repeatStr(str, n = 1) {
  var new_str = '';
  while (n-- > 0) new_str += str;
  return new_str;
}