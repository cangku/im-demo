const fs = require('fs');
const io = require('socket.io-client');
exports.router = (req, res) => {
    if(req.url === '/' || req.url === '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        // 读取文件
        fs.readFile('./index.html', function(err, data) {
            if(err) throw err;
            res.end(data);
        })
    } else if(req.url === '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        // 读取文件
        fs.readFile(`.${req.url}`, function(err, data) {
            if(err) throw err;
            res.end(data);
        })
    } else if(req.url === '/socket.io/socket.io.js') {
        res.writeHead(200, { 'Content-Type': 'application/x-javascript' });
        // 读取文件
        res.end(io);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`Not Found`);
    }
    
}