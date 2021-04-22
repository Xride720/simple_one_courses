const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('<b>Hello World</b>');
    console.log('hello world');
})
server.listen(8080);