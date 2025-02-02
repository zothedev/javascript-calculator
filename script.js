let add = ((a, b) => a + b);
let subtract = ((a, b) => a - b);
let multiply = ((a, b) => a * b);
let divide = ((a, b) => a / b);

let ops = ["+", "-", "/", "*"];
let num1;
let operator;
let num2;

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

    switch (target.id) {
        case 'clear':
            display.textContent = ""
            num1, operator, num2 = "";
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
            // if there is already an expression in display (if an operator is present in expression)
            if (Number.isNaN(+(display.textContent))) {
                assignNums(display.textContent);
                display.textContent = operate(num1, operator, num2);
            }
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
            // if there is already an expression in display (if an operator is present in expression)
            if (Number.isNaN(+(display.textContent))) {
                assignNums(display.textContent);
                display.textContent = operate(num1, operator, num2);
            }
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
            // if there is already an expression in display (if an operator is present in expression)
            if (Number.isNaN(+(display.textContent))) {
                assignNums(display.textContent);
                display.textContent = operate(num1, operator, num2);
            }
            display.textContent += "-"
            break;
        case '.':
            display.textContent += "."
            break;
        case '0':
            display.textContent += "0"
            break;
        case 'equals':
            assignNums(display.textContent);
            display.textContent = operate(num1, operator, num2);
            break;
        case 'add':
            // if there is already an expression in display (if an operator is present in expression)
            if (Number.isNaN(+(display.textContent))) {
                assignNums(display.textContent);
                display.textContent = operate(num1, operator, num2);
            }
            display.textContent += "+";
            break;
    }
});

function assignNums(str) {
    let operatorIndex = "";
    let i = 0;

    if (str.indexOf("*") > -1) {
        operatorIndex = str.indexOf("*");
    } else if (str.indexOf("/") > -1) {
        operatorIndex = str.indexOf("/");
    } else if (str.indexOf("+") > -1) {
        operatorIndex = str.indexOf("+");
    } else if (str.indexOf("-") > -1) {
        operatorIndex = str.indexOf("-");
    }
    
    num1 = +(str.slice(0,operatorIndex));
    num2 = +(str.slice(operatorIndex+1));
    operator = str[operatorIndex];
    // console.log(`${num1} ${operation}`)
}
