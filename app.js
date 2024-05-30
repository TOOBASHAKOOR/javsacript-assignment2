// QUESTION 1
let city=prompt("Please enter your city name: ");
if (city.toLowerCase() ==="karachi" ){
    alert ('welcome to city of light')
}

// QUESTION 2
let gender=prompt("Please enter your gender(Male / Female): ");
if (gender.toLowerCase() === "male"){
    alert("Good Morning Sir. ");
}
else if  (gender.toLowerCase() === "female"){
    alert("Good Morning Ma'am. ");
}
else{
    alert("Good Morning! ")
}

// QUESTION 3
let color= prompt("Enter the coloe of the road traffic signal(Red/Yellow/Green): ");
if (gender.toLowerCase() === "male"){
    alert("Good Morning Sir. ");
}
else if  (color.toLowerCase() === "red"){
    alert("Must Stop");
}
else if  (color.toLowerCase() === "yellow"){
    alert("Ready to Move");
}
else if  (color.toLowerCase() === "green"){
    alert("Move now");
}
else{
    alert("Invalid color.Please enter Red, Yellow, or Green. ");
}

// QUESTION 4
let fuel= parseFloat(prompt("Enterthe remaining fuel in your car(in litres): "));
if (fuel < 0.25){
    alert("Please refill the fuel in your car");
}
else {
    alert("You have ${fuel}itres of fuel remainig");
}


// QUESTION 5
var a=4;
if (++a=== 5){
    alert("given condition for varriable is a true");
}
 
var b=82;
if (b++=== 83){
    alert("given condition for varriable is a true");
}

var c=12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c=== 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c=== 14) {
    alert("condition 4 is true");
}

let materialCost=20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equal ");
}


if (true){
    alert("True");
}
if (false){
    alert("false");
}

if ("car"< "cat")
    {
        alert {"car is smalller than cat"}
    }

    // QUESTION 6
 const subject1 = parseFloat(prompt("Enter your marks obtained in subject 1: "));   
 const subject2 = parseFloat(prompt("Enter your marks obtained in subject 2: "));  
 const subject3 = parseFloat(prompt("Enter your marks obtained in subject 3: "));  
 const totalMarks=  parseFloat(prompt("Enter your marks: "));
 const marksObtained = subject1 + subject2 + subject3;
 const persentage = (marksObtained /totalMarks)* 100 ;
 let grade;
 let remarks;
 if (persentage >= 90){
    grade="A";
    remarks= "Excellent";
 }else  if (persentage >= 80){
    grade="B";
    remarks= "Good";
 }else  if (persentage >= 70){
    grade="C";
    remarks= "Fair";
 }else  if (persentage >= 60){
    grade="D";
    remarks= "Pass";
 }else  {
    grade="F";
    remarks= "Fail";
 }
 document.write('Total Marks:$ {totalMarks} <br> Marks Obtained:$ {marksObtained} <br> Persentage:$ {persentage.tofixed(2)} % <br> Grade:$ {grade} <br> Remarks: $ {remarks}');

 
    // QUESTION 7
    let secratcode=1;
    let user = prompt ("guess the secret number");
    if (user === secratcode){
        alert("Bingo! Correct answer ");
    }
    else if (user + 1=== secratcode){
        alert("Close enough to the correct answer ");
    }
    else {
        alert("try again");
    }


 // QUESTION 8
 const num= parseInt ( prompt("Enter a number: "));
 if (num % 3 === 0){
    alert ("${num} is divisible by 3");
 } else {
    alert ("${num} is not divisible by 3");
 }

  // QUESTION 9

  const anynumber=parseInt (promp("Enter a number: "));
  if (number % 2 === 0){
    alert('$ {number} is an even number');
  }else {
    alert('$ {number} is an odd number');
  }


   // QUESTION 10
   const tempersture= parseInt(prompt("Enter the temperature: "));
   if (tempersture > 40){
    alert("its too hot outside.");
   }
   else  if (tempersture > 30){
    alert("The Weather today is normal.");
   }
   else if (tempersture > 20){
    alert("Today Weather is cool.");
   }
   else {
     alert("Unknown weather condition");
   }

//    question 11

const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));
const operation = prompt("Enter the operation (+, -, *, /, %): ");

if (operation === "+") {
  alert(`Result: ${num1 + num2}`);
} else if (operation === "-") {
  alert(`Result: ${num1 - num2}`);
} else if (operation === "*") {
  alert(`Result: ${num1 * num2}`);
} else if (operation === "/") {
  if (num2 !== 0) {
    alert(`Result: ${num1 / num2}`);
  } else {
    alert("Error: Division by zero is not allowed.");
  }
} else if (operation === "%") {
  alert(`Result: ${num1 % num2}`);
} else {
  alert("Invalid operation. Please enter +, -, *, /, or %.");
}
