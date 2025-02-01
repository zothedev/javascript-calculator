let add = ((a,b) => a + b);
let subtract = ((a,b) => a - b);
let multiply = ((a,b) => a * b);
let divide = ((a,b) => a / b);

let operand1;
let operator;
let operator2;

function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}