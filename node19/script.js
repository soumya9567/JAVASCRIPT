async function handleSubmit(event) {
    event.preventDefault();
    const todo = document.getElementById("todo").value;
    try {
        const response = await fetch("http://localhost:3000/getadd", { 
            method: "POST",
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({ todo }) 
        });
        
        if (!response.ok) {
            throw new Error("Network issue"); 
        }

        const result = await response.json(); 
        console.log(result);
    } catch (error) {
        console.log("Error:", error); 
    }
}


async function fetchData() {
   
        const response = await fetch("http://localhost:3000/todos", { 
            method: "GET"
        });

  
}
// const list= document.getElementById("list-container");
// async function fetchdata() {
//     console("list")
//     const res=await fetch("https://localhost:3000/todos",{
//         method:"GET"
//     })
//     todos.map(data =>{
//         <li>data.todo</li>
//     })
// }fetchData()
   
