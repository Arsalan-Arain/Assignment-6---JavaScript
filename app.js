// CH # 21 - 25

// Task 1
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName + " " + lastName;
// alert("Hello! " + fullName);

// Task 2
// var favMobileModel = prompt("Enter your favorite mobile model");
// var mobModelLength = favMobileModel.length;
// alert("Length of Input String: " + mobModelLength)

// Task 3
// var sampleString = "Pakistan";
// var index = sampleString.indexOf('n');
// alert("String: " + sampleString);
// alert("Index of 'n' : " + index);

// Task 4
// var sampleString = "Hello World";
// var lastIndex = sampleString.lastIndexOf('l');
// alert("String: " + sampleString);
// alert("Last Index of 'l' : " + lastIndex);

// Task 5
// var q5_String = "Pakistan";
// var charAtIndex = q5_String.charAt(3);
// alert("Character at index 3: " + charAtIndex);

// Task 6
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName.concat(" ").concat(lastName);
// alert("Hello! " + fullName);

// Task 7
// var city = "Hyderabad";
// var cityAfterReplace = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + cityAfterReplace);


// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write(newMessage); 

// Task 9
// var sampleString2 = "472";
// var afterTypeConversion = Number(sampleString2);
// document.write("Value: " + sampleString2 + "<br>");
// document.write("Type: " + typeof sampleString2 + "<br>");
// document.write("Value: " + afterTypeConversion + "<br>");
// document.write("Type: " + typeof afterTypeConversion + "<br>");

// Task 10
// var userInput = prompt("Enter some text");
// var upperCase = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + upperCase);

// Task 11
// var inputText = prompt("Enter something");
// var textLowerCase = inputText.toLowerCase();
// var firstChar = textLowerCase.charAt(0).toUpperCase();
// var titleCase = firstChar + textLowerCase.slice(1);
// document.write("User input: " + inputText + "<br>");
// document.write("Title case: " + titleCase);

// Task 12
// var num = 35.36;
// var stringNum = num.toString();
// var dotIndex = stringNum.indexOf('.');
// var res = stringNum.slice(0, dotIndex) + stringNum.slice(dotIndex+1);
// document.write("Number: " + num + "<br>");
// document.write("Result: " + res);

// Task 13
// var input = prompt("Enter Username (not included special chars)")
// var regex = /^[A-Za-z0-9]+$/
// if(regex.test(input)){
//     alert("valid username")
// }
// else{
//     alert("Please enter a valid username")
// }

// Task 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to Our Bakery. What do you want to order sir/ma'am?");
// var userInput = userInput.toLowerCase();
// var availabilityStatus = false;
// var itemIndex;

// for(var i=0; i<items.length; i++){
//     if(items[i] === userInput.toLowerCase()){
//         availabilityStatus = true;
//         itemIndex = i;
//         break;
//     }
// }
// if(availabilityStatus === true){
//     document.write(userInput + " is <b>available</b> at index " + itemIndex + " in our battery");
// }
// else{
//     document.write("We are sorry, " + userInput + " is <b>not availale</b> in our bakery");
// }

// Task 15


// Task 16
// var str1 = "University of Karachi";
// var strChars = str1.split("");

// for(var i=0; i<str1.length; i++){
//     document.write(str1[i] + "<br>");
// }


// Task 17
// var u_input = prompt("enter input");
// var lastElement = u_input[u_input.length-1]
// document.write("User input: " + u_input + "<br>");
// document.write("Last character of input: " + lastElement);

// Task 18
// var str = "The quick brown fox jumps over the lazy dog";
// var words = str.toLowerCase().split(' ');
// var counter = 0;

// for(var i=0; i<words.length; i++){
//     if(words[i] === "the"){
//         counter += 1;
//     }
// }
// document.write("Text: " + str + "<br>")
// document.write("There are " + counter + " occurances of word 'the'");



// CHAPTER # 26 - 30

// Task 1
// var num = +prompt("Enter a +ve float value");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("number: " + num + "<br>")
// document.write("round off value: " + round + "<br>")
// document.write("floor value: " + floor + "<br>")
// document.write("ceil value: " + ceil)

// Task 2
// var num = +prompt("Enter a +ve float value");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("number: " + num + "<br>")
// document.write("round off value: " + round + "<br>")
// document.write("floor value: " + floor + "<br>")
// document.write("ceil value: " + ceil)

// Task 3
// var inNum = +prompt("Enter a value");
// var absValue = Math.abs(inNum);
// document.write("The absolute value of " + inNum + " is " +absValue);

// Task 4
// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("random dice value: " + diceValue);

// Task 5
// var coinValue = Math.floor(Math.random() * 2) + 1;

// if(coinValue === 1){
//     document.write(coinValue + "<br>");
//     document.write("random coin value Tails");
// }
// else{
//     document.write(coinValue + "<br>");
//     document.write("random coin value Heads");
// }

// Task 6
// var ranNum = Math.floor(Math.random() * 100) + 1;
// document.write("random number between 1 and 100: " + ranNum);


// Task 7
// var weight = prompt("Enter your weight in kilograms").toLowerCase();
// var indOf = weight.indexOf('k');
// var weightValue;
// if(indOf === -1){
//     weightValue = weight;
// }
// else{
//     weightValue = weight.slice(0,indOf);
// }
// document.write("The weight of user is " + weightValue + " kilograms")

// Task 8
// var ranSecretNum = Math.floor(Math.random() * 10) + 1;
// var userNum = +prompt("Enter a number between 1-10");

// if(userNum >= 1 && userNum <=10){
//     if(ranSecretNum === userNum){
//         alert("Congratulations!");
//     }
//     else{
//         alert("Try again!");
//     }
// }
// else{
//     alert("You entered invalid number. Plz enter valid number")
// }



// CHAPTER # 31 - 34

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
