//elementos que vão receber os valores
const calculation = document.querySelector(".display__history");
const result = document.querySelector(".display__main");
const actionResult = document.querySelector(".action__result");

//botao que apaga o display
const actionClear = document.querySelector(".action__clear-display");

//capturando numeros e operadores
const calculatorNumber = document.querySelectorAll(".calculator__number");
const calculatorSinals = document.querySelectorAll(".calculator__sinals");
const calculatorOperator = document.querySelectorAll(".calculator__operator");
const calculatorSecOperator = document.querySelectorAll(
    ".calculator__sec-operator"
);
const calculatorEqual = document.querySelector(".calculator__equal");

//capturando elementos que vão receber elementos
const actionButtons = document.querySelector(".action__buttons")

const mainOperators = [
    ...calculatorSinals,
    ...calculatorOperator,
    ...calculatorSecOperator,
    calculatorEqual,
];

const operators = ["+", "-", "X", "/", "%"];

//função que percorre os elementos de click da calculadora
function cycleThroughElements(elements) {
    elements.forEach((calculator) => {
        calculator.addEventListener("click", makeOperations);
    });
}

actionClear.addEventListener("click", () => {
    if (result.innerText.length === 1) {
        result.innerText = "0";
        return;
    }
    const lastChar = result.innerText.slice(-1);
    result.innerText = result.innerText.replace(lastChar, "");
});

//Função que verifica se contem um operador, se já conter um operador não será possível colocar outro operador
function checkOneOperator(event) {
    const hasOperator = operators.some(op => result.innerText.includes(op));
    if (operators.includes(event) && hasOperator) {
        return;
    } 
    if (result.innerText.startsWith("0")) return
    result.innerText += event;
    calculation.innerText += event
}

//Função que contem condições para tratar o ponto.
function checkContainsDot(event) {
    const lastChar = result.innerText.slice(-1);
    const captureNumbers = result.innerText.split(/[\+\-\X\/\%]/);
    const num1 = captureNumbers[0]
    const num2 = captureNumbers[1]

    
    if (num1.includes(".") && num2.includes(".")) return;
    if (operators.includes(lastChar)) return;

    result.innerText += event;
    calculation.innerText += event

    if (result.innerText.startsWith("0") && !result.innerText.includes(".")) {
        result.innerText = event;
    }
}

//Função que cria o elemento que recebe o resultado.
function createActionResult () {
    const div = document.createElement("div")
    div.classList = "action__result"
    actionButtons.insertBefore(div, actionClear)
    div.innerText = result.innerText
}

function performOperator(event) {
    const captureNumbers = result.innerText.split(/[\+\-\X\/\%]/);
    const number1 = Number(captureNumbers[0]);
    const number2 = Number(captureNumbers[1]);
    if (event.includes("+")) {
        result.innerText = number1 + number2;
    }
    if (event.includes("-")) {
        result.innerText = number1 - number2;
    }
    if (event.includes("/")) {
        result.innerText = number1 / number2;
    }
    if (event.includes("X")) {
        result.innerText = number1 * number2;
    }
    if (event.includes("%")) {
        result.innerText = (number1 / 100) * number2;
    }
}

function makeOperations(event) {
    let eventTarget = event.target.innerText;
    switch (event.target.innerText) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            if (
                result.innerText.startsWith("0") &&
                !result.innerText.includes(".")
            ) {
                result.innerText = eventTarget;
                calculation.innerText = eventTarget
                return;
            }
            result.innerText += eventTarget;
            calculation.innerText += eventTarget
            break;
        case "=":
            performOperator(result.innerText);
            if (calculation.innerText.startsWith("0")) {
                return (calculation.innerText = result.innerText);
            }
            calculation.innerText += eventTarget
            calculation.innerText += " " + result.innerText;
            if(actionButtons.firstElementChild.classList.contains("action__result")) {
                actionButtons.firstElementChild.remove()
            }
            createActionResult()
            break;
        case "+":
        case "-":
        case "X":
        case "/":
        case "%":
            checkOneOperator(eventTarget);
            break;
        case "+/-":
            console.log("Realizar inversão de sinal");
            break;
        case "()":
            console.log("Realizar precedência");
            break;
        case "C":
            result.innerText = "0";
            calculation.innerText = "0";
            break;
        case ".":
            checkContainsDot(eventTarget);
            break;
        default:
            console.log("Evento não configurado");
            break;
    }
}

function cycleThroughOperators(elements) {
    elements.forEach((calculator) => {
        calculator.addEventListener("click", makeOperations);
    });
}

cycleThroughElements(calculatorNumber);
cycleThroughElements(calculatorSinals);
cycleThroughElements(calculatorOperator);
cycleThroughOperators(mainOperators);
