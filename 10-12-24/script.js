// async function myfunction(){
//   let  data =await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   let response = await data.json()
//   console.log(response)
// // console.log(data)
// return response;
// }

// // console.log(myfunction());
//  myfunction().then((value)=>{
//   console.log(value.title)
//   let heading = document.getElementById("head1")
//   heading.innerText= value.title
//  })


async function myfunction() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  console.log(data)
  
  const heading = document.getElementById("head1");
  heading.innerHTML = '';

  data.products.forEach(product => {
    const para = document.createElement("p");
    // para.innerText = product.category;
    para.innerText = product.id;
    heading.appendChild(para);
  });
}


myfunction();



// var square=arr.map(x=>x*x)
// let num=arr.filter((value,index)=>value%5!=0)



