// ********************************************
// CHAPTERS # 21 - 25
// ********************************************

// Task 1
var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = firstName + " " + lastName;
alert("Hello! " + fullName);

// Task 2
var favMobileModel = prompt("Enter your favorite mobile model");
var mobModelLength = favMobileModel.length;
alert("Length of Input String: " + mobModelLength)

// Task 3
var sampleString = "Pakistan";
var index = sampleString.indexOf('n');
alert("String: " + sampleString);
alert("Index of 'n' : " + index);

// Task 4
var sampleString = "Hello World";
var lastIndex = sampleString.lastIndexOf('l');
alert("String: " + sampleString);
alert("Last Index of 'l' : " + lastIndex);

// Task 5
var q5_String = "Pakistan";
var charAtIndex = q5_String.charAt(3);
alert("Character at index 3: " + charAtIndex);

// Task 6
var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = firstName.concat(" ").concat(lastName);
alert("Hello! " + fullName);

// Task 7
var city = "Hyderabad";
var cityAfterReplace = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + cityAfterReplace);


// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write(newMessage); 

// Task 9
var sampleString2 = "472";
var afterTypeConversion = Number(sampleString2);
document.write("Value: " + sampleString2 + "<br>");
document.write("Type: " + typeof sampleString2 + "<br>");
document.write("Value: " + afterTypeConversion + "<br>");
document.write("Type: " + typeof afterTypeConversion + "<br>");

// Task 10
var userInput = prompt("Enter some text");
var upperCase = userInput.toUpperCase();
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCase);

// Task 11
var inputText = prompt("Enter something");
var textLowerCase = inputText.toLowerCase();
var firstChar = textLowerCase.charAt(0).toUpperCase();
var titleCase = firstChar + textLowerCase.slice(1);
document.write("User input: " + inputText + "<br>");
document.write("Title case: " + titleCase);

// Task 12
var num = 35.36;
var stringNum = num.toString();
var dotIndex = stringNum.indexOf('.');
var res = stringNum.slice(0, dotIndex) + stringNum.slice(dotIndex+1);
document.write("Number: " + num + "<br>");
document.write("Result: " + res);

// Task 13
var input = prompt("Enter Username (not included special chars)")
var regex = /^[A-Za-z0-9]+$/
if(regex.test(input)){
    alert("valid username")
}
else{
    alert("Please enter a valid username")
}

// Task 14
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to Our Bakery. What do you want to order sir/ma'am?");
var userInput = userInput.toLowerCase();
var availabilityStatus = false;
var itemIndex;

for(var i=0; i<items.length; i++){
    if(items[i] === userInput.toLowerCase()){
        availabilityStatus = true;
        itemIndex = i;
        break;
    }
}
if(availabilityStatus === true){
    document.write(userInput + " is <b>available</b> at index " + itemIndex + " in our battery");
}
else{
    document.write("We are sorry, " + userInput + " is <b>not availale</b> in our bakery");
}


// Task 16
var str1 = "University of Karachi";
var strChars = str1.split("");

for(var i=0; i<str1.length; i++){
    document.write(str1[i] + "<br>");
}


// Task 17
var u_input = prompt("enter input");
var lastElement = u_input[u_input.length-1]
document.write("User input: " + u_input + "<br>");
document.write("Last character of input: " + lastElement);


// Task 18
var str = "The quick brown fox jumps over the lazy dog";
var words = str.toLowerCase().split(' ');
var counter = 0;

for(var i=0; i<words.length; i++){
    if(words[i] === "the"){
        counter += 1;
    }
}
document.write("Text: " + str + "<br>")
document.write("There are " + counter + " occurances of word 'the'");



// ********************************************
// CHAPTERS # 26 - 30
// ********************************************

// Task 1
var num = +prompt("Enter a +ve float value");
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);
document.write("number: " + num + "<br>")
document.write("round off value: " + round + "<br>")
document.write("floor value: " + floor + "<br>")
document.write("ceil value: " + ceil)

// Task 2
var num = +prompt("Enter a +ve float value");
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);
document.write("number: " + num + "<br>")
document.write("round off value: " + round + "<br>")
document.write("floor value: " + floor + "<br>")
document.write("ceil value: " + ceil)

// Task 3
var inNum = +prompt("Enter a value");
var absValue = Math.abs(inNum);
document.write("The absolute value of " + inNum + " is " +absValue);

// Task 4
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("random dice value: " + diceValue);

// Task 5
var coinValue = Math.floor(Math.random() * 2) + 1;

if(coinValue === 1){
    document.write(coinValue + "<br>");
    document.write("random coin value Tails");
}
else{
    document.write(coinValue + "<br>");
    document.write("random coin value Heads");
}

// Task 6
var ranNum = Math.floor(Math.random() * 100) + 1;
document.write("random number between 1 and 100: " + ranNum);


// Task 7
var weight = prompt("Enter your weight in kilograms").toLowerCase();
var indOf = weight.indexOf('k');
var weightValue;
if(indOf === -1){
    weightValue = weight;
}
else{
    weightValue = weight.slice(0,indOf);
}
document.write("The weight of user is " + weightValue + " kilograms")

// Task 8
var ranSecretNum = Math.floor(Math.random() * 10) + 1;
var userNum = +prompt("Enter a number between 1-10");

if(userNum >= 1 && userNum <=10){
    if(ranSecretNum === userNum){
        alert("Congratulations!");
    }
    else{
        alert("Try again!");
    }
}
else{
    alert("You entered invalid number. Plz enter valid number")
}



// ********************************************
// CHAPTERS # 31 - 34
// ********************************************

// Task 1
document.write("<b>Task 1</b></br>")
var date = new Date();
document.write(date);


// Task 2
var curMonth = date.getMonth();
var monthName;

switch(curMonth){    
    case 0:
        monthName = "January";
        break;
    case 1:
        monthName = "February";
        break;
    case 2:
        monthName = "March";
        break;
    case 3:
        monthName = "April";
        break;    
    case 4:
        monthName = "May";
        break;
    case 5:
        monthName = "June";
        break;
    case 6:
        monthName = "July";
        break;
    case 7:
        monthName = "August";
        break;
    case 8:
        monthName = "September";
        break;
    case 9:
        monthName = "October";
        break;
    case 10:
        monthName = "November";
        break;
    case 11:
        monthName = "December"
        break;
}
document.write("<br><br><br><b>Task 2</b><br>");
document.write("Current month: " + monthName);


// Task 3
var date1 = date.toString();
var day = date1.slice(0,3);
document.write("<br><br><br><b>Task 3</b><br>");
document.write("Today is: " + day);


// Task 4
document.write("<br><br><br><b>Task 4</b><br>");

var currentDay = date.getDay();
if(currentDay === 0 || currentDay === 6){
    document.write("It's Fun day");
}
else{
    document.write("It's not Saturday or Sunday")
}


// Task 5
document.write("<br><br><br><b>Task 5</b><br>");

var checkDate = date.getDate();
if(checkDate < 15){
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}


// Task 6
document.write("<br><br><br><b>Task 6</b><br>");

var elMilliSec = date.getTime();
document.write("Current Date: " + date + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + elMilliSec + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + elMilliSec/(1000*60));


// Task 7
document.write("<br><br><br><b>Task 7</b><br>");

var check_AM_PM = date.getHours();
if(check_AM_PM < 12){
    document.write("It's AM");
}
else{
    document.write("It's PM"); 
}

// Task 8
var laterDate = new Date(2020, 11, 31);
alert("Later date: " + laterDate);

// Task 9
var firstRamzan = new Date(2015, 5, 18);
// var Date = new Date();
var date1 = firstRamzan.getTime();
var date2 = date.getTime();
var finalDate = (date2/(1000*60*60*24))-(date1/(1000*60*60*24));
finalDate = Math.floor(finalDate);
alert(finalDate + " days have passed since 1st Ramzan, 2015");


// Task 10
var st2015 = new Date(2015, 0, 1, 00, 00, 00);
var refDate = new Date(2015, 11, 5, 22, 50, 16);
var refMillisec = refDate.getTime() - st2015.getTime();
var refSec = refMillisec / 1000;


// Task 11
var hourAgo = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()-1, date.getMinutes(), date.getSeconds())
document.write("Current date: " + date + "<br> 1 hour ago it was " + hourAgo);


// Task 12
var HundredYearAgo = new Date(date.getFullYear()-100, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
document.write("Current date: " + date + "<br> 100 years back, it was " + HundredYearAgo);


// Task 13
var userAge = prompt("Enter your age");
var userBirthYear = date.getFullYear() - userAge;
document.write("Your age is " + userAge);
document.write("<br>Your birth year is " + userBirthYear);



// ********************************************
// CHAPTERS # 35 - 38
// ********************************************

// Task 1
showDateTime();

function showDateTime(){
    var dateTime = new Date();
    document.write(dateTime);
}


// Task 2
greetings("Ali", "Hassan");

function greetings(firstName, lastName){
    document.write("Hello! " + firstName + " " + lastName + ". Have a nice day...");
}


// Task 3
sum();

function sum(){
    var num1 = +prompt("Enter 1st num:");
    var num2 = +prompt("Enter 2nd num:");
    var sum = num1 + num2;
    alert(num1 + " + " + num2 + " = " + sum);
}


// Task 4
var num1 = +prompt("enter 1st num:");
var num2 = +prompt("enter 2nd num:");
var op = prompt("enter operator:");
add(num1,num2,op);
function add(num1, num2, op){
    var res;
    if(op === "+"){
        res = num1+num2;
        alert(num1+op+num2+" = "+res)
    }
    else if(op === "-"){
        res = num1-num2;
        alert(num1+op+num2+" = "+res)
    }
    else if(op === "/"){
        res = num1 / num2;
        alert(num1+op+num2+" = "+res)
    }
    else if(op === "*"){
        res = num1*num2;
        alert(num1+op+num2+" = "+res)
    }
    else{
        alert("invalid entry");
    }   
}


// Task 5
var val = +prompt("enter a num:");
sqr(val);

function sqr(val){
    var sq = val*val;
    alert("Square of "+val+" is "+sq);
}


// Task 6
var val1 = +prompt("enter a number:");
var facto = fact(val1);
alert("Factorial of "+val1+" is "+facto);

function fact(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }


// Task 7
var stVal = +prompt("enter start value:");
var enVal = +prompt("enter ending value:");
document.write("<br><br><b>Task 7</b><br>")
dispCounting(stVal,enVal);
function dispCounting(start, end){
    for(var i = start; i<=end; i++){
        document.write(i+"<br>")
    }
    alert("after complete execution will print on screen")
}


// Task 8
var base = +prompt("Enter base:");
var perpen = +prompt("Enter perpendicular:");

calHyp(base,perpen);

function calHyp(base, perpen){
    var baseSqr, perpenSqr;
    var hyp;
    sqrs(base,perpen);
    function sqrs(baseVal, perpenVal){
        baseSqr = baseVal*baseVal;
        perpenSqr = perpenVal*perpenVal;
    }
    hyp = baseSqr+perpenSqr;
    alert("Hypotenuse of right angle triangle is "+hyp);
}

// Task 9
document.write("<b>Arguments as value</b><br>")
rectArea(6,4);
document.write("<br><b>Arguments as variable</b><br>")
var rectHeight = +prompt("Enter height:");
var rectWidth = +prompt("Enter width:");
rectArea(rectHeight, rectWidth);

function rectArea(height, width){
    var area = height*width;
    document.write("Area of rectangle: "+area);
}