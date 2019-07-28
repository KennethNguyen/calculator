const add = (first_number,second_number) => first_number + second_number

const subtract = (first_number,second_number) => first_number - second_number

const multiply = (first_number,second_number) => first_number * second_number

const divide = (first_number,second_number) => first_number / second_number

const operate = (operator,first_number,second_number) => {
        return operator === "Add" ? (add(first_number,second_number))
         : operator === "Subtract" ? (subtract(first_number,second_number))
         : operator === "Multiply" ? (multiply(first_number,second_number))
         : operator === "Divide" ? (divide(first_number,second_number))
         : ''
}


var first_number_input = 0
var second_number_input = 0
var current_number_input = ""
var switch_input = true // if true, first_number_input is being manipulated, else second_number_input is being manipulated



var display = document.querySelector('#display')

var number = document.getElementsByClassName('number')

function updateDisplay(input) {
        current_number_input += input
        display.innerHTML = current_number_input
}

for(let i = 0; i < number.length; i++) {
        number[i].addEventListener('click', function() {
                updateDisplay(number[i].innerHTML)
        })
}

document.querySelector('#clear').addEventListener('click', function() {
        display.innerHTML = 0
        first_number_input = 0
        second_number_input = 0
        current_number_input = 0
})

var operator = document.getElementsByClassName('operator')

for(let j = 0; j < operator.length; j++) {
        operator[i].addEventListener('click', function() {
                // 1. get second number
                // 2. execute operator 
                // 3. display results
        })
}
