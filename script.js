let firstDigit = "";
let secondDigit= "";
let operator= "";
let display = document.querySelector(".display");

let digitButtons = document.querySelectorAll("button");
digitButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let buttonClass = button.className;
        let buttonId = button.id;

        if (buttonClass === "digit") {
            storeDigit(button.id);
        } else if (buttonClass === "operator" && buttonId !== "equal") {
            storeOperator(button.id);
        } else if (buttonId === "equal") {
            operate();
        } else if (buttonId === "c") {
            display.innerText = display.innerText.slice(0, -1);
            if (secondDigit) {
                secondDigit = secondDigit.slice(0, -1)
            } else if (operator) {
                operator = "";
            } else if (firstDigit) {
                firstDigit = firstDigit.slice(0, -1)
            }
        } else if (buttonId === "ac") {
            display.innerText = "";
            // firstDigit = result.toString();
            firstDigit = secondDigit = operator = "";
        }
        console.log(button.className);
    });
});


function operate() {
    if (firstDigit && secondDigit && operator) {
        let result = 0;
        switch (operator) {
            case "+":
                result = parseFloat(firstDigit) + parseFloat(secondDigit);
                if (result % 1 !== 0) {
                    result = result.toFixed(2);
                }
                display.innerText = result;
                firstDigit = result.toString();
                secondDigit = operator = "";
                return result;
            case "-":
                result = parseFloat(firstDigit) - parseFloat(secondDigit);
                if (result % 1 !== 0) {
                    result = result.toFixed(2);
                }
                display.innerText = result;
                firstDigit = result.toString();
                secondDigit = operator = "";
                return result;
            case "*":
                result = parseFloat(firstDigit) * parseFloat(secondDigit);
                if (result % 1 !== 0) {
                    result = result.toFixed(2);
                }
                display.innerText = result;
                firstDigit = result.toString();
                secondDigit = operator = "";
                return result;
            case "/":
                result = parseFloat(firstDigit) / parseFloat(secondDigit);
                if (result % 1 !== 0) {
                    result = result.toFixed(2);
                }
                display.innerText = result;
                firstDigit = result.toString();
                secondDigit = operator = "";
                return result;
            case "%":
                result = parseFloat(firstDigit) % parseFloat(secondDigit);
                if (result % 1 !== 0) {
                    result = result.toFixed(2);
                }
                display.innerText = result;
                firstDigit = result.toString();
                secondDigit = operator = "";
                return result;
            default:
                alert("Operator error");
        }
    }
}

function populateDisplay() {}

function storeDigit(digit) {
    display.innerText += digit;
    if (!firstDigit) {
        firstDigit += digit;
    } else if (!operator) {
        firstDigit += digit;
    } else {
        secondDigit += digit;
    }
}

function storeOperator(operatorId) {
    if (secondDigit) {
        firstDigit = operate();
        display.innerText = firstDigit;
        operator = operatorId;
        display.innerText += operatorId;
    } else if (firstDigit) {
        operator = operatorId;
        display.innerText += operatorId;
    }
}

