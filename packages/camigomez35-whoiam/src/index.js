const upper = require('camigomez35-uppercase');

const myName = "Maria Camila Gómez Rpo"

const whoIam = () => {
  return myName;
}

const whoIamUpper = () => {
  return upper.upperCaseName(myName);
}

module.exports = { whoIam, whoIamUpper };
