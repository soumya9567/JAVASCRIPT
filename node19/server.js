// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const { clear } = require("console");
import http from "http";
import fs from "fs";
import path from "path";
// import tododata from "./todo.js"



import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname)
// console.log(tododata)
const jsonpath = path.join(__dirname, "todo.json");
const content = JSON.stringify({ tododata: [] });
// console.log(content,"content")
// const jsonpath = path.join(__dirname, "todo.json");



async function readjsonfile() {
    try {
      
        if (!fs.existsSync(jsonpath)) {
            await fs.promises.writeFile(jsonpath,content,"utf-8"); 
        }
        const fileContent = await fs.promises.readFile(jsonpath, "utf-8");
        return JSON.parse(fileContent); 
    } catch (error) {
        console.error("Error reading JSON file:", error);
        throw error;
    }
}


async function writejsonfile(data) {
    try {
        await fs.promises.writeFile(jsonpath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error writing JSON file:", error);
        throw error;
    }
}


const server = http.createServer(async (request, response) => {
    console.log(request.url, "req url");
    console.log(request.method, "request method");

    const todoPath = path.join(__dirname, "index.html");
    const scriptPath = path.join(__dirname, "script.js");

    if (request.url === "/" && request.method === "GET") {
        
        try {
            const data = await fs.promises.readFile(todoPath, "utf-8");
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(data);
        } catch (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Error reading index.html");
        }
    } else if (request.url === "/script.js" && request.method === "GET") {
        
        try {
            const data = await fs.promises.readFile(scriptPath, "utf-8");
            response.writeHead(200, { "Content-Type": "application/javascript" });
            response.end(data);
        } catch (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Error reading script.js");
        }
    } else if (request.url === "/todos" && request.method === "GET") {
       
        try {
            const todos = await readjsonfile();
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify(todos));
        } catch (error) {
            response.writeHead(500, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ success: false, error: "Failed to retrieve todos" }));
        }
    } else if (request.url === "/todos" && request.method === "POST") {
        
        let body = "";
        request.on("data", chunk => {
            body += chunk.toString();
        });
        request.on("end", async () => {
            try {
                const newTodo = JSON.parse(body);
                const todos = await readjsonfile();
                todos.push(newTodo);
                await writejsonfile(todos);
                // console.log("newtodo list",newTodo)
                // console.log("Updated todos list:", todos);
            
                response.writeHead(201, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ success: true, todo: newTodo }));
            } catch (error) {
                response.writeHead(500, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ success: false, error: "Failed to add todo" }));
            }
        });
    } else {
       
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});
