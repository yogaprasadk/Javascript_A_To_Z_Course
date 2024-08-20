// If else statements
// Conditional statements are fundamental components of programming languages, essential for handling logic and decision-making processes. They allow us to control the flow of our code by executing specific blocks of code based on certain conditions. In JavaScript, conditional statements play a crucial role in directing program execution. Let's delve into this foundational topic in JavaScript to understand its significance and explore its practical applications.

// Introduction
// Conditional statements in JavaScript, such as 'if' and 'if-else', allow us to control the flow of our code based on certain conditions. With these statements, we can specify blocks of code to be executed only when certain conditions are met. For example, using an if statement, we can execute a piece of code if a particular condition evaluates to true. Alternatively, with an if-else statement, we can provide an alternative code block to be executed if the condition evaluates to false. These conditional statements provide powerful tools for building dynamic and responsive programs in JavaScript.

// If Statement
// In JavaScript, an 'if' statement is a fundamental conditional statement that allows us to execute a block of code only if the specified condition is true. If the condition is false, the code block associated with the 'if' statement is skipped.

// Syntax for if statements

// index

if (condition){
    // Code block to be executed if the condition is true
}
// Examples of if statements

// index.js

let speed = 87;

if(speed > 90){
    console.log("OverSpeeding");
}

if(speed > 50 && speed <=90){
    console.log("Normal");
}

if(speed <= 50){
    console.log("Slow");
}

// Output: "Normal"
// If-else Statement
// In JavaScript, an 'if-else' statement is a conditional statement that allows us to execute one block of code if a specified condition evaluates to true, and another block of code if the condition evaluates to false.

// Syntax for if-else statements

// index.js

if (condition) {
    // Code block to be executed if condition is true
} else {
    // Code block to be executed if condition is false
}
// Examples of if-else statements

// index.js

let myAge = 15;

if(myAge >= 18){
    console.log("I can Drive");
}else{
    console.log("Cannot Drive");
}

// Output : "Cannot Drive"
// If-else-if Statement
// An if-else-if statement is a conditional statement that allows us to test multiple conditions and execute different blocks of code based on the outcome of those conditions. It is an extension of the if-else statement and provides additional flexibility for handling multiple scenarios.

// Syntax for if-else-if statements

// index.js

if (condition1) {
    // Code block to be executed if condition1 is true
} else if (condition2) {
    // Code block to be executed if condition2 is true
} else {
    // Code block to be executed if all conditions are false
}
// Examples of if-else-if statements

// index.js

let weight = 65;

if (weight > 70) {
    console.log("You are Overweight");
} else if (weight > 50 && weight <= 70) {
    console.log("You are Fit");
} else {
    console.log("You are Underweight");
}

// Output : "You are Fit"