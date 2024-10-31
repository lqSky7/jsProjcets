const fs = require("fs");
const os = require("os");

const eventEmitter = require("events"); // this is an entire class not an Utility Module like above 2, so we name it differently 

class Logger extends eventEmitter {
    superman(hi){
        this.emit("hi", "the message is"); // this is a key, value pair. to catch these emmitions you have to use the exact same key: "hi"
    }
}

const kk = new Logger();
const logfile = "./log.txt"

const logToFile = (event) => {
    const logmsg = `${new Date().toISOString()} - Event Message: ${event} \n`
    fs.appendFile(logfile, logmsg);
}


kk.on("hi", logToFile); // litensing to event with the exact same key.

setInterval(() => {
    return kk.superman(`free memory is: ${os.freemem}`);
}, 3000)

kk.superman("started");