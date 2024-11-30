// var score=prompt("enter the score");
// // var invalid=alert(score>100,"enter a valied number");
// // var new=prompt

// if(score>100){
//     alert("enter a valied number");
// }
// score=prompt("enter another number");
//  if(score>90&&score<=100){
//  console.log(score,"A grade");
// }
// else if(score>80&&score<=90){
//     console.log(score,"B grade");

// }
// else if(score>70&&score<=80){
//     console.log(score,"C grade");
// }
// else if(score>60&&score<=70){
//     console.log(score,"D grade");

// }
// else if(score>50&&score<=60){
//     console.log(score,"F grade");
// }
// else{
//     console.log("failed");
// }

// SWITCH STATEMENT

// var exp =prompt("enter the number");
// switch (Number(exp)) {
//     case 1:
//         console.log(exp, "SUNDAY");
//         break;
//     case 2:
//         console.log(exp, "MONDAY");
//         break;
//     case 3:
//         console.log(exp, "TUESDAY");
//         break;
//     case 4:
//         console.log(exp, "WEDNESDAY");
//         break;
//     case 5:
//         console.log(exp, "THURSDAY");
//         break;
//     case 6:
//         console.log(exp, "FRIDAY");
//         break;
//     case 7:
//         console.log(exp, "SATURDAY");
//         break;
//     default:
//         console.log("INVALIED");
//         break;


// }
//   score using switch statement


var score = 85
switch (true) {
    case score > 90 && score <= 100:
        console.log(score, "A GRADE");
        break;
    case score > 80 && score <= 90:
        console.log(score, "B GRADE");
        break;
    case score > 70 && score <= 80:
        console.log(score, "c grade");
        break;

    case score > 60 && score <= 70:
        console.log(score, "D grade");
        break;

    default:
        console.log("enter the valied number");
        break;

}


