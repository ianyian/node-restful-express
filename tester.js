const logger99 = require("./logger2");
const LoggerClass = require("./logger");
const loggerclass = new LoggerClass();
const Myxx = require("./logger");
///Myxx.xxx();
//logger99.log99("hello world");
//console.log(`tester end point => ${logger99.endpoint}`);

//register a listener
loggerclass.on("messageLogged", (arg) => {
  console.log("tester.loggerclass.Listner ==> called", arg);
});

//push message
loggerclass.log("tester.logclss.log ==> this is loggerclass message");
