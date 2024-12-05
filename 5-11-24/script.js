function a(cb){
    console.log("start");
    // b();
    setTimeout(b,1000)
    // setTimeout(()=>{
    //     console.log("after delay");
    // },1000)
    console.log("third")

  
}
a(b);
function b(){
   console.log("second")
}
global.console.log("This is a log message");