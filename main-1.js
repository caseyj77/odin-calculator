// Array to store operands and operators
let expressionArray = [];

// Function to update the display with the current expression
function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = expressionArray.join('');
}

// Function to perform calculation
function performCalculation() {
    const result = evaluateExpression(expressionArray);
    const display = document.getElementById("display");
    display.textContent = result;
    expressionArray = [result]; // Update the expression array with the result
}

// Function to evaluate the expression array and return the result
function evaluateExpression(expressionArray) {
    // Convert the array elements to a string
    const expressionString = expressionArray.join("");
    // Use eval() to evaluate the expression (This is just an example, consider safer alternatives)
    return eval(expressionString);
}

// Select all buttons
const buttons = document.querySelectorAll(".button");

// Iterate over each button and attach a click event listener
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        // Get the text content of the clicked button
        const buttonText = button.textContent;

        // Check if the clicked button is a number, decimal point, or operator
        if (!isNaN(parseFloat(buttonText)) || buttonText === '.') {
            // Update the display
            const display = document.getElementById("display");
            display.textContent += buttonText;
        } else if (expressionArray.length >= 2 && !isNaN(parseFloat(expressionArray[expressionArray.length - 1]))) {
            // If an operator is pressed after the second operand, perform calculation
            performCalculation();
            // Push the result onto the expression array
            expressionArray.push(buttonText);
        } else {
            // Push the operand/operator to the expression array
            expressionArray.push(buttonText);
        }
    });
});

// AC Button to clear the display and reset the expression array
const acButton = document.getElementById("AC");

acButton.addEventListener("click", function(event) {
    const display = document.getElementById("display");
    display.textContent = "";
    expressionArray = []; // Reset the expression array
});

// Step 1: Select the Percentage Button
const percentageButton = document.getElementById("%");

// Step 2: Attach an Event Listener
percentageButton.addEventListener("click", function() {
    // Step 3: Define the Event Handler Function
    // Step 4: Get the Current Display Value
    const display = document.getElementById("display");
    let currentValue = parseFloat(display.textContent); // Convert the display value to a number

    // Step 5: Calculate the Percentage
    currentValue /= 100;

    // Step 6: Update the Display
    display.textContent = currentValue;

    // Push the result onto the expression array
    expressionArray = [currentValue.toString()];
});

// Positive/Negative button. Reverse the sign on the display number
const posnegButton = document.getElementById("+/-");

posnegButton.addEventListener("click", function(){
    const display = document.getElementById("display");
    let currentValue = parseFloat(display.textContent);
    currentValue *= -1;

    // Update the display
    display.textContent = currentValue;

    // Push the result onto the expression array
    expressionArray = [currentValue.toString()];
});
