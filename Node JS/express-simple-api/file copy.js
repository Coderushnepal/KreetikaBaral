const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  const file = fs.readFile('sample-text.txt', (err, data) => {
    if (err) {
      console.log('An error occurred.', err);
    }
    // Send the response body
    response.end(data.toString());
  });
}).listen(1234);

// Console will print the message
console.log('Server running at http://127.0.0.1:1234/');

