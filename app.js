const http = require('http') 
 
const reqList = function(req, res) { 
    res.writeHead(200); 
    res.end("Hola Supercampeones") 
} 
 
const server = http.createServer(reqList); 
 
server.listen(80) 