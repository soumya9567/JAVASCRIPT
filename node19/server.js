const http = require("http");
const fs = require('fs')
const path=require('path')

const filePath=path.join(__dirname,'index.html')
 const server=http.createServer((request,response)=>{
    console.log(request.url,"req url")
    console.log(request.method,"request method")
 

    if(request.url==="/" && request.methhod=== "GET"){
    fs.readFile(filePath,'utf-8',(error,data)=>{
        if(error){
            response.end("file not found")
        }
        response.end(data)
    })
} else 
    // console.log(request.url)
    if(request.url==="/script.js"&& request.method==="GET"){

        fs.readFile(__dirname ,"utf-8","script.js",(error,data)=>{
            if(error){
                response.end("file not found")
            }
            response.end(data)
        })
        }
        
});



     

server.listen(3000,()=>{
    console.log("listen port 3000")
});