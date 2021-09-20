// default wrapper in first line
// function(exports, require, module, __filename, __dirname)
const url = "http://www.facebook.com";

console.log("--------- customize function ------");
function log99(message) {
  console.log(`logger2.log => ${message}`);
}
console.log("--------- customize function end ------");

module.exports.log99 = log99; // export function
module.exports.endpoint = url; // export property
