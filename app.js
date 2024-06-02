//------------------ASSIGNMENT#9-11-----------------------//
//1
var city = prompt("Enter city name")
if (city === "karachi")
    alert("Welcome to city of lights")
//2
var gender = prompt("Enter gender")
if (gender === "male")
    alert("Good Morninig Sir!")
if (gender === "female")
    alert("Good Morninig Ma'am!")
//3

var signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, Green):");

signalColor = signalColor.toLowerCase();

var messag
if (signalColor === "red") {
    message = "Must Stop";
} else if (signalColor === "yellow") {
    message = "Ready to move";
} else if (signalColor === "green") {
    message = "Move now";
} else {
    message = "Invalid color entered.";
}

document.write("<table><tr><th style='color:blue'>Signal color</th><th style='color:blue'>Message</th></tr>");
document.write("<tr style='background-color: blue;'><td style='color: white;'>" + signalColor.charAt(0).toUpperCase() + signalColor.slice(1) + "</td><td style='color: white;'>" + message + "</td></tr>");
document.write("</table>");

//4
var remainingFuel = parseFloat(prompt('Enter the remaining fuel in your car (in litres):'));
if (remainingFuel < 0.25) {
    alert('Please refill the fuel in your car');
} else {
    alert('You have enough fuel');
}


//5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}
//6
var totalMarks1 = parseInt(prompt("Enter total marks for  subject1 :"));
var totalMarks2 = parseInt(prompt("Enter total marks for  subject2 :"));
var totalMarks3 = parseInt(prompt("Enter total marks for  subject3 :"));

var grandTotal = totalMarks1 + totalMarks2 + totalMarks3;

var obtainedMarks1 = prompt("Enter obtained marks for subject1:");
var obtainedMarks2 = prompt("Enter obtained marks for subject2:");
var obtainedMarks3 = prompt("Enter obtained marks for subject3:");

obtainedMarks1 = parseFloat(obtainedMarks1);
obtainedMarks2 = parseFloat(obtainedMarks2);
obtainedMarks3 = parseFloat(obtainedMarks3);

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (grandTotal)) * 100;
var remarks, grade;
if (percentage >= 80) {
    grade = 'A-0ne'
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = 'A'
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = 'B'
    remarks = "You need to improve";
}
else {
    grade = 'Fail'
    remarks = "Sorry"
}

document.write("<h1>Mark Sheet</h1>Total Marks: " + grandTotal + "<br>Obtained marks: " + totalObtainedMarks + "<br>Percentage: " + percentage.toFixed(2) + "%<br>Grade: " + grade + "<br>Remarks: " + remarks)
7
//guessing game
const secretnum = 8;
var userguess = parseInt(prompt('guess the number'), 10);
console.log(userguess);

if (userguess == secretnum) {
    console.log('Bingo!you guessed right'), 10
}
else if (userguess + 1 == secretnum || userguess - 1 == secretnum) {
    console.log('close enough')
}
else {
    console.log('Wrong Answer')
}
//8
var number = parseInt(prompt("Enter number to check it is divisible by 3 or not:"))
if ((number % 3) == 0) {
    alert("Enter number " + number + " is divisible by 3")
}
else {
    alert("Enter number " + number + " is not divisible by 3")
}
//9
var number = parseInt(prompt("Enter a number to check if it is even or odd:"), 10);

if (number % 2 === 0) {
    alert("The number " + number + " is even.");
} else {
    alert("The number " + number + " is odd.");
}
//10
var temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is very cold outside.");
}
//11

var firstNumber = parseFloat(prompt("Enter the first number:"));

var secondNumber = parseFloat(prompt("Enter the second number:"));

var operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
    var result = firstNumber + secondNumber;
    alert("The result of " + firstNumber + " + " + secondNumber + " is " + result);
} else if (operation === "-") {
    var result = firstNumber - secondNumber;
    alert("The result of " + firstNumber + " - " + secondNumber + " is " + result);
} else if (operation === "*") {
    var result = firstNumber * secondNumber;
    alert("The result of " + firstNumber + " * " + secondNumber + " is " + result);
} else if (operation === "/") {
    if (secondNumber !== 0) {
        var result = firstNumber / secondNumber;
        alert("The result of " + firstNumber + " / " + secondNumber + " is " + result);
    } else {
        alert("Division by zero is not allowed.");
    }
} else if (operation === "%") {
    var result = firstNumber % secondNumber;
    alert("The result of " + firstNumber + " % " + secondNumber + " is " + result);
} else {
    alert("Invalid operation.");
}





//----------------------ch 12 13-----------------------


// checking lowercase and uppercase
var char = prompt('Enter a Character');
var ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log(char + "is a number");
}

else if (ascii >= 65 && ascii <= 90) {
    console.log(char + "is an uppercase");
}
else if (ascii >= 97 && ascii <= 122) {
    console.log(char + "is an lowercase");
}
else {
    console.log(char + "is neither a number nor a letter");
}

//greter or lesser number

var num1 = prompt('Enter a num1');
var num2 = prompt('Enter a num2');

if (num1 > num2) {
    console.log("the larger number is:", num1);
}

else if (num1 < num2) {
    console.log("the larger number is:", num1);
}
else {
    console.log("both are equal number");
}
// postive or negative number
var number = prompt('Enter a number');

if (number > 0) {
    console.log("the number is positive:", number);
}

else if (num1 > 0) {
    console.log("the number is negative:", number);
}
else {
    console.log("the number is zero");
}

//set the code
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
console.log(greeting);

//check vowel case

var char = prompt('enter a charcter in lowercase');

if (char.length === 1) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log('Its a Vowel');
    }
    else {
        console.log('oops!its not a vowel');
    }
}
else {
    console.log('please enter a valid character')
}

//Validate password
const mypwd = 'inspect31';
var userpwd = prompt('enter a valid password');

if (!userpwd) {
    console.log('insert the password');
}
else if (userpwd === mypwd) {
    console.log('correct the password you enterd matches the orignal password');
}
else {
    console.log('incorrect password');
}

//time
var time = prompt('enter 24 hour format time');

if (time >= 0 && time <= 1200) {
    console.log('Good Morning');
}
else if (time >= 1200 && time <= 1700) {
    console.log('Good afternoon');
}
else if (time >= 1700 && time <= 2100) {
    console.log('Good evening');
}
else if (time >= 2100 && time <= 2400) {
    console.log('Good night');
}
else {
    console.log('invalid time');
}





//-------------------------------ch 14 to 16
//EMPTY Array syntax
var stdname = [];
console.log(stdname)

//object array
var stdnames = new Array();
console.log(stdnames);

//string array
var string = ["capacitor", "resistor", "inductor"];
console.log(string);

//number array
var num = ['2', '4', '6', '8'];
console.log(num);

//boolean array
var boolean = [true, false, false, true];
console.log(boolean);

//mixed type of array
var mix = ["Welocome To Javascript", true, false, '25', 'A', "spring"];
console.log(mix);


//qyal
var qualifications = ["SSC", "HSC", "BSC", "B.E", "BS", "PHD"];

console.log("Qualifications:", qualifications);
var qualificationsHTML = "<ol>";

for (var i = 0; i < qualifications.length; i++) {
    qualificationsHTML += "<li>" + qualifications[i] + "</li>";
}

qualificationsHTML += "</ol>";

document.write("<h2>Qualifications:</h2>");
document.write(qualificationsHTML);






// store student name etc
var name = ["Ali", "Anas", "Sana"];
console.log(name);


var marks = ['250', '198', '285'];
console.log(marks);

const totalmark = 300;
console.log(totalmark);

for (var i = 0; i < name.length; i++) {
    var percentage = (marks[i] / totalmark) * 100;
    console.log('Percentage of: ' + name[i] + 'is' + percentage);

}

//imitial color
var color = ["Red", "Blue", "Sky"];
console.log('the color is: ' + color);

// add at beignning
var colorbegin = prompt('enter a color to add in beginning')
color.unshift(colorbegin)
console.log("after adding color at the beginning: " + color);

//add color to end
var colorend = prompt('enter a color to add at end');
color.push(colorend);
console.log("after adding color at the end: " + color);

//add color two or more color in begining
color.push("lime", "darkcyan");
console.log("after adding  two color at the start: " + color);

//delete one color in begining
color.shift();
console.log("after deleting  color at the start: " + color);

//delete one color at end
color.pop();
console.log("after deleting  color at the end: " + color);

// add at given index
var indexaddcolor = prompt('enter   a index to add color');
var toaddindexcolor = prompt('enter a color');
color.splice(indexaddcolor, 0, indexaddcolor);
console.log("after adding color at index: " + indexaddcolor + ":" + color);

// delete at given index
var indexdeletecolor = prompt('enter   a index to add color');
var notodeleteindexcolor = prompt('enter a color');
color.splice(indexdeletecolor, notodeleteindexcolor);
console.log("after deleting color at index: " + indexdeletecolor + ":" + color);

//copy and paste to new arry
var cities = ["karachi", "lahore", "KPK", "quetta", "peshawar"]
var newcities = cities.slice(0, 2);

//join array
var arr = ["This", "is", "my ", "cat"];
var newarr = arr.join('');
console.log(newarr);

//FIFO
var fifo = [];
fifo.push("keyboard");
console.log(fifo.shift());
fifo.push("mouse");
console.log(fifo.shift());
fifo.push("printer");
console.log(fifo.shift());
fifo.push("monitor");
console.log(fifo.shift());


//LIFO
var lifo = [];
lifo.pop("monitor");
console.log(lifo.shift());
lifo.pop("printer");
console.log(lifo.shift());
lifo.pop("mouse");
console.log(lifo.shift());
lifo.pop("keyboard");
console.log(lifo.shift());
//phone
var phone = ["Apple", "Vivo", "Oppo", "Techno", "Redmi", "Realme"];
var selecthtml = ("<select>");


for (var i = 0; i < phone.length; i++) {
    selecthtml += ("<option>" + phone[i] + ">" + phone[i] + "</option>")
}
var selecthtml = ("</select>");


//     //ascending order
var stdscore = [450, 390, 480, 230];
console.log(stdscore);

stdscore.sort();
stdscore.sort((a, b) => a - b);
console.log('Ordered score of student is: ' + stdscore.join(","));

// chapter 17 to 20

//empty array
var emp = [];
console.log(emp);

//multidimensional array means matrix
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
console.log(matrix);

// num 1 to 10
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

//
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
let numer = prompt("enter table number");
let length = prompt("enter length");
for (let i = 1; i <= length; i++) {
    console.log(numer * i);
}
// Array of fruits
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// Counting: 1, 2, 3, ..., 15
let count = "Counting: ";
for (let i = 1; i <= 15; i++) {
    count += i + ", ";
}
console.log(count);

// Reverse counting: 10, 9, 8, ..., 1
let revcount = "Reverse counting: ";
for (let i = 10; i >= 1; i--) {
    revcount += i + ", ";
}
console.log(revcount);

// Even: 0, 2, 4, ..., 20
let evencount = "Even: ";
for (let i = 0; i <= 20; i += 2) {
    evencount += i + ", ";
}
console.log(evencount);

// Odd: 1, 3, 5, ..., 19
let oddcount = "Odd: ";
for (let i = 1; i <= 19; i += 2) {
    oddcount += i + ", ";
}
console.log(oddcount);

// Series: 2k, 4k, 6k, ..., 20k
let sercount = "Series: ";
for (let i = 2; i <= 20; i += 2) {
    sercount += i + "k, ";
}
console.log(sercount);

//bakery items
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
console.log(bakery);

//bakery
var input = prompt('Welcome to our bakery,What do you want order Sir/mam');
console.log(input);
var index = bakery.indexOf(input);

if (index === input) {
    alert(input + "  is available at index" + index + "in our bakery");
}
else {
    alert(" We are Sorry  " + input + " is not available in our bakery");
}

//check largest number in array
A1 = [24, 53, 78, 91, 12];
console.log(A1);
var large = A1[0];
console.log("Array items : " + A1.join(","))
for (i = 1; i < A1.length; i++) {
    if (A1[i] > large) {
        large = A1[i];

    }
}
console.log('The Largest number is : ' + large);

//check smallest number in array
var A2 = [24, 53, 78, 91, 12];
console.log(A2);
var small = A2[0];
console.log("Array items : " + A2.join(","))
for (i = 1; i < A2.length; i++) {
    if (A2[i] < small) {
        small = A2[i];

    }
}

console.log('The smallest number is : ' + small);

//print multiples of 5 from 1 to 100
for (i = 5; i <= 100; i += 5) {
    console.log(i);
}
//--------------------ch 21 to 25------------------------
// 6 greeting full name 
var firstname = prompt('Enter your First Name')
console.log(firstname);
var secname = prompt('Enter your Second Name')
console.log(secname);

alert("HEY!  " + firstname + secname + "\n good to see you!");

// 2 take input fav mobile and show its length in browser
var mobile = prompt('Enter your Favorite phone Name')
var moblength = mobile.length;

document.write("The length of your favorite mobile is " + moblength + "<br>");

// 3 find index of n in a word
var word = "Pakistani";
var Nindex = word.indexOf('n');

document.write("The index of n in Pakistani is  " + Nindex + "<br>");


// 4 last index of l in a phrase
var phrase = "Hello World";
var Lindex = word.lastIndexOf('l');

document.write("The index of l in Pakistani is  " + Lindex + "<br>");

// 5 character of a 3rd index 
var word3 = "Pakistani";
var thirdchar = word.charAt('3');

document.write("The character of a 3rd index  is  " + thirdchar + "<br>");


//1
var firstName = prompt("Enter first name:");
var lastname = prompt("Enter last name:");
var fullName = firstName + " " + lastname;
alert("Welcome " + fullName + "!");
//7
var originalVar = 'Hyderabad';
var replaceVar = originalVar.replace("Hyderabad", "Islamabad");
document.write("<br><br>City:<br>" + originalVar + "<br>After replacement:<br>" + replaceVar);
//8
var message = "Ali and sami are best friends. They play football and cricket together."
var newMessage = message.replace("and", "&");
document.write("<br><br>Original:<br>" + message + "<br>After replacement:<br>" + newMessage);
//9
var value = "472";
var newvalue = parseInt(value);
document.write("<br><br>Value: " + value + "<br;>Type: " + typeof (value) + "<br>Value: " + newvalue + "<br>Type: " + typeof (newvalue))
//10
var input = "peanuts";
var output = input.toUpperCase();
document.write("<br><br>Input: " + input + "<br>To uppercase: " + output);

//11 
var userinput = prompt("Entera string:")
var titlecase = "";
if (input !== null && input !== "") {
    titlecase = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
} else {
    titlecase = "No input provided.";
}

document.write("Title case: " + titlecase);

//12
var numb = 35.36;
var str = numb.toString().replace('.', '');
document.write("<br>the result is :  " + str);

//13 Validate A username
var username1 = prompt('Enter your username');
var valid = true;
for (var i = 0; i < username1.length; i++) {
    var charcode = username1.charCodeAt(i);

    if (charcode === 33 || charcode === 44 || charcode === 46 || charcode === 64) {
        alert("Please enter a valid username");
        valid = false;
        break;
    }


}
if (valid) {
    alert("your user name is valid " + username1);
}

//14
var bakery2 = ["cake", "apple pie", "cookie", "chips", "patties"];
console.log(bakery);
var userinput2 = prompt('enter an item').toLowerCase();
var valid2 = false;
if (userinput2 !== null) {
    userinput2 = userinput2.toLowerCase();



    for (var i = 0; i < bakery2.length; i++) {
        if (bakery2[i].toLowerCase() === userinput2) {
            valid2 = true;
            break;
        }
    }
}
if (valid2) {
    alert(userinput2 + "  is avaliable in the list");
}
else {
    alert(userinput2 + "  is  not avaliable in the list");
}


//15
function checkPassword(password) {
    if (password.length < 6) {
        return "Password must be at least 6 characters long.";
    }

    let hasAlphabet = false;
    let hasNumber = false;
    let startsWithAlphabet = false;

    for (let i = 0; i < password.length; i++) {
        let ascii = password.charCodeAt(i);
        if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
            hasAlphabet = true;
        }
        if (ascii >= 48 && ascii <= 57) {
            hasNumber = true;
        }
        if (i === 0 && ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))) {
            startsWithAlphabet = true;
        }
    }

    if (!hasAlphabet) {
        return "Password must contain at least one alphabet.";
    }

    if (!hasNumber) {
        return "Password must contain at least one number.";
    }

    if (!startsWithAlphabet) {
        return "Password must not start with a number.";
    }

    return "";
}

let password = prompt("Enter your password:");

while (true) {
    let validationMessage = checkPassword(password);
    if (validationMessage === "") {
        alert("Your password is valid!");
        break;
    } else {
        alert("Invalid password: " + validationMessage);
        password = prompt("Enter your password:");
    }
}
//16

var university = "University of Karachi";
var universityArray = [];

for (var i = 0; i < university.length; i++) {
    universityArray.push(university[i]);
}
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}
//17
var userInput = prompt("Enter a word")
var lastchar = userInput.charAt(userInput.length - 1)
document.write("<br><br>User input: " + userInput + "<br>last character of input: " + lastchar)
//18
const sentence = "The quick brown fox jumps over the lazy dog";
const word = "the";

const lowerCaseSentence = sentence.toLowerCase();

// Split the sentence into an array of words
const wordsArray = lowerCaseSentence.split(' ');

let cnt = 0;

for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === word) {
        cnt++;
    }
}
document.write("<br><br>Text: " + sentence + "<br>There are " + cnt + " occurence(s) of '" + word + "'")