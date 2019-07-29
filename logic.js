// Script currently only works for single digit inputs
// Priority TODO: Multiple digit inputs, consecutive operator calls without user hitting 'equal'
// Secondary TODO: Negative inputs, decimal

const add = (first_number,second_number) => first_number + second_number;

const subtract = (first_number,second_number) => first_number - second_number;

const multiply = (first_number,second_number) => first_number * second_number;

const divide = (first_number,second_number) => first_number / second_number;

const operate = (operator,first_number,second_number) => {
        return operator == "+" ? (add(first_number,second_number))
         : operator == "−" ? (subtract(first_number,second_number))
         : operator == "×" ? (multiply(first_number,second_number))
         : operator == "÷" ? (divide(first_number,second_number))
         : '';
}


var first_number_input = undefined;
var second_number_input = undefined;
var current_total = undefined;
var current_operator = undefined;
var execute_operator = false; // will be set to true if user clicks on an operator button



const display = document.querySelector('#display');
// parameter input is the value of the number button that user pressed
// user's first number will be input if user has not chosen an operator yet
// otherwise input will be user's second number
function updateDisplay(input) {
        execute_operator == false ? first_number_input = input : second_number_input = input;
        display.innerHTML = input        
        console.log(first_number_input)
        console.log(second_number_input)

}

const number = document.getElementsByClassName('number');
for(let i = 0; i < number.length; i++) {
        number[i].addEventListener('click', function() {
                updateDisplay(number[i].innerHTML);
        })
}

const operator = document.getElementsByClassName('operator');
for(let j = 0; j < operator.length; j++) {
        operator[j].addEventListener('click', function() {
                current_operator = operator[j].innerHTML;
                execute_operator = true; 
        })
}

document.querySelector('#clear').addEventListener('click', function() {
        display.innerHTML = 0;
        first_number_input = undefined;
        second_number_input = undefined;
        current_total = undefined;
        execute_operator = false;
})

// if there are two numbers then the equal button will perform current operator and display outcome
// set operator boolean back to false until user clicks on another operator to perform
// first_number_input is set to current_total in case user wants to use perform more operators using current outcome
// function updateDisplay() still takes care of condition if user wants to use two new numbers
document.querySelector('#equal').addEventListener('click', function() {
        if(first_number_input != undefined && second_number_input != undefined) {
                current_total = operate(current_operator, first_number_input, second_number_input)
                display.innerHTML = current_total;
                execute_operator = false;
                first_number_input = current_total;
        }
}) 