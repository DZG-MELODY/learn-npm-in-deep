const pkgC = require('learn-npm-pkg-c');
const version = '2.0.0';

module.exports = function (tip) {
  console.log(`==== package B version ${version} ====`);
  if (tip) console.log(`[tip in B] : ${tip}`);
  console.log('>>>>>>>>>>>');
  pkgC('call package C in package B');
  console.log('<<<<<<<<<<<');
};
