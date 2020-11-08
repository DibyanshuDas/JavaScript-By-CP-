// //First read all the notes and then uncomment all 



// console.log('hello'); // it creates a statement in the console tab
// /*alert('Hey there'); --> it creates a alert box*/

// //How to write a comment in line

// //Variables
// var b = 'smoothie'; //a string
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);

// document.getElementById('someText').innerHTML = 'Hey There'; //Change the id value

// var age = prompt("What's your age"); //Prompt is used for asking the user

// document.getElementById('age').innerHTML = 'Your age is ' + age;
// // A simple program to show the user User input like in this they will write their age ,their age will be shown in the webpage.

// //Numbers in JavaScript
// var num1 = 45; //numbers stored in variables

// //How to increase or decrease a number
// num1 = num1 + 11; //Increase by 11
// console.log(num1);
// num1 = num1 - 11; //Decrease by 11
// console.log(num1);

// //Increment and decrement by 1 in JS
// num1++; //Increment (Increase) of numbers
// console.log(num1);
// num1--; //Decrement (decrease) of numbers
// console.log(num1);

// //All Operation on Numbers in JS
// console.log(5 * 10); //You can multiply numbers in JS
// console.log(5 / 10); //You can divide numbers in JS
// console.log(5 + 10); //You can add numbers in JS
// console.log(5 - 10); //You can subtract numbers in JS
// console.log(26 % 5); //It will show the remainder when dividing the number like 26/5 = 5 quotient and 1 remainder

// //Increment and decrement by any number in JS
// num1 += 10; //Increase by 10
// console.log(num1);
// num1 -= 10; //Decrease by 10
// console.log(num1);


// //Functions
// /*
// Step 1. Create a function
// Step 2. Call a function*/

// //Create
// function fun() {
//     console.log("This is a function");
// }

// //Call
// fun();

// //A function that will take your name and says hello followed by your name
// function greeting() {
//     var name = prompt('What\' your name ?');
//     var result = 'Hello' + ' '+ name;  //String Concatenation
//     console.log(result);
// }

// greeting();


// //How do arguments work in functions ?
// //How do we add two numbers in a function?
// /*Arguments are written in the bracket after the name of the function */


// function sumNumbers(num2 , num3){
//     var result = num2 + num3 ;
//     console.log(result);
// }


// sumNumbers(10 , 50);          // result = 60
// sumNumbers('10','50');        // result = 1050 (As these are string so these will be added)  
// sumNumbers('Hey','Dude');     // result = Hey Dude      


// //The above function using arguments
// function greeting1 (userName) {
//     var result = 'Hello' + ' ' + userName;  //String Concatenation
//     console.log(result);
// }

// var name = prompt("Enter your name");
// greeting1(name);



// //While loops
// var num = 0;

// while (num < 100){       //It will print numbers from 1 to 100
//     num +=1;             //While loops repeat a set of task unitl the given conditon is met/
//     console.log(num);    //It also change the global value of the variable. 
// }


// //For loops
// for (let num4 = 0; num4<=100; num4++) {
//     console.log(num4);
// }


// //Data types
// let youAge = 13;                                      //Numbers
// let yourName = "Tom";                                 //String
// let name1 = {first:'Jane', last:'Doe'}                //Object
// let truth = false;                                    //Boolean
// let list = ['banana','apple','orange','papaya']       //Array
// let random;                                           //Undefined
// let nothing = null;                                   //Value null



//Strings in JavaScript (common methods)
let fruits = 'Strawberries';   
let morefruits = 'apple \n grapes';


console.log(fruits.length);                                //It tells how many letters the string have
                                                           //Character countin g start from 0
console.log(fruits.indexOf('raw'));                        //It tells from where the word start in the given string
console.log(fruits.slice(3 , 8));                          //It gives the letter from the given two numbers
console.log(fruits.replace('berr' , '0000'));              //it replace the word with the given argument
console.log(fruits.toLowerCase());                         //It capitalize the whole string
console.log(fruits.toUpperCase());                         //It lowers the whole string
console.log(fruits[5]);                                    //It return back the letter which is at the given value
console.log(fruits.split(','));                            //It split by comma



//Arrays in Java Script

