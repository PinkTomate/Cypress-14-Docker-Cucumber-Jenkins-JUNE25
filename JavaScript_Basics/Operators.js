/* Operators in JavaScript
   1. Arithmetic Operators
   2. Assignment Operators
   3. Comparison Operators
   4. Logical Operators
   5. Bitwise Operators
   6. Ternary Operator
   7. Type Operators
*/

let a = 10;
let b = 5;

let sum = a + b;
console.log(sum);

let difference = a - b;
console.log(difference);

let Multiplication = a * b;
console.log(Multiplication);

let quotient = a / b;
console.log(quotient);

let reminder = a % b;
console.log(reminder);

let power = a ** b;
console.log(power);


// 1. Arithmetic Operators
console.log("Arithmetic Operators:");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b); 

// 2. Assignment Operators 

let c = 10;
c += 5; // c = c + 5
console.log(c);

// 3. Comparison Operators
let num1 = 10;
let num2 = '20';

console.log("Equal:", num1 == num2); // loose equality
console.log("Strict Equal:", num1 === num2); // strict equality
console.log("Not Equal:", num1 != num2); // loose inequality
console.log("Strict Not Equal:", num1 !== num2); // strict inequality
console.log("Greater Than:", num1 > num2);
console.log("Less Than:", num1 < num2);
console.log("Greater Than or Equal:", num1 >= num2);
console.log("Less Than or Equal:", num1 <= num2);

// 4. Logical Operators
let isTrue = true;
let isFalse = false;

let result1 = isTrue && isFalse; // AND operator, false if any operand is false
let result2 = isTrue || isFalse; // OR operator, true if any operand is true
let result3 = !isTrue; // NOT operator, negates the boolean value

console.log("Logical Operators:");
console.log("AND:", isTrue && isFalse);
console.log("OR:", isTrue || isFalse);
console.log("NOT:", !isTrue);

// 5. Unary Operators
let count = 5;

console.log("Increment:", ++count); 
console.log("Decrement:", --count);
let negativeCount = -count;//-10
let positiveCount = +negativeCount; // 10

// 6. Ternary Operator
condition ? expressionIfTrue : expressionIfFalse;
let age = 18;
let myStatus = (age >= 18) ? "Adult" : "Minor";
console.log(myStatus);

// 7. bitwise Operators

let x = 5; // 0101 in binary
let y = 3; // 0011 in binary            

let bitwiseAnd = x & y; // 0001 in binary, which is 1 in decimal
let bitwiseOr = x | y; // 0111 in binary, which is| 7 in decimal
let bitwiseXor = x ^ y; // 0110 in binary, which is 6 in decimal