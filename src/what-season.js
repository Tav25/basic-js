const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // console.log(typeof date);
  // return Error;
  // console.log(date.getFullYear());
  // console.log( "*." + toString.call(date)+".*" )

  if (date === undefined) return 'Unable to determine the time of year!';
  if (toString.call(date) !== "[object Date]") throw new Error('Error!') ;

  const month = date.getMonth();
  let season;

  if (month < 2) { season = "winter" }
  else if (month < 5) { season = "spring" }
  else if (month < 8) { season = "summer" }
  else if (month < 11) { season = "autumn" }
  else if (month < 12) { season = "winter" }

  // console.log(season + "++");
  return season

};
