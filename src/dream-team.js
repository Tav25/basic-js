const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrName) {
  if (Array.isArray(arrName) === false) { return false } // if not array
  let nameDreamTeam = [];
  for (x in arrName) {
    let name = arrName[x]
    if (typeof name === 'string') { // test string and uppercase if 173 all lowercase
      nameDreamTeam.push(name.trim()[0].toUpperCase()); // toUpperCase for all lowercase array
      nameDreamTeam.sort().join(''); //sort 
    }
  }
  return nameDreamTeam.join('');
}
