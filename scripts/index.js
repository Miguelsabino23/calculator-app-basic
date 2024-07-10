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

const mainOperators = [
    ...calculatorSinals,
    ...calculatorOperator,
    ...calculatorSecOperator,
    calculatorEqual,
];

//função que percorre os elementos de click da calculadora
function cycleThroughElements(elements) {
    elements.forEach((calculator) => {
        calculator.addEventListener("click", makeOperations);
    });
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
                return;
            }
            result.innerText += eventTarget;
            break;
        case "=":
            console.log("Realizar operações");
            break;
        case "+":
            console.log("Realizar soma");
            break;
        case "-":
            console.log("Realizar subtração");
            break;
        case "x":
            console.log("Realizar multiplicação");
            break;
        case "/":
            console.log("Realizar divisão");
            break;
        case "%":
            console.log("Realizar porcentagem");
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
            if (result.innerText.includes(".")) return;
            result.innerText += eventTarget;
            if (
                result.innerText.startsWith("0") &&
                !result.innerText.includes(".")
            ) {
                result.innerText = eventTarget;
            }
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
