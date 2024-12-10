// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("sucess")
//     }, 1000);
// })
// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("sucess1")
//     }, 2000);
// })
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("sucess2")
//     }, 3000);
// })
// Promise.all([promise,promise1,promise2]).then((res)=>{
//     console.log(res)
// })
// console.log("promise.allsettled")
// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("sucess")
//     }, 1000);
// })
// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("sucess1")
//     }, 2000);
// })
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("sucess2")
//     }, 3000);
// })
// Promise.allSettled([promise,promise1,promise2]).then((res)=>{
//     console.log(res)
// })


// console.log("promise.any")

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("sucess")
//     }, 1000);
// })
// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("sucess1")
//     }, 2000);
// })
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("sucess2")
//     }, 3000);
// })
// Promise.any([promise,promise1,promise2]).then((res)=>{
//     console.log(res)
// })

console.log("promise.race");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success")
    }, 1000);
    
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success2")
    }, 2000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success3")
    }, 3000);
})

Promise.race([promise,promise1,promise2]).then((res)=>
console.log(res))

