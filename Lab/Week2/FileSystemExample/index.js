const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "math.js");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// os - System Information
const os = require('os');
console.log(`Hostname: ${os.hostname()}`);


// http - Simple server
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('<h5>Hello, World!</h5>\n');
});
server.listen(3000);
//! now copy and paste localhost:3000/ to in browser

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('myEvent', () => console.log('Event triggered!'));
myEmitter.emit('myEvent');