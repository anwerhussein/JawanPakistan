//Chapter # 1 (Alert Boxes)
//1. Write a script to greet your website visitor using JS alert box.

//alert("Welcome to my website");

//2. Write a script to display following message on your web page:

//alert("Error! Please enter a valid password");

//3. Write a script to display following message on your web page: (Hint : Use line break)

//alert("Welcome to JS Land..." + "\r\n" + "Happy Coding!");

//4. Write a script to display following messages in sequence:

//alert("Welcome to JS Land...");
//alert("Happy Coding!");

//5. Generate the following message through browser’s developer console:

//console.log("Hello...I can run javascript through my web browser's console.");




//Chapter # 2 (Variables)

//1. Declare a variable called username.

//var username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name

//var username = "Muhammad Anwer Hussain";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box

// var message;
// message = "Hello World";
// alert(message);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

// var stdname = "Jhone Doe";
// var age = "15 years old";
// var work = "Certified Mobile Application Development";
// alert(stdname);
// alert(age);
// alert(work);

//5. Write a script to display the following alert using one JS variable:


//Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use
//string concatenation)

// var email = "anwer.hussain@gmail.com"
// alert("my email address is " + email)

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book "+ book);

//8. Write a script to display this in browser through JS

//document.write("Yah! I can write HTML content through Javascript")

//9. Store following string in a variable and show in alert and browser through JS

// var x = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(x);






//Chatper 3 (Variable for Numbers)
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.

// var age = 35;
// alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.

// var visits = 5;
// alert("you have visited this page " + visits + "times");

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

// var birthYear = 1985;
// document.write("my birth year is " + birthYear +"<br>");
// document.write("Data type of my declared variable is " + typeof(birthYear));

//4. 4. A visitor visits an online clothing store  ww.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var visitorName = "Anwer";
// var productTitle = "Tshirt";
// var qty = 3;
// document.write(visitorName + " ordered " + qty + " " + productTitle + " on XYZ Clothing Store");





//Chapter 4 (Legal Illegal Variable Names)

// 1. Declare 3 variables in one statement.

// var x, y, z = 5;

//2. Declare 5 legal & 5 illegal variable names.

// var x, y, z, a, b;
// var 12fff, %abc, -pagal, stu no, 510;

//3. Display this in your browser

// document.write("<h1> “Rules for naming JS variables </h1><br>")
// document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable <br>");
// document.write("Variables must begin with a letter, $ and _. For example $name, _name or name <br>");
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keywords<br>");





//Chapter # 5 (Math Expressions)

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var num1 = 20;
// var num2 = 10;
// var num3 = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + num3);

//2. Repeat task1 for subtraction, multiplication, division & modulus.

// var num1 = 20;
// var num2 = 10;
// var num3 = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + num3);

// var num1 = 20;
// var num2 = 10;
// var num3 = num1 * num2;
// document.write("Product of " + num1 + " and " + num2 + " is " + num3);

// var num1 = 20;
// var num2 = 10;
// var num3 = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + num3);

// var num1 = 20;
// var num2 = 10;
// var num3 = num1 % num2;
// document.write("Remainder of " + num1 + " and " + num2 + " is " + num3);





//chapter # 12 - 13 (If ELSE IF Statements)

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var input = prompt("Enter a character (Number or String)");
// var check = input.charCodeAt(0)
// if(check >=48 && check <=57){
//   console.log("A number is entered");
// }
// else if(check >=65 && check <=90){
//   console.log("Upper Case Character is Entered");
// }
// else if(check >=97 && check <=122){
//   console.log("Lower Case Character is Entered");
// }
// else{
//   console.log("Any Special Character");
// }

// //2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// if(num1 > num2){
//   console.log(num1 + " is greater")
// }
// else if(num1 < num2){
//   console.log(num2 + " is greater")
// }
// else if(num1 == num2){
//   console.log(num1 + " & " + num2 + " are equal")
// }

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var num1 = +prompt("Enter a Number");
// if(num1 > 0){
//   console.log("A Positive Number")
// }
// else if(num1 < 0){
//   console.log("A Negative Number")
// }
// else if(num1 == 0){
//   console.log("Equal to 0")
// }

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var x = prompt("Enter a Character");
// x = x.toLowerCase();
// if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
//   console.log("A Vowel");
// }
// else {
//   console.log("Not a Vowel");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show
// “Incorrect password” otherwise.

// var password = "password123";
// var input = prompt("Enter Your Password");
// input = input.toLowerCase();
// if(input){
//   if(input == password){
//     console.log("Correct! The password you entered matches the original password");
//   }
//   else if(input != password){
//     console.log("Incorrect Password");
//   }
// }
// else{
//   console.log("Please Enter your Password");
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// }
// else{
//   greeting = "Good evening";
// }
// console.log(greeting);

//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// var time = +prompt("Enter time in 24 Hours Format like 1900")
// if(time >= 0000 && time < 1200){
//   console.log("Good Morning");
// }
// else if(time >= 1200 && time < 1700){
//   console.log("Good Afternoon");
// }
// else if(time >= 1700 && time < 2100){
//   console.log("Good Evening");
// }
// else if(time >= 2100 && time <= 2359){
//   console.log("Good Night");
// }





//Chapter # 14 - 16 (Arrays)
//1. Declare an empty array using JS literal notation to store student names in future.

//var x = [];

//2. Declare an empty array using JS object notation to store student names in future

//var x = new Array();

//3. Declare and initialize a strings array.

//var stringArray = ["abc","def"];

//4. Declare and initialize a numbers array.

//var numArray = [1,2,3,4];

//5. Declare and initialize a boolean array.

//var boolArray = [true,false]

//6. Declare and initialize a mixed array.

//var mixArray = ["abc", 1, 2, true, false, "def"];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var education = ["SSC", "HSC","BCS","BS","BCOM", "MS", "M. Phil.", "PhD"];
// for(i=0; i<education.length; i++){
//     console.log((i+1) + ") " + education[i]);
// }

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stdNames = ["Anwer", "Ebrahim", "Hadi"];
// var stdScores = [450, 480, 500];
// for(i=0; i<stdScores.length; i++){
//     console.log("Score of " + stdNames[i] + " is " + stdScores[i] + ". Percentage " + ((stdScores[i] * 100) / 500));
// }

//9. Initialize an array with color names. Display the array elements in your browser.

// var colorNames = ["Red", "Green", "Blue", "Magenda", "Cyan"];
//     console.log("Original Position of Colors")
//     for(i=0; i<colorNames.length; i++){
//         console.log(colorNames[i]);
//     }

//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// var firstColor = prompt("Which color do you want to add in the start");
// console.log("Adding Colors in Start")
// colorNames.unshift(firstColor);
// for(i=0; i<colorNames.length; i++){
//     console.log(colorNames[i]);
// }

// //b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser

// var endColor = prompt("Which color do you want to add in the End");
// console.log("Adding Colors in End")
// colorNames.push(endColor);
// for(i=0; i<colorNames.length; i++){
//     console.log(colorNames[i]);
// }

// //c. Add two more color to the beginning of the array. Display the updated array in your browser.

// colorNames.unshift("orange", "yellow");
// for(i=0; i<colorNames.length; i++){
//     console.log(colorNames[i]);
// }

// //d. Delete the first color in the array. Display the updated array in your browser.

// colorNames.shift();
// for(i=0; i<colorNames.length; i++){
//     console.log(colorNames[i]);
// }

// //e. Delete the last color in the array. Display the updated array in your browser.

// colorNames.pop();
// for(i=0; i<colorNames.length; i++){
//     console.log(colorNames[i]);
// }

//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// var colorIndex = +prompt("At which Index you want to Add a new Color");
// var colorValue = prompt("What is the new Color you want to add");
// colorNames.splice(colorIndex,0,colorValue);
// console.log("Displaying Updated Color Array")
// for(i=0; i<colorNames.length; i++){
//     console.log(colorNames[i]);
// }

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your browser.

// var colorIndexDel = +prompt("At which Index you want to Delete a new Color");
// var howMany = +prompt("How Many Colors do you want to Remove");
// colorNames.splice(colorIndexDel,howMany);
// console.log("Displaying Updated Color Array")
// for(i=0; i<colorNames.length; i++){
//     console.log(colorNames[i]);
// }

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var stdScores = [20,40,21,30,80,45,75];
// console.log("Score of Students");
// for(i=0; i<stdScores.length; i++){
//     console.log(stdScores[i])
// }
// var sortedScores = stdScores.sort();
// console.log("Ordered Score of Students");
// for(i=0; i<sortedScores.length; i++){
//     console.log(sortedScores[i])
// }

//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// console.log("Cities List");
// for(i=0; i<cities.length; i++){
//     console.log(cities[i]);
// }
// var copyCities = cities.slice(1,4)
// console.log("Selected Cities");
// for(i=0; i<copyCities.length; i++){
//     console.log(copyCities[i]);
// }

//12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

// var arr = ["This", "is", "my" ,"cat"];
// console.log(arr.join(" "));

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var devies = [];
// devies.push("keyboard");
// devies.push("mouse");
// devies.push("printer");
// devies.push("monitor");
// // for(i=0; i<devies.length; i++){
// //     console.log(devies[i])
// // }

//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

// var devies = [];
// devies.unshift("keyboard");
// devies.unshift("mouse");
// devies.unshift("printer");
// devies.unshift("monitor");
// for(i=0; i<devies.length; i++){
//     console.log(devies[i])
// }


//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your
  //  browser using document.write() method:

//var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]





//Chapter # 17 - 20 (Arrays & Loops)
//1. Declare and initialize an empty multidimensional array.

//var studentDetails = [[],[],[]];

//2. Declare and initialize a multidimensional array representing the following matrix

// var studentDetails = [
//     [0,1,2,3],[1,0,1,2],[2,1,0,1]
// ];
// console.table(studentDetails);

//3. Write a program to print numeric counting from 1 to 10.

// for(i = 1; i<=10; i++){
//     console.log(i);
// }

//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user

// var tableNo = +prompt("Enter a number to show its multiplication table","2");
// var tableLength = +prompt("Enter Length of Table","10");
// for(i = 1; i<=tableLength; i++){
//     console.log(tableNo + " x " + i + " = " + tableNo*i);
// }

//5. Write a program to print items of the following array using for loop:

// var fruits = ["Apple","Banana","Mango","Orange","Strawberry"];
// for(i = 0; i<fruits.length; i++){
//     console.log("Element at Index " + [i] + " is " + fruits[i]);
// }

//6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("<h3>Counting</h3>");
// for(i = 1; i<=15; i++){
//     document.write(i + " ");
// }
// document.write("<br><h3>Reverse Counting</h3>");
// for(i = 10; i>=1; i--){
//     document.write(i + " ");
// }
// document.write("<br><h3>Even</h3>");
// for(i = 0; i<=20; i++){
//     if((i % 2) == 0){
//         document.write(i + " ");
//     }
// }
// document.write("<br><h3>Odd</h3>");
// for(i = 0; i<=20; i++){
//     if((i % 2) != 0){
//         document.write(i + " ");
//     }
// }
// document.write("<br><h3>Series</h3>");
// for(i = 1; i<=20; i++){
//     if((i % 2) == 0){
//         document.write(i + "k ");
//     }
// }

//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Welcome to ABC Bakery, what do you need");
// var flag = false;
// for(i = 0; i<items.length; i++){
//     if(items[i] == searchItem){
//         console.log(searchItem + " is available at index # " + i + " in our bakery");
//         flag = true;
//         break;
//     }
// }
// if(!flag){
//     console.log("Sorry Item is not Available");
// }

//8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

// var num = [100,50,200,120,150,7,10,250,300,50,40,400]
// var bignum;
// for(i=0; i<num.length; i++){
//     for(j=i+1; j<num.length; j++){
//         if(num[i] > num[j]){
//             bignum = num[i];
//         }
//         else if(num[i] < num[j]){
//             bignum = num[j];
//             i = j-1;
//             break;
//         }
//     }
//     if(j == num.length){
//         console.log(bignum);
//         break;
//     }
// }

//9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12].

// var num = [100,50,200,120,150,7,10,250,300,50,40,400,5]
// var smallnum;
// for(i=0; i<num.length; i++){
//     for(j=i+1; j<num.length; j++){
//         if(num[i] < num[j]){
//             smallnum = num[i];
//         }
//         else if(num[i] > num[j]){
//             smallnum = num[j];
//             i = j-1;
//             break;
//         }
//     }
//     if(j == num.length){
//         console.log(smallnum);
//         break;
//     }
// }

//10. Write a program to print multiples of 5 ranging 1 to 100.

// for(i=1; i<=100; i++){
//     if((i % 5) == 0){
//         console.log(i);
//     }
// }