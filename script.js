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
            return subtract(+n1, +n2).toString();
        case "*":
            op = "";
            return multiply(+n1, +n2).toString();
        case "/":
            op = "";
            return divide(+n1, +n2).toString();
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
        case 'backspace':
            if (num2) {
                num2 = num2.slice(0, -1);
            } else if (operator) {
                operator = "";
            } else {
                num1 = num1.slice(0, -1);
            }
            display.textContent = num1 + operator + num2;
            break;
        case '9':
            displayNumber('9');
            break;
        case '8': ;
            displayNumber('8');
            break;
        case '7':
            displayNumber('7');
            break;
        case '6':
            displayNumber('6');
            break;
        case '5':
            displayNumber('5');
            break;
        case '4':
            displayNumber('4');
            break;
        case '3':
            displayNumber('3');
            break;
        case '2':
            displayNumber('2');
            break;
        case '1':
            displayNumber('1');
            break;
        case 'decimal':
            displayNumber('.');
            break;
        case '0':
            displayNumber('0');
            break;


        case 'add':
            operateAndUpdateDisplay("+");
            break;
        case 'subtract':
            operateAndUpdateDisplay("-");
            break;
        case 'multiply':
            operateAndUpdateDisplay("*");
            break;
        case 'divide':
            operateAndUpdateDisplay("/");
            break;
        case 'equals':
            // make sure two operands are present
            if (!operator || !num2) {
                break;
            }
            if (!isFinite(operate(num1, operator, num2))) {
                alert("Error: Cannot Divide by Zero");
                return
            }
            
            num1 = operate(num1, operator, num2);
            if (!Number.isInteger(+num1)) {
                num1 = Number.parseFloat(num1).toFixed(2);
            }
            num2 = num1;
            num1 = ""
            operator = "";
            
            display.textContent = num1 + operator + num2;
            break;
        default:
            num2 += "";
    }
});


function displayNumber(n) {
    if (n == ".") {
        if (num2.includes(".")) {
            return;
        }
    }
    num2 += n;
    display.textContent = num1 + operator + num2;
    return;
}


function operateAndUpdateDisplay(op) {
    if (!num2) {
        if (operator) {
            operator = op;
            display.textContent = num1 + operator + num2;
            
        }
        return;
    }
    
    if (!isFinite(operate(num1, operator, num2))) {
        alert("Error: Cannot Divide by Zero");
        return;
    }
    num1 = operate(num1, operator, num2);
    num2 = "";
    operator = op;
    
    
    if (!Number.isInteger(+num1)) {
        num1 = Number.parseFloat(num1).toFixed(2);
    }
    display.textContent = num1 + operator + num2;
    return;
}

// function displayTooLong() {
//     if (display.textContent.length+1 > 16) {
//         return true;
//     }
//     return false;
// }

