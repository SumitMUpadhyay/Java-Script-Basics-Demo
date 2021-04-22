'use strict';


// console.log("Hello Word");

//Variable //

// var
// let
// const

// var name ="Sumit";

// console.log(name);

// var num = 42;

// console.log(num);

// console.log(num+4);

// var firstname = 'Sumit';

// console.log(firstname);

// let

// let name = 'Sumit';

// console.log(name);

// const

// const name = 'Sumit';

// console.log(name);

// const pi = 3.14;

// console.log(pi);

// name = 'Sumit';

// console.log(name);

// let firstname =  'harsh';
// firstName =  'harshit';

// console.log(firstname);

// ----------------- String ---------------------

// let firstName = "Harshit";
// let lastName =  'Sharma';
// let fullName =  ` Hey there i am 
// Harshit Sharma`;

// let age = 21;
// console.log(fullName);
// console.log(firstName, lastName, fullName);
// console.log('My name is', fullName);

// let strLen = fullName.length;


// let newStr = "I am "+ firstName  + " and I am "+ age + "year old";

// let newStr = `I am ${firstName}  and I am  ${age} year old`;

// let newStr = "Happiness is only real when shared\n ~ Intro the wild";
// console.log(newStr);
// console.log(strLen);

// console.log(firstName.length);


// let firstName = "SumitUpadhyay";

// let newStr = firstName.toLowerCase()

// let newStr = firstName.substr(0,5);
// let newStr = firstName.slice(0,4);
// let newStr = firstName[firstName.length-2];
// console.log(newStr);


// Numbers
// Math Operators
// operator precedence and associativity  rule
// e in numbers
// number separators 
// increament and decrement operators 
//prefix vs postfix
//mixing string and numbers (wired)
//parseInt and parseFloat 
//type of operator
//Null and Undefined
// JavaScript  Math object  ---  round, ceil , floor ,abs
// generate random integers using javascript
// [5,10)
//[5,10]
//BigInt
//operators that we can use with bigInt

// let num = 12;
// let num = 12.23;
// let num =  9007199254740991;
// num = num + 1;
// console.log(num);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(num);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Math.PI);
// console.log(12-10);

// console.log(12%9);

// console.log(2**0.5);

// console.log(4**4);

// console.log(2**53-1);
// console.log(2+3*5);

//precedence
//parenthesis
//exponentation
//*, /,%

//Precedence   // associativity
//Parenthesis  ----
//Exponentation  right to left 
//* ,/ , %    left to right 
// + ,-       left to right 

// console.log(2+3*5);

// console.log(3*5/2%3);

// console.log(15/2%3);
// console.log(7.5%3);

// console.log((2+3)/2+ 3**2**2 +(4/2*3)-3);
// console.log(5/2+ 3**2**2+ (4/2*3)-3);
// console.log(5/2 + 3**2**2 + 6-3);
// console.log(5/2 +3**4 + 6-3);
// console.log(5/2+81+6-3);
// console.log(2.5+ 81 + 6-3);


// let num = 1e3;
// let num = 2e3; //2*1000
// let num2 = 2e-3;//2/1000
// console.log(num2);
// console.log(num);


// let num = 100_000;
// console.log(num+1);

// let num = 0;
// num = num+1;
// num = num+1;
// console.log(num);

// let num = 4; 
// num++;
// num--;
// console.log(num);

// console.log(num++);
// console.log(num);

// let num =12;
// let num2 ="12";
// console.log(num+num2);

// let num = 12;
// let num2 = "12";
// num2 = parseInt(num2)
// console.log(num+parseInt(num2));

// let num = 12;
// let num2 = "12.24";
// num2 = parseFloat(num2)
// console.log(num2)

// let num = 12;
// let num2 = "$12";
// num2 = parseInt(num2);
// console.log(num2+12);

// console.log(typeof "4");

// null and undefined

// let num;
// console.log(num);

// let num = null;
// console.log(num);

// Math Object 

// let num = 12.2;
// console.log(Math.round(num));

// let num = 12.9;
// console.log(Math.floor(num));

// let num = -12;
// console.log(Math.abs(num)+12);  

// let num = -12.12;
// floor, round, ceil, abs, min, max
// console.log(Math.max(12,19,19.1,2));
// console.log(Math.min(12,19,19.1,2));

//generate random integer using javascript


// let randomNumber =  Math.floor(Math.random()*100);
// console.log(randomNumber);

//[0,10]

// let minNum = 5;
// let maxNum = 10;
// let randomNumber =Math.floor(Math.random() * (maxNum-minNum) + minNum)
// console.log(randomNumber);

// let bigNumber = 9007199254740991n;
// bigNumber = bigNumber+2n;
// console.log(bigNumber);

// let num = 1/0;
// let num2 = 2;
// console.log(num+num2);

// let num = BigInt(1/0);
// let num2 = 135135143513513513;
// console.log(num+num2);

// alert prompt confirm

// alert("Hello World");

// let age = 500;
// let age = prompt("What is your age?");
// alert(`Hello you are ${age} years old`);
// console.log(typeof age);

// let num1 =parseFloat(prompt("enter number 1?"));
// let num2 = parseFloat(prompt("enter number 2?"));
// let num1 =Number(prompt("enter number 1?"));
// let num2 = Number(prompt("enter number 2?"));
// let total = num1+num2;
// alert (`total is ${total}`);
// alert (`total is ${num1+num2}`);

// Confirm


// let x = confirm("Are you sure?");
// console.log(x);

// let age = prompt ("what is your age ?","enter age");
// console.log(age);

//COMPARISON OPERATORS

// > greater than
//< less than 
// >= greater than or equal to 
//<= less than or equal to
//== equality
//!=not equal
// === strict equality
//!==strict non equality

// console.log(10>11);
// console.log(10<11);
// console.log(10<=11);
// console.log(10==10);
// console.log(10!=9);
// console.log(10!=10);
// console.log('10'===10);//strict equality
// console.log(10!=='10');

// let age = 12;
// let age = 9;

// if(age>10){
//     console.log("you can play doki doki literature club");
// }else{
//     console.log("you can not play doki doki literature club");
// }

// let age = parseInt(prompt("what is your age?"));
// if(age>10){
//      alert("you can play doki doki literature club");
//     }else{
//         alert("you can not play doki doki literature club");
//     }

// let password = "agddhdh";

// if(password.length > 7){
//     console.log("your password is ok");
// }else{
//     console.log("your password is too short");
// }

// let name = 'Sumit';

// if(name[0] === 'S') {
//     console.log("your name starts with S");
// }else{
//     console.log("something else");
// }

// let num = 12;
// if (num%2===0){
//     console.log(`${num} is even`);
// }else{
//     console.log(`${num} is odd`);
// }

// let name = "Sumit";  // truthy value

// let name = "";  // falsy value 

//falsy values = false , "", undefined, null , NAN 
// if (name){
//     console.log(`your name is ${name}`)
// }else{
//     console.log("please store some name "); 
// }


// Number gusing game

// let winningNumber = 17; 

// let num = parseInt(prompt("Enter a number:"));

// if(num === winningNumber) {
//     console.log("you gussed it right ,you win");
// }else{
//     console.log("you gussed it wrong !!!!");
// }


// let winningNumber = 17;

// let num = parseInt(prompt("Enter a number:"));

// if (num == winningNumber){
//     console.log("you gussed it right ,you win");
// }else {
//     if(num<winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!!!");
//     }
// }


// if
// if else
// if elseif elseif else

// +,-, 0

// let num = 5;
// let num = -8;
// let num = "Hello";

// if(num>0){
//     console.log("Number is positive")
// }else if(num<0){
//     console.log("Number is Negative ");
// }else if (num===0){
//     console.log("Number is zero");
// }else{
//     console.log("Invalid Number");
// }


// let temp = 12;
// let temp = 50;
// let temp = 60;
// let temp = 70;

// let temp = 80;
// let temp = 35;
// if(temp<=-90){
//     console.log("Hello Alien what your planet name?")
// }

// if(temp<=0){
//     console.log("It is extremly cold outside");
// }else if(temp<=10){
//     console.log("It is very  cold outside");
// }else if (temp<=16){
// console.log("It is little cold outside");
// }else if(temp<=25){
//     console.log("It is perfectly fine weather outside");
// }else if(temp<=35){
//     console.log("lets go to swimming pool");
// }else if(temp<=50){
//     console.log("please turn on the AC");
// }else{
//     console.log("what????")
// }

//Logical operators
// and && 
// or ||
// not !

// let name = "Sumit";
// let age  =  28;
// if(age>18 && name[0]==='S'){
//     console.log("you can play this game");
// }else{
//     console.log("you cannot play this game");
// }


// console.log(true && true); 

// precedence of logical operator
//()
//!
//&&
//||

// console.log(true || false &&  !true);
// console.log(true || false && false);
// console.log(true || false);
// console.log(true);

// let firstName = "Sumit";
// let age =       21;

// if(age>18 && (firstName[0]==='S'||firstName[0]==='s')){
//     console.log("insideif");
// }else{
//     console.log("inside else");
// }

// let name1 = "";
// let name2;
// let name3 = "sumit";
// let name4 = "mohit";

// let username = name1 || name2 || name3 || name4;
// console.log(username);


// name2 || console.log("please assign value to name2 variable");

// let age = 19;
// if(age>18){
//     console.log("good to go!!!");
// }else{
//     console.log("Not good to go !!!");
// }

//ternary/ conditional operator

// age >18 ? console.log("good to go!!!") : console.log("not good!!!");

// let day = 4;
// if(day===0){
//     console.log("Sunday");
// }else if (day== 1){
//     console.log("Monday");
// }else if (day== 2){
//     console.log("TUesday");
// }else if (day== 3){
//     console.log("Wednesday");
// }else if (day== 4){
//     console.log("THrusday");
// }else if (day== 5){
//     console.log("Friday");
// }else if (day== 6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }

// switch(day){
//     case 0:
//          console.log("Sunday");
//          break;
//          case 1:
//          console.log("Monday");
//          break;
//          case 2:
//          console.log("Tuesday");
//          break;
//          case 3:
//          console.log("Wednesday");
//          break;
//          case 4:
//          console.log("Thrusday");
//          break;
//          case 5:
//          console.log("Friday");
//          break;
//          case 6:
//          console.log("Saturday");
//          break;
//          default:
//              console.log("Invalid Day");
// }

//nullish coalesing operator

let myName;
console.log(myName ?? "Unknown")