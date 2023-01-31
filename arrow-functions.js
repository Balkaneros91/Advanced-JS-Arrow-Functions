/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// 1. Vanilla JavaScript Function

//function addTwoNumbers(a, b) {
// Code block
//    return a + b;
//}
//let sum = addTwoNumbers(3, 5);
//console.log(sum);

// terminal: node arrow-functions.js

// 2. Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// 3. Single Line Arrow Function With Parameters

// const addTwoNumbers2 = (a, b) => (a + b);    also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2)

// 4. Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello, World!');

const sayHello = () => console.log('hello hi bonjour');
sayHello();

// 5. Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());