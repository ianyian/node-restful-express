// default wrapper in first line
// function(exports, require, module, __filename, __dirname)
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events"); // events = class, which need to init
const emitter = new EventEmitter();
const url = "http://www.google.com";

///console.log("--------- default function ------");
///console.log(__filename);
///console.log(__dirname);
///console.log("--------- default function end ------");

///console.log("--------- OS method ------");
///const totalMemory = os.totalmem();
///const freeMemory = os.freemem();
///console.log("Total Memory => " + totalMemory);
///console.log(`Total Free Memory => ${freeMemory}`);
///console.log("--------- OS method end ------");

///console.log("--------- file method ------");
///var pathobj = path.parse(__filename);
///console.log(`path obj => ${pathobj}`);
///const files = fs.readdirSync("./");
///console.log(`files => ${files}`);
///console.log("--------- file method end ------");

///console.log("--------- event ------");

//Register a listener
//arg or e or anything
//emitter.on("messageLogged", function (arg) { // below is arrow function coding, both are same
///emitter.on("messageTest", (arg) => {
///  console.log("Listener called", arg);
///});

// raise an event
///emitter.emit("messageTest", { id: 1, url: "http://" }); //emit = making a noise, produce something

///console.log("--------- event end ------");

class Logger extends EventEmitter {
  log(message) {
    console.log(`Logger.log => ${message}`);

    //raise an evnt
    this.emit("messageLogged", { id: 88, myMsg: message, name: "Ah Huat" });
  }
}

function xx() {
  console.log("hello xx");
}

///module.exports.endpoint = url; // export property
module.exports = Logger; // export class
module.exports.xxx = xx;
