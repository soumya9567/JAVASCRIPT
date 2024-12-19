
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log(request.method, "request");

    let filePath = '.' + request.url; // Default to the file requested in the URL

    // If root is requested, serve index.html
    if (filePath == './') {
        filePath = './index.html';
    }

    // If style.css is requested, serve style.css
    if (request.url === '/style.css' && request.method === 'GET') {
        filePath = './style.css';
    } 
    // If index.js is requested, serve index.js
    else if (request.url === '/index.js' && request.method === 'GET') {
        filePath = './index.js';
    } 

    // Read and serve the requested file
    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end("File not found");
        } else {
            // Set content type based on the file type
            let contentType = 'text/html'; // Default content type for HTML files

            // Dynamically set the content type based on the file extension
            if (filePath.endsWith('.css')) {
                contentType = 'text/css'; // For CSS files
            } else if (filePath.endsWith('.js')) {
                contentType = 'application/javascript'; // For JS files
            }

            // Send the response with the correct content type
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});


