const say = require('learn-npm-pkg-a');
const version = '1.0.0';
module.exports = function introduce (myName) {
  console.log('this is a introduce ' + version);
  say('everyone');
  console.log('I am ' + myName);
};
