async function handleSubmit(event){
    event.preventDefault();
    const todo  = document.getElementById("todo");
    const response = await fetch("http://localhost:3000",{
        method :"POST",
        headers:{ "content-type":'apllication/JSON'},
        body:JSON.stringify(todo)
        
        
    })
}