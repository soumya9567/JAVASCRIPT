const http = require("http");
const path = require("path");
const fs = require("fs");
const filepath = path.join (__dirname,"todo.json")

async function readjsonFile(){
  
if(!fs.existsSync(filepath)){
    const firstcontent = JSON.stringify([],null,2)
    fs.writeFileSync(filepath,firstcontent)
    console.log("A new file todo.json is created")
    
}

const filecontent = fs.readFileSync(filepath,"utf-8")
// console.log(filecontent,"file content")
const data = JSON.parse(filecontent)
return data;

}

async function addData(){

  await fs.writeFileSync(filepath,JSON.stringify(todo))

} 

const server = http.createServer((req, res) => {
  console.log(req.method, "request method");
  console.log(req.url, "request url");
  if ((req.method === "GET" && req.url === "/")) {
    fs.readFile(path.join(__dirname, "index.html"), function (err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Internal Server Error");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }






  if ((req.method=== "GET" && req.url === "/script")){
    fs.readFile(path.join(__dirname,"script.js",function(err,data){
        res.writeHead(200,{"content-type":"application/javascript"});
        res.write(data)
        res.end()
    }))
  }






  if (req.method === "POST" && req.url === "/add") {
    console.log("enter the data");
    let body = "";
  
    req.on("data", (chunk) => {
      body += chunk;
      console.log(body, "chunk body");
    });
  
    req.on("end", async () => {
    
        const todos = await readjsonfile();
        console.log(todos,"=========================")
        const newTodo = JSON.parse(body);
        console.log(newTodo,"================new")
        todos.push(newTodo);
        console.log(todos,"==============todos")


        await addData(todos)

        res.end("Internal Server Error");
      }
    );
  }
  else{
    res.writeHead(401, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
  


});

server.listen(8080, () => {
  console.log("server listen");


});
