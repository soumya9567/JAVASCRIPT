// console.log("promise.all()")

//  new Promise((resolve,reject)=>
// {
// let success=true;
// if(success){
//     resolve("sucess")
// }
// else{
//     reject("reject")
// }
// })

// .then((result)=>{
//     console.log(result)
// })


// function a(cb){
//     const promise1= new Promise((resolve,reject)=>{}

//     setTimeout(()=>{
//         let success=true;
// if(success){
//     resolve("sucess")
// }
// else{
//     reject("reject")
// }
// })
    
// } 
// a()
// .then((result)=>{
//     console.log(result)
// })
//    function b(cb){



//     setTimeout(()=>{
//         console.log("second");
//         cb()},1000);
//     }
//    function c(cb){
//     setTimeout(()=>{
//         console.log("third");
//         cb()},1000);
//    }
//    a(()=>{
//     b(()=>{
//         c(()=>{
//             console.log("end");
//         } )
//     })
// })
// function a(cb){
//  new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{})
// let success=true;
// if(success){
//     resolve("sucess")
// }
// else{
//     reject("reject")
// }
// cb()},1000).then((result)=>{
    
//     console.log(result)
// })
// } a();
// function b(cb){
//     new Promise((resolve,reject)=>
//    {
//        setTimeout(()=>{})
//    let success=true;
//    if(success){
//        resolve("sucess")
//    }
//    else{
//        reject("reject")
//    }
//    cb()},1000).then((result)=>{
       
//        console.log(result)
//    })
//    } b();
//    function c(cb){
//     new Promise((resolve,reject)=>
//    {
//        setTimeout(()=>{})
//    let success=true;
//    if(success){
//        resolve("sucess")
//    }
//    else{
//        reject("reject")
//    }
//    cb()},1000).then((result)=>{
       
//        console.log(result)
//    })
//    } c();



// function a(){
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                     console.log("first");
//                     resolve("sucess")},1000);
//                 }
//    ) }
 
 

//    function b(){
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                     console.log("second");
//                     },1000);
//                 }
//    ) }
//    a().then(()=>
//     b())


// const promise=new Promise((resolve,reject)=>{
//             setTimeout(()=>{
                        
//                         resolve("sucess")},1000);
//                     }
//        ) 


// const promise2=new Promise(resolve,reject)
// setTimeout(()=>{
//     resolve("sucess2")
// },2000)

// const promise3=new Promise(resolve,reject)
// setTimeout(()=>{
//     resolve("sucess3")
// },3000)


// Promise.all[promise,promise2,promise3].then((result)=>{
//     console.log(result)
// })



   

