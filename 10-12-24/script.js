async function myfunction(){
  let  data =await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let response = await data.json()
  console.log(response)
// console.log(data)
return response;
}

// console.log(myfunction());
 myfunction().then((value)=>{
  console.log(value.title)
  let heading = document.getElementById("head1")
  heading.innerText= value.title
 })
