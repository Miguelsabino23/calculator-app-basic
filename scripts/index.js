//elementos que vão receber os valores
const calculation = document.querySelector(".display__history");
const result = document.querySelector(".display__main");
const actionResult = document.querySelector(".action__result");

//botao que apaga o display
const actionClear = document.querySelector(".action__clear-display");

//capturando numeros e operadores
const calculatorNumber = document.querySelectorAll(".calculator__number");
const calculatorOperator = document.querySelectorAll(".calculator__operator");
const calculatorSecOperator = document.querySelectorAll(
    ".calculator__sec-operator"
);
const calculatorEqual = document.querySelector(".calculator__equal");

//função que percorre os elementos de click da calculadora
function cycleThroughElements(elements) {
    elements.forEach((calculator) => {
        calculator.addEventListener("click", () => {
            if (
                calculator.innerHTML !== "+/-" ||
                calculator.innerHTML !== "."
            ) {
                calculation.innerHTML += parseInt(calculator.innerHTML);
            }
        });
    });
}

function cycleThroughOperators(operators) {
    operators.forEach((operator) => {
        operator.addEventListener("click", () => {
            calculation.innerHTML += operator.innerHTML;
        });
    });
}

calculatorEqual.addEventListener("click", () => {
    console.log(numbers);
});

cycleThroughElements(calculatorNumber);
cycleThroughOperators(calculatorOperator);
