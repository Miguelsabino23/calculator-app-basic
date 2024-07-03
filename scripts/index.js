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
        calculator.addEventListener("click", (event) => {
            if (result.innerText.startsWith("0")) {
                result.innerText = event.target.innerText;
                return;
            }
            result.innerHTML += event.target.innerText;
        });
    });
}

function makeOperations(event) {
    switch (event.target.innerText) {
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
            result.innerText = 0;
            calculation.innerText = 0;
            break;
        case ".":
            console.log("Realizar operação decimal");
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
