const pkgA = require('learn-npm-pkg-a');
const version = '1.0.0';

module.exports = function (tip) {
  console.log(`==== package B version ${version} ====`);
  if (tip) console.log(`[tip in B] : ${tip}`);
  console.log('>>>>>>>>>>>');
  pkgA('call package A in package B');
  console.log('<<<<<<<<<<<');
};
