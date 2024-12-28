async function handleEvent(){
   
    // console.log("prevent default")


const todo = document.getElementById("todo").value;
const response = await fetch("http://localhost:8080/add",{
    method : "GET",
    headers : {"content-Type ": "application/json"},
    body : JSON .stringify(todo)
});
if(!response.ok){
    throw new error ("network issue")
}


else{
    const data = await response.json()
    console.log(data)
}
}