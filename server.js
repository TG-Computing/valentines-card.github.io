const http = require('http');
const fs = require('fs');
const path = require('path')

console.log("Starting server...")

http.createServer((req, res) => {
    if (req.url == '/' || req.url == '/index.html') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/resources/style/style.css') {
        fs.readFile(path.join(__dirname, 'resources', 'style', 'style.css'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/resources/javascript/main.js') {
        fs.readFile(path.join(__dirname, 'resources', 'javascript', 'main.js'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/resources/javascript/jquery-3.7.1.min.js') {
        fs.readFile(path.join(__dirname, 'resources', 'javascript', 'jquery-3.7.1.min.js'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    }else if (req.url == '/resources/images/background_1.png') {
        fs.readFile(path.join(__dirname, 'resources', 'images', 'background_1.png'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/resources/images/background_2.png') {
        fs.readFile(path.join(__dirname, 'resources', 'images', 'background_2.png'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/resources/images/background_3.png') {
        fs.readFile(path.join(__dirname, 'resources', 'images', 'background_3.png'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.write(data);
            res.end();
        });
    }
}).listen(8080)

console.log("Server started on http://localhost:8080")