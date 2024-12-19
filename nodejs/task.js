
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log(request.method, "request");

    let filePath = '.' + request.url; // Default to the file requested in the URL

    if (filePath == './') {
        filePath = './index.html';
    }

    if (request.url === '/style.css' && request.method === 'GET') {
        filePath = './style.css';
    } 
    else if (request.url === '/index.js' && request.method === 'GET') {
        filePath = './todo.js';
    } 

    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end("File not found");
        } else {
            let contentType = 'text/html'; 

            if (filePath.endsWith('.css')) {
                contentType = 'text/css'; 
            } else if (filePath.endsWith('.js')) {
                contentType = 'application/javascript'; 
            }

            response.writeHead(200, { 'Content-Type': contentType });
            response.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});


