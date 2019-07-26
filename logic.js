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
