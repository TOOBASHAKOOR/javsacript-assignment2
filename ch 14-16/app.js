// qusetion 1
const studentNames = [];

// qusetion 2
const studentNames1 = new Array();

// qusetion 3
const colors = ["red", "green", "blue"];

// qusetion 4
const numbers = [1, 2, 3, 4, 5];

// qusetion 5
const booleanValues = [true, false, true, false];

// qusetion 6
const mixedArray = [1, "hello", true, 3.14];

// qusetion 7
const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write(qualifications.join("<br>"));

// qusetion 8
const students = ["Alice", "Bob", "Charlie"];
const scores = [400, 350, 450];
for (let i = 0; i < students.length; i++) {
  const percentage = (scores[i] / 500) * 100;
  document.write(`${students[i]}: ${scores[i]} (${percentage.toFixed(2)}%)<br>`);
}


                                    // qusetion 9
const colors1 = ["red", "green", "blue"];

// a. Add color to beginning
const newColor = prompt("Enter a color to add to the beginning: ");
colors.unshift(newColor);
document.write(colors.join("<br>"));

// b. Add color to end
const newColor2 = prompt("Enter a color to add to the end: ");
colors.push(newColor2);
document.write(colors.join("<br>"));

// c. Add two colors to beginning
colors.unshift("yellow", "purple");
document.write(colors.join("<br>"));

// d. Delete first color
colors.shift();
document.write(colors.join("<br>"));

// e. Delete last color
colors.pop();
document.write(colors.join("<br>"));

// f. Add color at specified index
const index = parseInt(prompt("Enter the index to add a color: "));
const newColor1 = prompt("Enter a color to add: ");
colors.splice(index, 0, newColor1);
document.write(colors.join("<br>"));

// g. Delete colors at specified index
const index1 = parseInt(prompt("Enter the index to delete colors: "));
const count = parseInt(prompt("Enter the number of colors to delete: "));
colors.splice(index1, count);
document.write(colors.join("<br>"));





// qusetion 10
const scores1 = [400, 350, 450];
scores.sort((a, b) => a - b);
document.write(scores1.join("<br>"));



// qusetion 11
const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
const selectedCities = cities.slice(0, 3);
document.write(selectedCities.join("<br>"));


// qusetion 12

const arr = ["This ", " is ", " my ", " cat"];
const str = arr.join("");
document.write(str);


// qusetion 13
const fifoArray = [];
fifoArray.push("Apple");
fifoArray.push("Samsung");
fifoArray.push("Motorola");
document.write(fifoArray.shift() + "<br>"); // Apple
document.write(fifoArray.shift() + "<br>"); // Samsung
document.write(fifoArray.shift() + "<br>"); // Motorola


// qusetion 14

const lifoArray = [];
lifoArray.push("Apple");
lifoArray.push("Samsung");
lifoArray.push("Motorola");
document.write(lifoArray.pop() + "<br>"); // Motorola
document.write(lifoArray.pop() + "<br>"); // Samsung
document.write(lifoArray.pop() + "<br>"); // Apple



// qusetion 15

const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
