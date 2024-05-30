// question 1

const multiArray = [];

// question 2

const matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
  [3, 2, 1, 0]
];


// question 3

for (let i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}


// question 4

const tableNumber = parseInt(prompt("Enter a number: "));
const tableLength = parseInt(prompt("Enter the length of the table: "));

for (let i = 1; i <= tableLength; i++) {
  document.write(`${tableNumber} x ${i} = ${tableNumber * i}<br>`);
}

// question 5

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}


// question 6

// Counting
for (let i = 1; i <= 15; i++) {
  document.write(i + "<br>");
}

// Reverse Counting
for (let i = 10; i >= 1; i--) {
  document.write(i + "<br>");
}

// Even
for (let i = 0; i <= 20; i += 2) {
  document.write(i + "<br>");
}

// Odd
for (let i = 1; i <= 19; i += 2) {
  document.write(i + "<br>");
}

// Series (2k)
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k<br>");
}


// question 7

const array = ["cake", "apple pie", "cookie", "chips", "patties"];

const searchItem = prompt("Enter an item to search: ");

if (array.includes(searchItem)) {
  alert(`Found: ${searchItem} is in the list`);
} else {
  alert(`Not Found: ${searchItem} is not in the list`);
}

// question 8
const array = [24, 53, 78, 91, 12];

let largest = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

document.write(`Largest number: ${largest}`);


// question 9
const array = [24, 53, 78, 91, 12];

let smallest = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] < smallest) {
    smallest = array[i];
  }
}

document.write(`Smallest number: ${smallest}`);


// question 10

for (let i = 5; i <= 100; i += 5) {
  document.write(i + "<br>");
}
