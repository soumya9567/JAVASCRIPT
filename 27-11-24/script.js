

console.log("logical opererator")
var a=true;
var b=false;
console.log(!a);
console.log(!b);
console.log(a&&b);

let c=true;
console.log(a&&c);

let d=false;
console.log(b&&d);


console.log(a||b);
console.log(a||c);
console.log(b||c);
console.log(b||d);


var num1=5;
var num2=2;
var num3=num1>num2;
console.log(num3,"greaterthan");
var num4=num1<num2;
console.log(num4,"lessthan");
var num5=num1===num2;
console.log(num5,"triple equalto")
console.log(num1>=num2,"greaterthan or equalto");
console.log(num1<=num2,"lessthan or equalto");
console.log(num1==num2,"equalto");
console.log(num1!=num2,"not equal to");

var x=5;
var y="5";
console.log(x==y,"x==y it only check the value");
console.log(x===y,"x===y it also check the datatype of the value");

console.log("OBJECT");

var car={brand:"tesla" ,color:"black",number:2};
car.wheel=4;//add another value in object
car ["price"]=12000;//add another value in object
console.log(car);
console.log(car.brand);
console.log(car.color);


console.log("ARRAY");

var arr=[1,2,3,4];
console.log(arr[2]);
arr.push(0,8);
console.log(arr);
arr.pop();
console.log(arr);



console.log("FUNCTION");


function student(){
    var name="soumya";
    var rollno="38;"
    // console.log(student);
    console.log(name);
    console.log(rollno);
    var val=name + " " + rollno;
    return val;
    console.log("after return");


} 
// student();
// var final=student()
console.log(student());

