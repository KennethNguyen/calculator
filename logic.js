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

const display = document.querySelector('#display')

var number = document.getElementsByClassName('number')

for(let i = 0; i < number.length; i++) {
        number[i].addEventListener('click', () => display.innerHTML += number[i].innerHTML)
}

var operator = document.getElementsByClassName('operator')

document.querySelector('#clear').addEventListener('click', () => display.innerHTML = '0')