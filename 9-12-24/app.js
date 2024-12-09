const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("sucess")
    }, 1000);
})
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("sucess1")
    }, 2000);
})
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("sucess2")
    }, 3000);
})
Promise.all([promise,promise1,promise2]).then((res)=>{
    console.log(res)
})