// todo:
// - disable equals button if two operands are not present (num2 becomes 0 it seems)
// - fix divide by 0 bug
// - 

let add = ((a, b) => a + b);
let subtract = ((a, b) => a - b);
let multiply = ((a, b) => a * b);
let divide = ((a, b) => a / b);

let num1 = "";
let operator = "";
let num2 = "";

function operate(num1, operator, num2) {
    if (!num1) {
        console.log("first operator clicked");
        return num2;
    }


    switch (operator) {
        case "+":
            operator = "";
            return add(+num1, +num2).toString();
        case "-":
            operator = "";
            return subtract(+num1, +num2);
        case "*":
            operator = "";
            return multiply(+num1, +num2);
        case "/":
            operator = "";
            return divide(+num1, +num2);
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
            display.textContent += "0"
            break;
        
        
        case 'add':
            if (!num2) {
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