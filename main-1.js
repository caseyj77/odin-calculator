//add content below
// Select all buttons and define display
const buttons = document.querySelectorAll(".button");
const display = document.getElementById("display");

// Event listeners for all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        if (isNaN(parseFloat(buttonText)) && buttonText !== "=") {
            performCalculation(buttonText);
        } else {
            display.textContent += buttonText; // Append number or "="
        }
    });
});

// Clear display and reset calculation on AC button press
document.getElementById("AC").addEventListener("click", () => {
    display.textContent = "";
    calculationArray = [];
});

// Define calculation logic
let calculationArray = [];

function performCalculation(operand) {
    const currentNumber = parseFloat(display.textContent);
    calculationArray.push(currentNumber);
    calculationArray.push(operand);

    if (calculationArray.length >= 3) {
        const result = calculateResult();
        display.textContent = result;
        calculationArray = [result];
    } else {
        display.textContent = ""; // Ready for next number
    }
}

// Calculate result based on stored numbers and operand
function calculateResult() {
    const [num1, operand, num2] = calculationArray;
    switch (operand) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return "Error"; // Handle unknown operand
    }
}

// Convert current display value to percentage
document.getElementById("%").addEventListener("click", () => {
    let currentValue = parseFloat(display.textContent) / 100;
    display.textContent = currentValue;
});

// Toggle positive/negative
document.getElementById("+/-").addEventListener("click", () => {
    let currentValue = -parseFloat(display.textContent);
    display.textContent = currentValue;
});
