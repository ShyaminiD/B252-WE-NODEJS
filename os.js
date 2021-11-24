const os = require("os");//inbulit package , importing os
console.log("Free memory" , os.freemem());
console.log("Total memory" , os.totalmem());
console.log("The Version" , os.version());
console.log("The Versions", os.cpus());
console.log('List of network Interfaces: ' + os.networkInterfaces());
console.log('OS default directory for temp files : ' + os.tmpdir());
console.log("CPU architecture: " + os.arch());
console.log('OS release : ' + os.release());
console.log('operating system platform: ' + os.platform());
console.log('OS release : ' + os.release());
console.log("Operating system name: " + os.type());