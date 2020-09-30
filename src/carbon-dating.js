const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(inp) {

  if (typeof (inp) !== 'string') { return false };// if not string
  if (isNaN(inp)) { return false } // if not digital
  if (inp <= 0) { return false } // if zero

  let cof = 0.693;
  let rez = Math.log(15 / inp) / (cof / HALF_LIFE_PERIOD)//https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2
  rez = Math.round(rez)

  if ( rez < 0) { return false } // if "-rez"
  return rez
};