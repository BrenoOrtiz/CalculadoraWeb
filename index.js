
var input = document.getElementById('calculo');
var result = document.getElementById('resultado');


function last_number() {
    for (var i = input.textContent.length - 1; i >= 0; i--) {
        if (['%', '/', '*', '-', '+'].includes(input.textContent[i])) {
            return input.textContent.slice(i + 1);
        }
    }
    return input.textContent;
}

function haspoint() {
    var number = last_number();
    for (var i = 0; i < number.length - 1; i++) {
        if (number[i] == '.') {
            return true;
        }
        
    }
    return false;
}

function user_input_digit(element) {
    input.textContent += element.value;
}

function user_input_operator(element) {
    if (!isNaN(input.textContent[input.textContent.length - 1])) {
        input.textContent += element.value
    }
}

function user_input_minus(element) {
    if (!(['%', '/', '*', '-', '+'].includes(input.textContent[input.textContent.length - 1]))) {
        input.textContent += element.value
    }
}

function user_input_point(element) {
    if (!(haspoint()) && !isNaN(input.textContent[input.textContent.length - 1])) {
        input.textContent += element.value;
    }
}

function calcular() {
    try {
        result.textContent = eval(input.textContent);
    }
    catch {
        result.textContent = "Error";
    }
}

function limpar() {
    input.textContent = "";
    result.textContent = "";
}

function apagar_ultimo() {
    input.textContent = input.textContent.slice(0, -1);
}
