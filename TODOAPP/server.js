const http = require("http");
const path = require("path");
const fs = require("fs");
const filepath = path.join (__dirname,"todo.json")

if(!fs.existsSync(filepath)){
    const firstcontent = JSON.stringify([],null,2)
    fs.writeFileSync(filepath,firstcontent)
    console.log("A new file todo.json is created")
    
}

const filecontent = fs.readFileSync(filepath,"utf-8")
console.log(filecontent,"file content")





const server = http.createServer((req, res) => {
  console.log(req.method, "request method");
  console.log(req.url, "request url");
  if ((req.method === "GET" && req.url === "/")) {
    fs.readFile(path.join(__dirname, "index.html"), function (err, data) {
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }

  if ((req.method=== "GET" && req.url === "./add")){
    fs.readFile(path.join(__dirname,"script.js",function(err,data){
        res.writeHead(200,{"content-type":"application/javascript"});
        res.write(data)
        res.end()
    }))
  }


});

server.listen(8080, () => {
  console.log("server listen");
});
