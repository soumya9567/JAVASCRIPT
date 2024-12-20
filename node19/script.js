async function handleSubmit(event){
    event.preventDefault();
    const todo  = document.getElementById("todo").value;
    try{
    const response = await fetch("http://localhost:3000",{
        method :"POST",
        headers:{ "content-type":'apllication/JSON'},
        body:JSON.stringify(todo)
        
        
    })
    if(!response.ok){
        throw new error("netwok issue")
    }
}
catch(error){
    console.log(error,"error")

   
}
}


async function fetchData(){
    const response = await fetch("http://localhost:3000/getadd",{
        method :"GET"
    })


}