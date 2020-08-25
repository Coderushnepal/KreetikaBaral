//toString narakhna ni farak pardaina

const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  try {
      //Synchronous file read 
    const file = fs.readFileSync('sample-text.txt');
    // Send the response body
    response.end(file.toString());
  } catch (err) {
    console.log('An error occurred:', err);
  }
}).listen(1234);

// Console will print the message
console.log('Server running at http://127.0.0.1:1234/');
