const http = require("http");
http.createServer((request,response)=>{
    response.end("this is node js")
}).listen(3000,()=>{
    console.log("listen port 3000")
})