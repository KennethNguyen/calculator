// Priority TODO: Consecutive operator calls without user hitting 'equal'
// Secondary TODO: Negative inputs

const add = (firstNumber, secondNumber) => firstNumber + secondNumber;

const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;

const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

const operate = (operator, firstNumber, secondNumber) => {
        return operator == "+" ? (add(firstNumber, secondNumber))
         : operator == "−" ? (subtract(firstNumber, secondNumber))
         : operator == "×" ? (multiply(firstNumber, secondNumber))
         : operator == "÷" ? (divide(firstNumber, secondNumber))
         : '';
}

var currentNumber = undefined;
var total = undefined;
var currentOperator = undefined;
var previouslyOperator = false; // checks if an operator has been used before 'clearing' the calculator; used for consecutive calls
var executeOperator = false; // will be set to true if user clicks on an operator button

const display = document.querySelector('#display');

const updateDisplay = input => {
        // if an operator button is clicked, then the calculator will display the new current input 
        if (executeOperator) {
                display.innerHTML = '';
                executeOperator = false;
        }
        // the input will be appended to the current display's string number and the current number will be kept track of
        display.innerHTML += input;
        currentNumber = parseInt(display.innerHTML);
}   

// add event to each number button
const number = document.getElementsByClassName('number');
for(let i = 0; i < number.length; i++) {
        number[i].addEventListener('click', function() {
                updateDisplay(number[i].innerHTML);
        })
}

// add event to each operator button
const operator = document.getElementsByClassName('operator');
for(let j = 0; j < operator.length; j++) {
        operator[j].addEventListener('click', function() {
                currentOperator = operator[j].innerHTML;
                // if the total is undefined, this is a concurrent operator so the current total will be as is
                // but if total is undefined, then the total is the current number as it will be the first input
                total = total != undefined ? total : currentNumber;
                currentNumber = 0;
                executeOperator = true; 
        })
}

// clear the calculator back to original state
document.querySelector('#clear').addEventListener('click', function() {
        display.innerHTML = "";
        currentNumber = undefined;
        total = undefined;
        previouslyOperator = false;
        executeOperator = false;
})


document.querySelector('#equal').addEventListener('click', function() {
        let result = operate(currentOperator, total, currentNumber);
        // check if the result is a floating decimal, if it is then round the floating decimal to 2 places
        result = result % 1 == 0 ? result : result.toFixed(2);
        display.innerHTML = result;
        total = parseFloat(result);
        currentNumber = 0;
        executeOperator = false;
}) 