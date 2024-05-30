// question 1
const input = prompt("Enter a character: ");

const asciiCode = input.charCodeAt(0);

if (!isNaN(input)) {
  alert(`${input} is a number`);
} else if (asciiCode >= 65 && asciiCode <= 90) {
  alert(`${input} is an uppercase letter`);
} else if (asciiCode >= 97 && asciiCode <= 122) {
  alert(`${input} is a lowercase letter`);
} else {
  alert(`${input} is a special character`);
}


// question 2
const num1 = parseInt(prompt("Enter the first integer: "));
const num2 = parseInt(prompt("Enter the second integer: "));

if (num1 > num2) {
  alert(`The larger integer is ${num1}`);
} else if (num1 < num2) {
  alert(`The larger integer is ${num2}`);
} else {
  alert("The integers are equal");
}

// question 3
const number = parseInt(prompt("Enter a number: "));

if (number > 0) {
  alert("The number is positive");
} else if (number < 0) {
  alert("The number is negative");
} else {
  alert("The number is zero");
}

// question 4
const character = prompt("Enter a character: ");
const vowels = ["a", "e", "i", "o", "u"];
if (vowels.includes(character.toLowerCase())) {
  alert("The character is a vowel");
} else {
  alert("The character is not a vowel");
}

// question 5
const correctPassword = "password123";
const userInput = prompt("Enter your password: ");
if (userInput === "") {
  alert("Please enter your password");
} else if (userInput === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// question 6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// question 7
const time = prompt("Enter the time in 24 hours clock format (e.g. 1900 for 7pm): ");
const hour = parseInt(time.substring(0, 2));
if (hour < 12) {
  alert("Good morning");
} else if (hour < 18) {
  alert("Good afternoon");
} else {
  alert("Good evening");
}