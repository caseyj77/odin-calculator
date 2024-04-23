document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');  // Get the display element

    // Select all number buttons and operand buttons
    const numButtons = document.querySelectorAll('.button > button');
    const operatorButtons = document.querySelectorAll('.button.operand > button');

    // Initialize calculator state
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let resetScreen = false;

    // Update display with current input
    const updateDisplay = () => {
        display.textContent = currentInput;
    };

    // Handle number button click
    const handleNumber = (number) => {
        if (resetScreen || currentInput === '0') {
            currentInput = number;
            resetScreen = false;
        } else {
            currentInput += number;
        }
        updateDisplay();
    };

    // Handle operator button click
    const handleOperator = (op) => {
        if (operation !== null) calculate();
        previousInput = currentInput;
        operation = op;
        resetScreen = true;
    };

    // Perform calculation
    const calculate = () => {
        let calcResult;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case '+':
                calcResult = prev + current;
                break;
            case '-':
                calcResult = prev - current;
                break;
            case '*':
                calcResult = prev * current;
                break;
            case '/':
                if (current === 0) {
                    display.textContent = "Error";
                    return;
                }
                calcResult = prev / current;
                break;
            default:
                return;
        }
        currentInput = calcResult.toString();
        operation = null;
        updateDisplay();
    };

    // Add event listeners to number buttons
    numButtons.forEach(button => {
        button.addEventListener('click', () => handleNumber(button.textContent));
    });

    // Add event listeners to operator buttons
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => handleOperator(button.textContent));
    });

    // Clear all inputs
    document.getElementById('AC').querySelector('button').addEventListener('click', () => {
        currentInput = '0';
        previousInput = '';
        operation = null;
        resetScreen = true;
        updateDisplay();
    });

    // Calculate result when equals is clicked
    document.getElementById('=').querySelector('button').addEventListener('click', calculate);

    // Toggle sign of the current input
    document.getElementById('+/-').querySelector('button').addEventListener('click', () => {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    });

    // Convert current input to a percentage
    document.getElementById('%').querySelector('button').addEventListener('click', () => {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    });

    // Append decimal point to current input
    document.getElementById('.').querySelector('button').addEventListener('click', () => {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay();
        }
    });

    updateDisplay(); // Initial display update
});
