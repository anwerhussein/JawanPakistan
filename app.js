//1. Write a program that takes user input. Convert and show the input in capital letters.

/*var userInput = prompt("Enter your text");
userInput = userInput.toUpperCase();
console.log(userInput);*/

//2. Write a program that takes user input. Convert and show the input in title case

/*var userInput = prompt("Enter your text");
var firstChar = userInput.slice(0,1);
var otherChar = userInput.slice(1);
firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();
console.log(firstChar + otherChar);*/

//Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

/*var userInput = prompt("Enter your favourite Cell Phone Model");
console.log("Length of string is " + userInput.length);*/

//Write a program to display the last character of a user input

/*var userInput = prompt("Enter any thing");
console.log(userInput.slice(userInput.length - 1));*/

//Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

/*var text = "Pakistani";
for(var i = 0; i<text.length; i++){
    if(text[i] === "n"){
        console.log("The index of character N in " + text + " is " + i);
        break;
    }
}*/

//Write a program to take user input and store username in a variable. If the username contains any special symbol among (@ . , !), prompt the user to enter a valid username.

/*var userName = prompt("Please Enter your Username");
for(i=0; i<userName.length; i++){
    if(userName[i] == "@" || userName[i] == "." || userName[i] == "," || userName[i] == "!"){
        console.log("Invalid username")
        break;
    }
}*/

/*You have a string “The quick brown fox jumps over the lazy
dog”. Write a program to count number of occurrences of word “the”
in given string.*/

/*var text = "The quick brown fox jumps over the lazy dog";
text = text.toLowerCase();
var counter = 0;
var txtToFind = "the";
for(i = 0; i<text.length; i++){
    if(text.slice(i, i+3) === "the"){
        counter++;
    }
}
console.log("The word 'the' is found " + counter + " times");*/

//Write a program to find the character at 3 rd index in the word “Pakistani” and display the result in your browser.

// var text = "Pakistani";
// console.log(text.charAt(3));

//Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var text = "Hyderabad";
// console.log(text.replace("Hyder","Islam"))

//Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together."
// console.log(message.replace(/and/g, "&"));

// Write a program that takes a positive integer from user & display the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var x = +prompt("Enter a positive floating point number");
// console.log("Number is " + x);
// console.log("Round of Value of Number is " + Math.round(x));
// console.log("Floor Value of Number is " + Math.floor(x));
// console.log("Ceil Value of Number is " + Math.ceil(x));

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var x = +prompt("Enter a negative floating point number");
// console.log("Number is " + x);
// console.log("Round of Value of Number is " + Math.round(x));
// console.log("Floor Value of Number is " + Math.floor(x));
// console.log("Ceil Value of Number is " + Math.ceil(x));

//Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

//console.log(Math.ceil(Math.random() * 6));

//Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

// var x = Math.ceil(Math.random() * 2);
// if(x == 1){
//     console.log("Tails");
// }
// else{
//     console.log("Heads");
// }

// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.

// var x = Math.ceil(Math.random() * 10);
// var input = +prompt("Enter any number from 1 to 10", "1");
// if(x === input){
//     console.log("Congratulations, You Win");
// }
// else{
//     console.log("The secret number is " + x);
//     console.log("Try Again")
// }

// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt("Enter your weight");
// weight = Number(weight);
// console.log(weight);

//Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var text = "472";
// text = Number(text);
// console.log("Value is " + text + " Type is " + typeof(text));

// Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

// var num = 35.36;
// num = num * 100;
// console.log(num.toString());

// 1. Write a program to control the length of decimals to 2. var percentage = 30 / 45 * 100; -> 66.66666666666666

// var percentage = 30 / 45 * 100;
// console.log(percentage.toFixed(2));

//Write a program that displays current date and time in your browser.

// var today = new Date();
// console.log(today);

//Write a program that alerts the current month in words. For example December.

// var months = ["January", "February", "March", "April", "May", "June", "July", "August"];
// var today = new Date();
// var mon = today.getMonth();
// console.log("Current Month: " + months[mon]);


//Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var today = new Date();
// var x = days[today.getDay()];
// console.log("Today is " + x.slice(0,3));

//Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var today = new Date();
// if(days[today.getDay()] == "Saturday" || days[today.getDay()] == "Sunday"){
//     console.log("It's Fun Day");
// }

// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var today = new Date();
// if(today.getDate() < 16){
//     console.log("First Fifteen days of month");
// }
// else{
//     console.log("Last days of month");
// }

// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var today = new Date();
// console.log("Current Date: " + today);
// console.log("Elapsed Milliseconds since January 1, 1970: " + today.getTime());
// console.log("Elapsed Minutes since January 1, 1970: " + (today.getTime()) / 1000 / 60);


//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var x = new Date();
// if(x.getHours() < 12){
//     console.log("Its AM");
// }
// else{
//     console.log("Its PM");
// }

//Write a program that creates a Date object for the last dayof the last month of 2020 and assigns it to variable named laterDate.

// var x = new Date("December 31, 2020");
// console.log(x);

//Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on April 03, 2022

// var x = new Date("April 3, 2022"); //starting day of Ramadan 2022
// var today = new Date();
// var msx = x.getTime();
// var mstoday = today.getTime();
// var msdiff = mstoday - msx;
// console.log(Math.round(msdiff / 1000 / 60 / 60 / 24) + " days have passed since 1st Ramadan 2022");

//Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015

// var refDate = new Date("December 5, 2015");
// var beginDate = new Date("January 1, 2015");
// var msrefDate = refDate.getTime();
// var msbeginDate = beginDate.getTime();
// var msdiff = msrefDate - msbeginDate;
// console.log(msdiff / 1000);

//Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var today = new Date();
// console.log("Current Date: " + today);
// today.setHours(16)
// console.log("1 Hour ago, it was: " + today);

//Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var today = new Date();
// console.log("Current Date: " + today);
// today.setFullYear(1922)
// console.log("100 years back, it was: " + today);

//Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var age = +prompt("Enter your age");
// var today = new Date();
// console.log("Your Age: " + age);
// console.log("Your Birthyear: " + (today.getFullYear() - age));

//Write a function that displays current date & time in your browser.

// function showDate(){
//     console.log(new Date());
// }
// showDate();

//Write a function that takes first & last name and then it greets the user using his full name

// function greet(){
//     var firstName = prompt("Enter First Name");
//     var lastName = prompt("Enter Last Name");
//     var fullName = firstName + " " + lastName;
//     console.log("Welcome here: " + fullName);
// }
// greet();

//Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function addNumber(){
//     var firstNum = +prompt("Enter First Number");
//     var lastNum = +prompt("Enter Second Number");
//     var total = firstNum + lastNum;
//     console.log("Total is: " + total);
// }
// addNumber();

//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser

// function cal(num1, num2, op){
//     if(op == "add"){
//         return num1 + num2);
//     }
//     if(op == "sub"){
//         return num1 - num2;
//     }
//     if(op == "mul"){
//         return num1 * num2;
//     }
//     if(op == "div"){
//         return num1 / num2;
//     }
// }
// cal(5, 5, "mul")

//Write a function that squares its argument

// function squareit(num){
//     console.log(num * num);
// }
// squareit(10)

//Write a function that computes factorial of a number

// function factorialit(num){
//     var x = 1;
//     for(var i=num-1; i>0; i--){
//         x *= i;
//     }
//     return num*x;
    
// }
// console.log(factorialit(10));

//Write a function that take start and end number as inputs & display counting in your browser

function printNumber(){
    var startNum = +prompt("Enter starting Number");
    var endNum = +prompt("Enter Ending Number");
    for(i = startNum; i<=endNum; i++){
        console.log(i);
    }
}
printNumber();