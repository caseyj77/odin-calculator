// Select all buttons
const buttons = document.querySelectorAll(".button");

// Iterate over each button and attach a click event listener
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        // Get the text content of the clicked button
        const buttonText = button.textContent;

        // Update the inner HTML of the display with the button text
        const display = document.getElementById("display");
        display.innerHTML += buttonText;
    });
});

/* //AC Button to clear the display
const acButton = document.getElementById("AC");

acButton.addEventListener("click", function(event) {
    const display = document.getElementById("display");
        display.innerHTML = "";
});
*/

// Select all operands
const operand = document.querySelectorAll(".operand");


// Select all operands
const operands = document.querySelectorAll(".operand");

// Iterate over each operand button and attach a click event listener
operands.forEach(operand => {
    operand.addEventListener("click", function(event) {
        // Get the text content of the clicked button
        const buttonText = operand.textContent;

        // Update the inner HTML of the display with the button text
        const display = document.getElementById("display");
        display.innerHTML = buttonText;
    });
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
});

//postivie/negative button. reverese the sign on the display number
const posnegButton = document.getElementById("+/-");

posnegButton.addEventListener("click", function(){
    const display = document.getElementById("display");
    let currentValue = parseFloat(display.textContent);
        currentValue *= -1;
        display.textContent = currentValue;

});



// Define an array to store numbers and operands
let calculationArray = [];

// Select all buttons
const buttons = document.querySelectorAll(".button");

// Iterate over each button and attach a click event listener
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        const buttonText = button.textContent;
        const display = document.getElementById("display");
        
        // Check if the clicked button is an operand or a number
        if (isNaN(parseFloat(buttonText))) {
            // If it's an operand, perform the calculation
            performCalculation(buttonText);
        } else {
            // If it's a number, append it to the display
            display.textContent += buttonText;
        }
    });
});

// Function to perform calculation
function performCalculation(operand) {
    const display = document.getElementById("display");
    const currentNumber = parseFloat(display.textContent);
    
    // Store the current number in the array
    calculationArray.push(currentNumber);

    // Store the operand in the array
    calculationArray.push(operand);

    // Display the clicked operand on the screen
    display.textContent = operand;
}

// AC Button to clear the display and reset the calculation array
const acButton = document.getElementById("AC");

acButton.addEventListener("click", function(event) {
    const display = document.getElementById("display");
    display.innerHTML = "";
    calculationArray = []; // Reset the calculation array
});


