
async function handleSubmit(event) {
    event.preventDefault()

    const todo = document.getElementById("todo").value;
    try {
        const response = await fetch("http://localhost:3000/todos", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ todo })
        });

        if (!response.ok) {
            throw new Error("Network issue"); 
        }

        const result = await response.json(); 
        console.log("Todo added:", result);

      
        await fetchData();
    } catch (error) {
        console.log("Error:", error);
    }
}


async function fetchData() {
    const list = document.getElementById("list-container"); 
    list.innerHTML = "";

    try {
        const response = await fetch("http://localhost:3000/todos", {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error("Network issue");
        }

        const todos = await response.json()

    
        todos.forEach(data => {
            const li = document.createElement("li");
            li.textContent = data.todo;
            list.appendChild(li);
        });
    } catch (error) {
        console.log("Error fetching todos:", error); 
    }
}


// document.getElementById("todo-form").addEventListener("submit", handleSubmit);


fetchData();
