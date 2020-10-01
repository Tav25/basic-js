const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disc, speed) {
  const steps = 2 ** disc - 1;// 2**n-1
  const secMin = Math.floor(steps / (speed / 3600));// 
  console.log(`    ${steps} ${secMin}`);
  return { turns: steps, seconds: secMin };
};