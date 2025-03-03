// const {sayHello} = require('./helper');
// sayHello();

// Global variables
// console.log('dirname',__dirname);
// console.log('filename',__filename);
// console.log('processCwd',process.cwd());

// Path
// const path = require("path");
// const joinPath = path.join('test','test2','test3');
// console.log(joinPath);

// OS
// const os = require("os");
// console.log(os.arch());
// console.log(os.cpus());

// FS
const fs = require('fs');
const path = require("node:path");
fs.readFile(path.join(__dirname, 'test', 'text.txt'), {encoding: 'utf-8'},(err, data) => {
    if (err) throw new Error();
    console.log(data);
})

fs.writeFile(path.join(__dirname, 'test', 'text2.txt'), 'Hello Okten',(err) => {
    if (err) throw new Error();
})