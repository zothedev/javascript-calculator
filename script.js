// todo:
// - 
// - clean up repetitive code using funcs

let add = ((a, b) => a + b);
let subtract = ((a, b) => a - b);
let multiply = ((a, b) => a * b);
let divide = ((a, b) => a / b);

let num1 = "";
let operator = "";
let num2 = "";

function operate(n1, op, n2) {
    if (!n1) {
        return n2;
    }


    switch (op) {
        case "+":
            op = "";
            return add(+n1, +n2).toString();
        case "-":
            op = "";
            return subtract(+n1, +n2);
        case "*":
            op = "";
            return multiply(+n1, +n2);
        case "/":
            op = "";
            return divide(+n1, +n2);
    }
}

let calcContainer = document.querySelector(".calculator-container");
let display = calcContainer.querySelector(".display");

calcContainer.addEventListener("click", (e) => {
    let target = e.target;
    

    switch (target.id) {
        case 'clear':
            num1 = ""; 
            operator = ""; 
            num2 = "";
            display.textContent = "";
            break;
        // case 'backspace':
        //     display.textContent = display.textContent.slice(0, -1);
        //     break;
        case '9':
            num2 += "9";
            display.textContent = num1 + operator + num2;
            break;
        case '8': ;
            num2 += "8";
            display.textContent = num1 + operator + num2;
            break;
        case '7':
            num2 += "7";
            display.textContent = num1 + operator + num2;
            break;
        case '6':
            num2 += "6";
            display.textContent = num1 + operator + num2;
            break;
        case '5':
            num2 += "5";
            display.textContent = num1 + operator + num2;
            break;
        case '4':
            num2 += "4";
            display.textContent = num1 + operator + num2;
            break;
        case '3':
            num2 += "3";
            display.textContent = num1 + operator + num2;
            break;
        case '2':
            num2 += "2";
            display.textContent = num1 + operator + num2;
            break;
        case '1':
            num2 += "1";
            display.textContent = num1 + operator + num2;
            break;
        // case '.':
        //     display.textContent += "."
        //     break;
        case '0':
            num2 += "0";
            display.textContent = num1 + operator + num2;
            break;
        
        
        case 'add':
            if (!num2) {
                if (operator) {
                    operator = "+"
                    display.textContent = num1 + operator + num2;
                }
                break;
            }
            operator = "+";
            num1 = operate(num1, operator, num2);
            num2 = "";
            display.textContent = num1 + operator + num2;
            break;
        case 'subtract':
            if (!num2) {
                break;
            }
            operator = "-";
            num1 = operate(num1, operator, num2);
            num2 = "";
            display.textContent = num1 + operator + num2;
            break;
        case 'multiply':
            if (!num2) {
                break;
            }
            operator = "*";
            num1 = operate(num1, operator, num2);
            num2 = "";
            display.textContent = num1 + operator + num2;
            break;
        case 'divide':
            if (!num2) {
                break;
            }
            operator = "/";
            num1 = operate(num1, operator, num2);
            num2 = "";
            display.textContent = num1 + operator + num2;
            break;
        case 'equals':
            // make sure two operands are present
            if (!operator || !num2) {
                break;
            }
            num1 = operate(num1, operator, num2);
            num2 = num1;
            num1 = ""
            operator = "";
            display.textContent = num1 + operator + num2;
            break;

        
    }
});