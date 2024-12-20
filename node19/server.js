const http = require("http");
const fs = require('fs')
const path=require('path');



const newpath=path.join(__dirname,"todo.json")
async function readjsonfile() {
    if (!fs.existsSync(newpath)) {
        fs.writeFileSync(newpath, JSON.stringify([])); // Create an empty array if file does not exist
    }
    const fileContent = fs.readFileSync(newpath, 'utf-8'); // Read the file content
    const data = JSON.parse(fileContent); // Parse the content into a JavaScript array
    return data;
}



const filePath=path.join(__dirname,'index.html')
const scriptPath=path.join(__dirname,'script.js')

 const server=http.createServer((request,response)=>{
    console.log(request.url,"req url")
    console.log(request.method,"request method")
 

    if(request.url==="/" && request.method=== "GET"){
    fs.readFile(filePath,'utf-8',(error,data)=>{
        if(error){
            response.end("file not found")
        }
        response.end(data)
    })
} else 
    // console.log(request.url)
    if(request.url==="/script.js"&& request.method==="GET"){

        fs.readFile(scriptPath,"utf-8",(error,data)=>{
            if(error){
                response.end("file not found")
            }
            response.end(data)
        })
} else
if(request.url==="/getadd" && request.method==="POST"){
    console.log("enter the path")
    let body = " ";
    request.on("data", (chunk)=>{
        body+=chunk;
    })
    console.log(body,"body data");


    request.on("end", async () => {
        
            const todo = await readjsonfile();
            console.log("Existing todo data:", todo);

            const parsedBody = JSON.parse(body);
            console.log("Received data:", parsedBody);


 })}
        
;


server.listen(3000,()=>{
    console.log("listen port 3000")
})
 })