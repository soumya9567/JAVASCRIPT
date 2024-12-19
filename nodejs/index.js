const http = require("http");
const fs = require('fs')
// const { stringify } = require("querystring");
 const server=http.createServer((request,response)=>{
    console.log(request.method,"request")
    // response.end('<html>')
 

   
    fs.readFile("./index.html","utf-8",(error,data)=>{
        if(error){
            response.end("file not found")
        }
        response.end(data)
    })
    console.log(request.url)
});
 

     

server.listen(3000,()=>{
    console.log("listen port 3000")
});



// let school={
//     name:"soumya",
//     rollno:"38",
//     subject:'cs'
// }
// const myJSON = JSON.stringify(school);
// const pase = JSON.parse(myJSON)


// console.log(myJSON)
// console.log(pase)
// console.log(myJSON.parse(school))