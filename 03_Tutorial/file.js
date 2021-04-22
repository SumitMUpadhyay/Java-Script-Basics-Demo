// function in javascript 
// we can write reusable code with the help of function
// How function look like /
// sum3(4,5,6) ----->15
// sum3(4,1,6) ----->11
// isEven (4)------->true
//isEven (3) .......>false
// greet ("Sumit") --------> Hello Sumit , Good Morning.

// Lets create functions.

// Syntax

// function sum3(num1, num2, num3){

    // Parameters
    // return num1+num2+num3;
// }

// let x = 4;
// let y = 5;
// let z = 6;

// let num1 = 4;
// let num2 = 5;
// let num3 = 6;

// console.log(sum3(num1,num2,num3));
// console.log(sum3(x,y,z));
// arguments

// let total = sum3(4,5,6);
// console.log(total);

// console.log(sum3(4,1,6));


// function isEven(num){
//     if(num%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(4));

// function greet(username){
//     return `Hello, ${username}, Good Morning.`
// }

// console.log(greet("Sumit"));


function singHappyBirthday(){
    console.log("happy birthday to you")
    console.log("happy birthday to you")
    console.log("happy birthday dear......")
}

singHappyBirthday();