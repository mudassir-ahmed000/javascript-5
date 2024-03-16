// ARRAY CONCEPT

// var literalName = [];

// var objectName = [];

// var string = ["Mudassir Ahmed"];

// var number = [10,9,8];

// var boolean = [true,false];

// var mixedArr = ["Mudassir Ahmed",17,true];

// var qualification = ["<h1>" + "Qualification" + "</h1>"];
// document.write(qualification);
// var education = ["1)" + "SSC" + "<br>" + "2)" + "HSC" + "<br>" + "3)" + "BSC" + "<br>" + "4)" + "BS" + "<br>" + "5)" + "BCOM" + "<br>" + "6)" + "MS" + "<br>" + "7)" + "M.Phil" + "<br>" + "8)" + "PHD" + "<br>" ];
// document.write(education);



// Step 1: Store 3 student names in an array
// var studentNames = ["Mudassir", "Awais", "Khurram"];
// Step 2: Take another array to store scores of these three students
// var studentScores = [420, 350, 480]; // Assuming total marks are 500 for each student
// Step 3: Display the scores and percentages of students
// for (let i = 0; i < studentNames.length; i++) {
//     var studentName = studentNames[i];
//     var studentScore = studentScores[i];
    
//     // Calculate percentage
//     var percentage = (studentScore / 500) * 100;

//     // Display results
//     document.write(studentName + " scored " + studentScore + " out of 500." + " Percentage: " + percentage.toFixed(2) + "% " + "<br>");
// }




// Step 1: Initialize an array with color names
// var colorArray = ["Red", "Green", "Blue"];
// document.write(colorArray);
// // Step 2a: Ask the user what color to add to the beginning & add that color to the beginning of the array
// var addAtStart = prompt("Enter a color to add to the beginning:");
// colorArray.unshift(addAtStart);
// document.write(colorArray);
// // Step 2b: Ask the user what color to add to the end & add that color to the end of the array
// var addAtEnd = prompt("Enter a color to add to the end:");
// colorArray.push(addAtEnd);
// document.write(colorArray);
// // Step 2c: Add two more colors to the beginning of the array
// colorArray.unshift("Yellow", "Purple");
// document.write(colorArray);
// // Step 2d: Delete the first color in the array
// colorArray.shift();
// document.write(colorArray);
// // Step 2e: Delete the last color in the array
// colorArray.pop();
// document.write(colorArray);
// // Step 2f: Ask the user at which index to add a color & color name, then add the color to the desired position/index
// var indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
// var colorToAddAtIndex = prompt("Enter the color to add at that index:");
// colorArray.splice(indexToAddColor, 0, colorToAddAtIndex);
// document.write(colorArray);
// // Step 2g: Ask the user at which index to delete color(s) & how many colors to delete, then remove the same number of color(s) from the user-defined position/index
// var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
// var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colorArray.splice(indexToDelete, numberOfColorsToDelete);
// document.write(colorArray);




// var scores = [320,230,480,120];
// document.write(scores + "<br>");
// scores.sort();
// document.write("Ordered score of students : " + scores)


// Initialize an array with city names
// var cities = ["New York", "Paris", "Tokyo", "London", "Sydney"];
//  Initialize an empty array to store selected cities
// var selectedCities = [];
// // Copy 3 array elements from cities to selectedCities
// selectedCities = cities.slice(0, 3);

// // Display the original and selected cities
// document.write("Cities List:", cities + "<br>");
// document.write("Selected Cities List:", selectedCities);




// var arr = ["This","is","my","cat"];
// var sentence = arr.join(" ");
// document.write("ARRAY : " + arr + "<br>" + "STRING : " + sentence);



// var phoneManufacturer = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"];
// document.write(
//        "<select>" + 
//     "<option>" + "Apple" + "</option>" + 
//     "<option>" + "Samsung" + "</option>" + 
//     "<option>" + "Motorolla" + "</option>" + 
//     "<option>" + "Nokia" + "</option>" + 
//     "<option>" + "Sony" + "</option>" + 
//     "<option>" + "Haier" + "</option>" +
//     "</select>"
// )



// Chapter 14(If statement nested)

// var userInput = +prompt("Enter Your Password");
// if (userInput !== " ") {
//     // Check if the password is not greater than 5 characters
//     if (userInput <= 5) {
//       alert("Password must be greater than 5 characters.");
//     } else {
//       alert("OK");
//     }
//   }
//   else {
//     alert("Password space is empty.");
//   }



// a = 1;
// c = "Max"
// if (a === 1) {
//     if (c === "Max") {
//       alert("OK");
//     }
//   }


// a = 1;
// c = "Max"
// if (a === 1 && c === "Max") {
//     alert("OK");
//   }



// // Declare two variables and assign them the same number value
// var firstVariable = 5;
// var secondVariable = 5;

// // Test conditions using nested if statements
// if (firstVariable === secondVariable) {
//   if (firstVariable <= secondVariable) {
//     // Display an alert message if both conditions are true
//     alert("Conditions passed: firstVariable equals secondVariable and is less than or equal to secondVariable.");
//   }
// }



//  ARRAY



// var emptyArr = [];



// var stringArr = ["Mudassir Ahmed"];





// // Corrected array declaration
// var alphabet = ["h", "i", "j", "k"];
// // Access and print the letter "j" using array index
// alert(alphabet[2]);





// // Corrected array declaration
// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];

// // Find the total length of the array
// var totalLength = alphabet.length;

// // Display the total length in an alert
// alert("Total length of the array: " + totalLength);





// // Declare an array with one element
// var myArray = ["firstElement"];

// // Add a second element with index
// myArray[1] = "secondElement";

// // Create an alert with the new element
// alert("New element: " + myArray[1]);





// // Create an array with 1 string element
// var myArray = ["firstElement"];

// // Add an additional element to the array using push
// myArray.push("secondElement");

// // Create an alert with the last element
// alert("Last element: " + myArray[myArray.length - 1]);





// var Alphabet = ["h", "i", "j", "k"];

// // Remove the last element from the array using pop
// Alphabet.pop();

// // Display the modified array in an alert
// alert("Modified array: " + Alphabet);




// var Alphabet = ["h", "i", "j", "k"];

// // Add a new element (number) to the end of the array using push
// Alphabet.push(18);

// // Display the modified array in an alert
// alert("Modified array: " + Alphabet);




// var sizes = ["S","M","XL","XXL","XXXL" + "<br>"];
// document.write(sizes)
// sizes.shift();
// document.write(sizes);





// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3);
// document.write(sizes); // Output: [1, 2, 3, "S", "M", "XL", "XXL", "XXXL"]





// var myArray = ["firstElement"];
// myArray.unshift("newFirstElement");
// alert(myArray[0]);




// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// // Insert "L" after "M"
// sizes.splice(2, 0, "L");
// document.write(sizes); 





// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);
// document.write(regSizes); 





// var pets = ["dog", "cat", "ox", "duck", "frog"];
// // Add 2 elements after "dog" using splice
// pets.splice(1,3,"parrot","rabbit");
// document.write(pets); 




// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,2);
// document.write(pets);





// var pets = ["dog", "cat", "ox", "duck", "frog","flea"];
// newPets = pets.slice(3,5);
// document.write(newPets);




// var fname = "Mudassirr Ahmed";
// for(i = 1 ; i < 11 ; i++){
//     document.write(fname + "<br>")
// }




// for (var i = 0; i <= 11; i++) {
// document.write(i);
// }




// for(var i = 0 ; i<=4 ; i++){};





// for (var count = 0; count < 100; count++) {
//     document.write(count + "<br>");
// }



// for (var i = 3; i > 0; i--) {
//     document.write(i);
// }




// var array = [1, 2, 3, 4, 5];
// var numberOfElements = array.length;
// document.write(numberOfElements);



// var flag = true; 





// var pets = ["dog", "cat", "ox", "duck", "frog","flea"];
// for(i = 0 ; i < pets.length ; i++){
//     document.write(pets + "<br>")
// };





// for (var i = 0; i < 10; i++) {
//     if (i === 1) {
//         alert(i); 
//         break;    
//     }
// }






// // Create an array containing user names
// var userNames = ["Alice", "Bob", "Charlie", "David", "Eve"];

// // Prompt the user to enter a first name
// var firstName = prompt("Enter first name");

// // Loop through the user names array
// for (var i = 0; i < userNames.length; i++) {
//     // Check if the entered first name matches any user name in the array
//     if (firstName === userNames[i]) {
//         alert("Welcome, " + firstName); // Alert "Enter" if the user name matches
//         break; 
//     } else {
//         alert("Please write correct user name"); 
//         break; // Break out of the loop to avoid unnecessary iterations
//     }
// }







// var matchFound = false;
// var userInput = prompt("Enter a value");
// var list = ["apple", "banana", "orange", "grape"];

// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//         alert("Match found");
//         matchFound = true;
//         break;
//     }
// }

// if (!matchFound) {
//     alert("No match found");
// }





// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (var i = 0; i < firstArr.length; i++) {
//     for (var j = 0; j < secondArr.length; j++) {
//         document.write(firstArr[i] + secondArr[j] + "<br>");
//     }
// }



// // Declare and initialize an empty multidimensional array
// var multidimensionalArray = [];
// // Add inner arrays as needed
// multidimensionalArray.push([]);
// multidimensionalArray.push([]);
// // Optionally, add elements to the inner arrays
// multidimensionalArray[0].push(1);
// multidimensionalArray[1].push(2);
// document.write(multidimensionalArray); 


// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// var count = matrix.join(" ")
// document.write(count);


// // Declare and initialize a multidimensional array representing a matrix
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // Function to print the matrix without commas
// function printMatrix(matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//         let row = '';
//         for (let j = 0; j < matrix[i].length; j++) {
//             row += matrix[i][j];
//             if (j < matrix[i].length - 1) {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }

// // Print the matrix without commas
// printMatrix(matrix);



// for(i = 1 ; i < 11 ; i++ ){ document.write(i + "<br>"); }


// var number = +prompt("Enter number of a table");
// var range = +prompt("Enter range of table");
// if (!isNaN(number)){
// document.write("<h1>" + "Multiplication table of " + number + " upto " + range + "</h1>")
// for(i = 1 ; i <= range ; i++){
// document.write(number + "×" + i + "=" + number* i + "<br>")
// }
// }
// else{
//     document.write("Enter valid number")
// }




// var  fruits = ["Apple","Orange","Mango","Banana","Strawberry"]
// for(i=0 ; i<fruits.length ; i++){
//     document.write(fruits[i] + "<br>");
// }
// document.write("element at index " + fruits.indexOf("Apple") + " is Apple" + "<br>");
// document.write("element at index " + fruits.indexOf("Orange") + " is Orange" + "<br>");
// document.write("element at index " + fruits.indexOf("Mango") + " is Mango" + "<br>");
// document.write("element at index " + fruits.indexOf("Banana") + " is Banana" + "<br>");
// document.write("element at index " + fruits.indexOf("Strawberry") + " is Strawberry" + "<br>");




// var counting = [1,2,3,4,5,6,7,8,9,10]
// document.write("<h2>" + "counting" + "</h2>" + counting)

// document.write("<h2>" + "reverse" + "</h2>")
// for(i = counting.length - 1 ; i >= 0 ; i--){
// document.write(counting[i] + ",");
// }


// document.write("<h2>" + "even" + "</h2>")
// for(i=0;i<counting.length;i++){
//     if (counting[i] % 2 === 0){
//         document.write(counting[i] + ",");
//     }
// }


// document.write("<h2>" + "odd" + "</h2>")
// for(i=0;i<counting.length;i++){
//     if (counting[i] % 2 !== 0){
//         document.write(counting[i] + ",");
//     }
// }


// document.write("<h2>" + "series" + "</h2>")
// for(i=0;i<counting.length;i++){
//     if (counting[i] % 2 === 0){
//         document.write(counting[i] + "k ,");
//     }
// }






// var A = [24, 53, 78, 91, 12];
// var largest = A[0]; // Assume first element is the largest

// // Iterate through the array to find the largest number
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// } 
// document.write("Array items : " + A + "<br>")
// document.write("The largest number in the array is:", largest);




// var A = [24, 53, 78, 91, 12];
// var smallest = A[0]; // Assume first element is the largest

// // Iterate through the array to find the largest number
// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// } 
// document.write("Array items : " + A + "<br>")
// document.write("The largest number in the array is:", smallest);



// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + "<br>");
//     }
// }
