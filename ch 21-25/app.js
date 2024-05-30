// question 1

const firstName = prompt("Enter your first name: ");
const lastName = prompt("Enter your last name: ");
const fullName = firstName + " " + lastName;
alert("Hello, " + fullName);


// question 2

const phoneModel = prompt("Enter your favorite mobile phone model: ");
document.write("Length of input: " + phoneModel.length);


// question 3

const word = "Pakistani";
const index = word.indexOf("n");
document.write("Index of 'n': " + index);


// question 4

const word1 = "Hello World";
const index1 = word1.lastIndexOf("l");
document.write("Last index of 'l': " + index1);


// question 5

const word2 = "Pakistani";
const character = word2[3];
document.write("Character at 3rd index: " + character);


1// question 6

const firstName1 = prompt("Enter your first name: ");
const lastName1 = prompt("Enter your last name: ");
const fullName1 = firstName1.concat(" ", lastName1);
alert("Hello, " + fullName1);


// question 7

const word3= "Hyderabad";
const replaced1 = word3.replace("Hyder", "Islam");
document.write(replaced1);


// question 8

const message = "Ali and Sami are best friends. They play cricket and football together.";
const replaced = message.replace(/and/g, "&");
document.write(replaced);


// question 9
const num = "472";
const number = parseInt(num);
document.write("Value: " + number + ", Type: " + typeof number);


// question 10

const input = prompt("Enter a string: ");
const upperCase = input.toUpperCase();
document.write("Upper case: " + upperCase);


// question 11

const input1 = prompt("Enter a string: ");
const titleCase = input1.replace(/\w\S*/g, function(txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
document.write("Title case: " + titleCase);


// question 12

const num1= 35.36;
const str = num1.toString();
const removedDot = str.replace(".", "");
document.write("Result: " + removedDot);


// question 13

const username = prompt("Enter a username: ");
if (username.match(/[@.!]/)) {
  alert("Invalid username. Please enter a valid username.");
} else {
  document.write("Username: " + username);
}


// question 14

const array1 = ["cake", "apple pie", "cookie", "chips", "patties"];
const search = prompt("Enter a search term: ").toLowerCase();
const index3 = array1.indexOf(search);
if (index3 !== -1) {
  alert(search + " is available at index " + index3 + " in our bakery.");
} else {
  alert("Sorry, " + search + " is not available in our bakery.");
}


// question 15

const password = prompt("Enter a password: ");
if (password.match(/^[a-zA-Z]/) && password.match(/[a-zA-Z0-9]/) && password.length >= 6) {
  document.write("Password is valid.");
} else {
  alert("Password is not valid. Please enter a valid password.");
}

// question 16

const university = "University of Karachi";
const array = university.split(" ");
document.write("Elements of array: " + array.join("<br>"));


// question 17

const input5 = prompt("Enter a string: ");
const lastChar = input5[input5.length - 1];
document.write("Last character: " + lastChar);


// question 18 

const word5= "The quick brown fox jumps over the lazy dog";
const count = word5.split("the").length - 1;
document.write("Number of occurrences of 'the': " + count);
