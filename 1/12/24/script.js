console.log("patterns")
var i;



for (i = 1; i <= 5; i++) {  //this is for row 
    var str = "";
    for (j = 1; j <= i; j++) {  //this is for column
        str += '*';

    }
    console.log(str);

}
console.log(i[j]);



// 

console.log("function scope")


var a = 100;
function x() {
    a = 1000;
    console.log(a, "inside the fuction");

}
console.log(a, "outside the function");
x();
console.log(a, "outside the function");



console.log("pattern");


let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);

