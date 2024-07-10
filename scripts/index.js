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

const operators = ["+", "-", "X", "/", "%"];

//função que percorre os elementos de click da calculadora
function cycleThroughElements(elements) {
    elements.forEach((calculator) => {
        calculator.addEventListener("click", makeOperations);
    });
}

//Função que verifica se o ultimo caracter é um operador, se for ele não deixa você adicionar um operador ao lado.
function checkLastCharacter(event) {
    const lastChar = result.innerText.slice(-1);
    if (operators.includes(lastChar)) return;
    result.innerText += event;
}

function checkContainsDot(event) {
    const lastChar = result.innerText.slice(-1);
    if (result.innerText.includes(".")) return;
    if (operators.includes(lastChar)) return;

    result.innerText += event;

    if (result.innerText.startsWith("0") && !result.innerText.includes(".")) {
        result.innerText = event;
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
                return;
            }
            result.innerText += eventTarget;
            break;
        case "=":
            let results = result.innerText.split(/[\+\-\X\/\%]/);
            console.log(results);
            break;
        case "+":
        case "-":
        case "X":
        case "/":
        case "%":
            checkLastCharacter(eventTarget);
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
            // const partes = result.innerText.split("");
            // if (result.innerText.includes(".")) return;
            // result.innerText += eventTarget;
            // if (
            //     result.innerText.startsWith("0") &&
            //     !result.innerText.includes(".")
            // ) {
            //     result.innerText = eventTarget;
            // }
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
