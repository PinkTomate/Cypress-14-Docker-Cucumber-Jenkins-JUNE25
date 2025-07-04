// Conditional Statements in JavaScript

/* The if statement executes a block of code if a specified condition is true.
   The else statement executes a block of code if the condition is false.  

   The If statement:

   if (condition) {
       // code to be executed if condition is true
   }
*/

let age = 10;

if (age >= 18) {
   console.log("You are an Adult");
} else {
   console.log("Minor");
}

/* The else if statement allows you to check multiple conditions.
    The else if statement is used to specify a new condition if the first condition is false.
    
    The If-Else If statement:
    
    if (condition1) {
         // code to be executed if condition1 is true
    } else if (condition2) {
         // code to be executed if condition2 is true
    } else {
         // code to be executed if both conditions are false
    }
    */

    let num = -10;
    if (num > 0) {
        console.log("Positive Number");
    } else if (num < 0) {
        console.log("Negative Number");
    } else {
        console.log("Number is Zero");
    }

    /* The else statement is used to execute a block of code if the condition is false.

   The If-Else statement:

   if (condition) {
       // code to be executed if condition is true
   } else {
       // code to be executed if condition is false
   }
   */           

    let temperature = 30;   
    if (temperature > 25) {
        console.log("It's a hot day");
    } else {
        console.log("It's a cool day");
    }

    //Nested If Statements

    let marks = 85; 
    if (marks >= 90) {
        console.log("Grade: A");
    } else if (marks >= 80) {
        console.log("Grade: B");
    } else if (marks >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: D");
    }
