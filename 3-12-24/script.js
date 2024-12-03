// function x() {
//     console.log(this)
// } x();

// var xy = () => {
//     console.log(this)

// }
// xy();


// let obj = {
//     name: "soumya", rollno: 34, pointName: function () {
//         console.log(this)
//     }

// }
// console.log(obj.pointName());
console.log("closure")
var a;
function a(){
    let count=0;
   b();
    function b(){
       c();
        function c(){
            console.log(count);
        }
    }
} 
a();



console.log("recursive function");

function printdown(num){

    if(num===0){
        return;
    }
    console.log(num)
    printdown(num-1)
}
printdown(5);



console.log("factorial")

function factorial(num){
    if(num===0||num===1){
        return 1;
    }
   return num *factorial (num-1);
//    console.log(result);

   
}console.log(factorial(5));  
