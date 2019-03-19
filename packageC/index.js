const version = '2.0.0';

module.exports = function (tip) {
  console.log(`==== package C version ${version} ====`);
  if (tip) console.log(`[tip in C] : ${tip}`);
};
