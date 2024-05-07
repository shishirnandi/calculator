const inDis = document.querySelector(".input");


const divide = document.querySelector(".grid-item-1");

const multi = document.querySelector(".grid-item-2");

const minus = document.querySelector(".grid-item-3");

const seven = document.querySelector(".grid-item-4");

const eight = document.querySelector(".grid-item-5");

const nine = document.querySelector(".grid-item-6");

const four = document.querySelector(".grid-item-7");

const five = document.querySelector(".grid-item-8");

const six = document.querySelector(".grid-item-9");

const one = document.querySelector(".grid-item-10");

const two = document.querySelector(".grid-item-11");

const three = document.querySelector(".grid-item-12");

const equal = document.querySelector(".grid-item-13");

const zero = document.querySelector(".grid-item-14");

const plus = document.querySelector(".grid-item-15");




// 


// Variables to store input values and operation
let firstValue = '';
let secondValue = '';
let currentOperation = null;

// Function to update input values
function updateValue(value) {
    if (currentOperation === null) {
        firstValue += value;
    } else {
        secondValue += value;
    }
    updateDisplay();
}

// Function to update display
function updateDisplay() {
    inDis.textContent = (currentOperation === null) ? firstValue : secondValue;
}

// Function to handle operation button clicks
function handleOperation(operation) {
    if (currentOperation !== null && secondValue !== '') {
        performOperation();
    }
    currentOperation = operation;
}

// Function to perform calculation
function performOperation() {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);
    let result;
    switch (currentOperation) {
        case 'plus':
            result = num1 + num2;
            break;
        case 'minus':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            return;
    }
    firstValue = result.toString();
    secondValue = '';
    currentOperation = null;
    updateDisplay();
}

// Event listeners for number buttons
seven.addEventListener('click', () => updateValue('7'));
eight.addEventListener('click', () => updateValue('8'));

one.addEventListener('click', () => updateValue('1'));

two.addEventListener('click', () => updateValue('2'));

three.addEventListener('click', () => updateValue('3'));

four.addEventListener('click', () => updateValue('4'));

five.addEventListener('click', () => updateValue('5'));

six.addEventListener('click', () => updateValue('6'));

nine.addEventListener('click', () => updateValue('9'));

zero.addEventListener('click', () => updateValue('0'));
// Add event listeners for other number buttons similarly

// Event listeners for operation buttons
plus.addEventListener('click', () => handleOperation('plus'));
minus.addEventListener('click', () => handleOperation('minus'));


divide.addEventListener('click', () => handleOperation('divide'));

multi.addEventListener('click', () => handleOperation('multi'));



// Event listener for equal button
equal.addEventListener('click', () => {
    if (currentOperation !== null && secondValue !== '') {
        performOperation();
    }
});

// Function call to initialize display
updateDisplay();


const clearButton = document.querySelector(".C");


// Function to clear input values
function clearValues() {
    firstValue = '';
    secondValue = '';
    currentOperation = null;
    updateDisplay();
}

// Event listener for clear button
clearButton.addEventListener('click', clearValues);
