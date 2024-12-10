async function myfunction(){
  let  data =await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let response = await data.json()
  console.log(response)
// console.log(data)
}
console.log(myfunction());
//  myfunction();