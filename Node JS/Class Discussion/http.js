//yo http package ho jun node install garne bittikai aauchha
//require le chai tyo packagelai import gareko ho

//createServer le as parameter function linchha
//127.0.0.1 yetti ip address le local host lai point gariraako hunchha

const http = require('http');   

http.createServer((request, response) => {
   // Send the response body
   response.end('This is my first http server in NodeJS\n');
}).listen(1234);

// Console will print the message
console.log('Server running at http://127.0.0.1:1234/');


//-------Can be written like this also--------
// const http = require('http');  

// function requestHandler(request, response) {
//     // Send the response body
//    response.end('This is my first http server in NodeJS\n');
// }

// const server = http.createServer(requestHandler);
   
// server.listen(1234);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:1234/');
