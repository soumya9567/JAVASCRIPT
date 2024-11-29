var score = prompt("enter the number");
console.log(score);
if(score<100&&score>0){
    console.log(score,"number is valid");
}
else{
    // console.log(score,"invalied number");
    alert("invalied score please enter the score between 0 and 100");

} 
var score=prompt("enter the correct number");
console.log(score,"valid number");



console.log("Pass if the score is 40 or above, otherwise Fail.")

if(score>40){
    console.log(score,"passed");
}
else{
    console.log(score,"failed");
}


console.log(" if-else if-else operation to assign a grade based on the score:");

if (score >= 90) {
    console.log(score, "Grade A")

}
else if (score >= 80) {
    console.log(score, "Grade B");
}
else if (score >= 70) {
    console.log(score, "Grade C");
}
else if (score >= 60) {
    console.log(score, "Grade D");
}
else if (score >= 50) {
    console.log(score, "Grade E");
}
else {
    console.log("failed");
}


console.log(" switch statement to display a specific congratulatory message based on the grade:");

var grade = prompt("enter the grade");

switch (grade) {
    case 'A':
        console.log(grade, "Excellent! Keep it up!");
        break;
    case 'B':
        console.log(grade, "Great job! Aim for A next time!");
        break;
    case 'C':
        console.log(grade, "Good effort! You can do even better");
        break;
    case 'D':
        console.log(grade, "You passed, but there's room for improvement");
        break;
    case 'E':
        console.log(grade, "Just passed! Focus more next time");
        break;
    case 'F':
        console.log(grade, "Failed. Don't give up, try harder next time!");
        break;
    default:
        console.log(grade, "invalied grade");
        break;

}




