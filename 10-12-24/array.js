var arr =[1,3,2,4,5,6,7]
// var square=arr.map(x=>x*x)
// let num=arr.filter((value,index)=>value%5!=0)
// num.map(value=>value*2)
// console.log(num.join('\n'))
// console.log(square)
// // console.log(arr)
// console.log(num);


console.log("reduse")

var result=arr.reduce((accumulator,currentValue)=>{
    // console.log("first")
   return accumulator+currentValue},0);
console.log(result);
// var arr =[1,3,2,4,5,6,7]
// var max = arr.reduce((accumulator,currentValue)=>{
//     // console.log("good")
//   return accumulator > currentValue?accumulator:currentValue;
   
// },0);

// console.log(max)
