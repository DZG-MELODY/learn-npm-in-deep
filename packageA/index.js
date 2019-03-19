const pkgC = require('learn-npm-pkg-c');
const version = '3.0.0';

module.exports = function (tip) {
  console.log(`==== package A version ${version} ====`);
  if (tip) console.log(`[tip in A] : ${tip}`);
  console.log('>>>>>>>>>>>');
  pkgC('call package C in package A');
  console.log('<<<<<<<<<<<');
};
