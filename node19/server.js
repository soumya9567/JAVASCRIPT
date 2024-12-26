// const http = require("http");
// const fs = require('fs');
// const path = require('path');

// const dummy = import("./dummy.js")
import http from "http";
import fs from "fs";
import path from "path"


const jsonpath = path.join(__dirname, "todo.json");

async function readjsonfile() {
    if (!fs.existsSync(jsonpath)) {
        fs.writeFileSync(jsonpath, JSON.stringify([])); 
    }
    const fileContent = await fs.promises.readFile(jsonpath, 'utf-8');
    const data = JSON.parse(fileContent); 
    return data;
}

async function addData(todo) {
    await fs.promises.writeFile(jsonpath, JSON.stringify(todo, null, 2)); 
}

const server = http.createServer((request, response) => {
    console.log(request.url, "req url");
    console.log(request.method, "request method");

    const todoPath = path.join(__dirname, 'index.html');
    const scriptPath = path.join(__dirname, 'script.js');

    if (request.url === "/" && request.method === "GET") {
        fs.readFile(todoPath, 'utf-8', (error, data) => {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end("File not found");
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    } else if (request.url === "/script.js" && request.method === "GET") {
        fs.readFile(scriptPath, "utf-8", (error, data) => {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end("File not found");
            } else {
                response.writeHead(200, { 'Content-Type': 'application/javascript' });
                response.end(data);
            }
        });
    } else if (request.url === "/getadd" && request.method === "POST") {
        let body = "";

        request.on("data", (chunk) => {
            body += chunk;
        });

        request.on("end", async () => {
            try {
                const todos = await readjsonfile();
                console.log("Existing todo data:", todos);
                
                const newTodo = JSON.parse(body); 
                todos.push(newTodo);

                console.log("Updated todo data:", todos);

                await addData(todos); 

                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ success: true, todos }));
            } catch (error) {
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ success: false, error: "Failed to add todo" }));
            }
        });
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});
