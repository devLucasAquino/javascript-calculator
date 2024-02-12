var resultString = '';
var textShow = document.querySelector('#result-text');

function putZero(){
    resultString += '0';
    textShow.innerHTML = resultString;
}

function putOne(){
    resultString += '1';
    textShow.innerHTML = resultString;
}

function putTwo(){
    resultString += '2';
    textShow.innerHTML = resultString;
}

function putTree(){
    resultString += '3';
    textShow.innerHTML = resultString;
}

function putFour(){
    resultString += '4';
    textShow.innerHTML = resultString;
}

function putFive(){ 
    resultString += '5';
    textShow.innerHTML = resultString;
}

function putSix(){
    resultString += '6';
    textShow.innerHTML = resultString;
}

function putSeven(){
    resultString += '7';
    textShow.innerHTML = resultString;
}

function putEight(){
    resultString += '8';
    textShow.innerHTML = resultString;
}

function putNine(){
    resultString += '9';
    textShow.innerHTML = resultString;
}

function toDivide(){
    resultString += '/';
    textShow.innerHTML = resultString;
}

function multiply(){
    resultString += '*';
    textShow.innerHTML = resultString;
}

function subtract(){
    resultString += '-';
    textShow.innerHTML = resultString;
}

function sum(){
    resultString += '+';
    textShow.innerHTML = resultString;
}

function putDecimal(){
    resultString += '.';
    textShow.innerHTML = resultString;
}

function clear(){
    resultString = '';
    textShow.value = resultString;
}


function Finally(){
    try {
        var resultNumber = eval(resultString);
        textShow.innerText = resultNumber;
    } catch (e) {
        alert('Erro ao calcular a expressão: ' + e.message);
      }
   }
    

