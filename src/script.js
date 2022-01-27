import { Calculadora } from "./Calculadora.js";

const calc = new Calculadora;

const calcInputs = document.getElementById('calc');
const display = document.getElementById('p-display');
const clear = document.getElementById('clear');

calcInputs.addEventListener('click', events);
clear.addEventListener('click', clearFunc);

let dot = true;

function events(event) {
    const _event = event.srcElement;
    switch (_event.className) {
        case "number":
            operands(_event.innerHTML);
            break;
        case "operator":
            setarOperator(_event.innerHTML);
            break;
        case "result":
            result();
            break;
        case "dot":
            dotFunc(_event.innerHTML);
            break;
    }
}

function operands(input) {
    if (calc.operation) {
        calc.setOperand2(input);
        display.innerHTML += input;
    } else {
        calc.setOperand1(input);
        display.innerHTML += input;
    }
}

function dotFunc(input) {
    if (dot) {
        dot = false;
        operands(input);
    }
}

function setarOperator(inner) {
    if (calc.operation) {
        const newDisplay = display.innerHTML.split('', display.innerHTML.length - 1).join('');
        display.innerHTML = newDisplay + inner;
    }
    else display.innerHTML += inner;

    calc.setOperation(inner);
    dot = true;
}

function result() {
    display.innerHTML = calc.getResult();
    dot = true;
}

function clearFunc() {
    calc.clearCalculator();
    display.innerHTML = "";
    dot = true;
}

const displayWidth = document.getElementById();