const pkgA = require('learn-npm-pkg-a');
const pkgB = require('learn-npm-pkg-b');

function output () {
  console.log();
  console.log();
  pkgA('call pkgA');
  console.log();
  console.log();
  pkgB('call pkgB');
  console.log();
  console.log();
}

output();
