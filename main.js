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

// AC Button to clear the display
const acButton = document.getElementById("AC");

acButton.addEventListener("click", function(event) {
    const display = document.getElementById("display");
        display.innerHTML = "";
});

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

