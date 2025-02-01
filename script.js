let add = ((a, b) => a + b);
let subtract = ((a, b) => a - b);
let multiply = ((a, b) => a * b);
let divide = ((a, b) => a / b);

let operand1;
let operator;
let operand2;

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

let calcContainer = document.querySelector(".calculator-container");
let display = calcContainer.querySelector(".display");

calcContainer.addEventListener("click", (e) => {
    let target = e.target;

    // remove default text
    if (display.textContent == "Calculator") {
        display.textContent = "";
    }

    switch (target.id) {
        case 'clear':
            display.textContent = ""
            operand1, operator, operator2 = "";
            break;
        case 'backspace':
            display.textContent = display.textContent.slice(0, -1);
            break;
        case '9':
            display.textContent += "9"
            break;
        case '8': ;
            display.textContent += "8"
            break;
        case '7':
            display.textContent += "7"
            break;
        case 'divide':
            display.textContent += "/"
            break;
        case '6':
            display.textContent += "6"
            break;
        case '5':
            display.textContent += "5"
            break;
        case '4':
            display.textContent += "4"
            break;
        case 'multiply':
            display.textContent += "*"
            break;
        case '3':
            display.textContent += "3"
            break;
        case '2':
            display.textContent += "2"
            break;
        case '1':
            display.textContent += "1"
            break;
        case 'subtract':
            display.textContent += "-"
            break;
        case '.':
            display.textContent += "."
            break;
        case '0':
            display.textContent += "0"
            break;
        case 'equals':
            populateVars(display.textContent);
            display.textContent = operate(operand1, operator, operand2);
            break;
        case 'add':
            display.textContent += "+"
            break;
    }
});

function populateVars(str) {
    let operandIndex;
    if (str.indexOf("/") > 0) {
        operandIndex = str.indexOf("/");
    } else if (str.indexOf("*") > 0) {
        operandIndex = str.indexOf("*");
    } else if (str.indexOf("+") > 0) {
        operandIndex = str.indexOf("+");
    } else {
        operandIndex = str.indexOf("-");
    }
    // console.log(str);
    operand1 = +(str.slice(0, operandIndex));
    operand2 = +(str.slice(operandIndex+1));
    operator = str.slice(operandIndex,operandIndex+1);
    // console.log(`${operand1} ${operator} ${operand2}`);
}

