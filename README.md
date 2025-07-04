# Cypress-14-Docker-Cucumber-Jenkins-JUNE25

En está seccion aprendimos sobre que es Javascript: Syntaxis & Estructura. 

JavaScript es un lenguaje de programación interpretado, ligero y orientado a objetos, usado principalmente para crear páginas web interactivas. Funciona junto con HTML y CSS, y se ejecuta en el navegador del usuario (frontend), aunque también puede usarse del lado del servidor (backend) con entornos como Node.js.

Conceptos Básicos de JavaScript:

1. Variables:
Sirven para almacenar datos.

let nombre = "Ana";
const PI = 3.14;
var edad = 25;  // (menos recomendado hoy en día)

let: variable que puede cambiar.
const: valor constante.
var: forma antigua, aún válida pero menos usada.

2. Tipos de datos

String: "Hola"

Number: 42, 3.14

Boolean: true, false

Array: [1, 2, 3]

Object: { nombre: "Ana", edad: 25 }

null y undefined

3. Operators

+  -  *  /   %   // Aritméticos
==  ===  !=  !==  <  >  // Comparación
&&  ||  !          // Lógicos

4. Estructuras de control

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

