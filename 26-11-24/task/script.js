console.log("convert string into number");

var a="25";
var b=Number(a);
console.log(b);
console.log(typeof b);

console.log("check the number is integer");

var num=20;
console.log(Number.isInteger(num));

console.log("min and max");


var maxval= Math.max(2,4,16,8,12,10);
console.log(maxval,"maximum value");
var minval= Math.min(2,4,16,8,12,10);
console.log(minval,"minimum value");


console.log("round a number");

var x= Math.round(25.5);
console.log(x,"round the number");


console.log("absolute value");
var y=-10;
var z= Math.abs(y);
console.log(z,"absolute value");

console.log("random number");

var randomnum=Math.random()
console.log(randomnum);

// console.log("power of a number");

// var power= Math.pow(7);
// console.log(power);