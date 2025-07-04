// Switch Statement in JavaScript

/* The switch statement is used to perform different actions based on different conditions.
   It is an alternative to using multiple if-else statements.

   The Switch statement:

   switch (expression) {
       case value1:
           // code to be executed if expression === value1
           break;
       case value2:
           // code to be executed if expression === value2
           break;
       default:
           // code to be executed if expression doesn't match any case
   }
*/

let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Banana is yellow");
        break;
    case "apple":
        console.log("Apple is red");
        break;
    default:
        console.log("Unknown fruit");
}

let day = "7"; // Example input for day of the week
// Using switch statement to determine the day of the week
let dayName;            

switch (day) {
    case "1":
        dayName = "Monday";
        break;
    case "2":
        dayName = "Tuesday";
        break;
    case "3":
        dayName = "Wednesday";
        break;
    case "4":
        dayName = "Thursday";
        break;
    case "5":
        dayName = "Friday";
        break;
    default:
        dayName = "Weekend";
}
console.log(`The day is: ${dayName}`);
