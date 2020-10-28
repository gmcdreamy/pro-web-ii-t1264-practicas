// const http = require('http')
// const hostname = '127.0.0.1' //localhost
// const port = 3000
// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('hola node.js');
// });

const http = require('http')
const hostname = '127.0.0.1' //localhost
const port = 3000
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end('{"mensaje":"hola node.js"}');
});

server.listen(port,hostname, () =>{
    console.log(`aplicacion corriendo en http//:${hostname}:${port}`)
})