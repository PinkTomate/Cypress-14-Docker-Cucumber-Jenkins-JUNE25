# Cypress-14-Docker-Cucumber-Jenkins-JUNE25

Section 1:

What is Cypress?
Cypress is a modern front-end testing framework built for the web. It’s mainly used to automate testing of web applications in the browser — focusing on end-to-end (E2E) testing, but also supports integration and unit tests.

Used for:
Testing user interactions in a real browser.
Ensuring UI and UX functionality works as expected.
Catching bugs before deploying your web app.
Automating regression testing (so you don’t test manually every time).

Section 2:

Javascript: Syntaxis & Estructura.

JavaScript is an interpreted, lightweight, object-oriented programming language, mainly used to create interactive web pages. It works together with HTML and CSS, and runs in the user's browser (frontend), although it can also be used on the server side (backend) with environments like Node.js.

Basics JavaScript:

1. Variables:
They are used to store data.

```javascript

let nombre = "Ana";
const PI = 3.14;
var edad = 25;  // (menos recomendado hoy en día)

```

let: variable que puede cambiar.
const: valor constante.
var: forma antigua, aún válida pero menos usada.

2. Data Types

```javascript
String: "Hola"
Number: 42, 3.14
Boolean: true, false
Array: [1, 2, 3]
Object: { nombre: "Ana", edad: 25 }
null y undefined

```

3. Operators

Symbols or special keywords used to perform operations on values or variables. Allow to manipulate data, perform calculations, compare values.  

```html

+  -  *  /   %   // Aritméticos
==  ===  !=  !==  <  >  // Comparación
&&  ||  !          // Lógicos

```

4. Unary operator

Operator that operates on a single operand. This contrasts with binary operators, which operate on two operands, and ternary operators, which operate on three.

5. Ternary operator

The conditional (ternary) operator in JavaScript is a concise alternative to an if...else statement, allowing for conditional logic to be expressed in a single line. It is the only JavaScript operator that takes three operands.

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

6. Conditional Statemets

Conditional statements in JavaScript control the flow of execution in a program based on whether specific conditions are true or false. They allow for different blocks of code to be executed depending on the outcome of a logical evaluation.
The primary types of conditional statements in JavaScript are: if statement.  

```javascript
if (condition) {
// code to be executed if condition is true
}
```

if...else Statement.
Provides an alternative block of code to execute if the initial if condition evaluates to false.

```javascript
 if (condition) {
      // Code to execute if condition is true
    } else {arre
      // Code to execute if condition is false
    }
```

if...else if...else Statement.
Allows for checking multiple conditions in sequence. If the first if condition is false, it proceeds to check the else if conditions, and finally executes the else block if none of the preceding conditions are true.

```javascript
if (condition1) {
      // Code to execute if condition1 is true
    } else if (condition2) {
      // Code to execute if condition2 is true
    } else {
      // Code to execute if none of the above conditions are true
    }
```

7. Switch Statement.
Provides an alternative to multiple if...else if statements when checking a single variable against multiple possible values.

```javascript

switch (expression) {
      case value1:
        // Code to execute if expression matches value1
        break;
      case value2:
        // Code to execute if expression matches value2
        break;
      default:
        // Code to execute if no match is found
    }
```

Section 3:

Instalation of Cypress in Visual Studio Code.

Section 4:

How to Use test Runner to execute cypress tests. Ando also select browser for testing.

To open Cypres in a terminal use command: npx cypress open

Section 5:

Folder structure

Cypress >e2e //All test files are located in this folder

All have js extension which means are jabascript files.

Cypress >Fixtures //Folder is used to hold the static data

Cypress >Support >Command// holds commands samples
Cypress >Support >e2e//holds global configurations and behaviors that modify the Cypress.
Cypress >cypress.config//files used to store basic configuration which is needed for cypress such as base URL, port envieronment.

Package.json //used to manage the projects dependencies.
Package-lock.json //log file that holds the information on the dependencies or packages installed for a node.js

Section 6:

Section 7:

-Locator Stategies: locator are elements of the websites. In Cypress, locators (also called selectors) are used to find and interact with elements on a web page during automated tests.

Locators allow Cypress to:

Find HTML elements (like buttons, inputs, links, etc.)
Click elements
Type into inputs
Check values or text

Assert element visibility or state

Type:
```javascript
CSS Selector	cy.get('.btn-primary')	Selects by class, ID, tag, attributes, etc.

ID	cy.get('#login-button')	Selects element with ID login-button

Class	cy.get('.form-control')	Selects elements with class form-control

Attribute	cy.get('[data-cy=submit]')	Custom attributes for better test stability

Text Content	cy.contains('Submit')	Finds element that contains specific text

Parent-Child	cy.get('.form').find('input')	Selects child input inside .form
```

My first test in cypress

```javascript	
describe('Login Functionality',function () {
  it('Login Test using Conduit',function () {
    cy.visit('https://react-redux.realworld.io/')
    cy.get('a[href="#login"]').click()
    cy.get('input[placeholder="Email"]').type('cypressdemo@gmail.com')
    cy.get('input[placeholder="Password" ]').type('cypressdemo')
    cy.get('button[type="submit"]').click()
})
})

```
