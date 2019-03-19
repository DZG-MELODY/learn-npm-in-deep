const pkgA = require('learn-npm-pkg-a');
const pkgC = require('learn-npm-pkg-c');

function output () {
  console.log();
  console.log();
  pkgA('call pkgA');
  console.log();
  console.log();
  pkgC('call pkgC');
  console.log();
  console.log();
}

output();

module.exports = output;
