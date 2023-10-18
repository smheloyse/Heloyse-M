function testeJs2 (){ 
    document.getElementById('teste3').innerHTML= "teste 3"
}

<<<<<<< HEAD
function calcularDoisNumeros(num1, num2, operacao){
    let resposta
/* if(operacao === "*"){
    resposta = multiplicar(num1, num2)
}else if(operacao === "/"){
    resposta = dividir(num1, num2)
}else if(operacao === "+"){
    resposta = dividir(num1, num2)
}else if(operacao === "-"){
    resposta = subtrair (num1, num2)
} */


switch(operacao){
    case "*": resposta = multiplicar(num1, num2)
    break;
    case "/": resposta = dividir(num1, num2)
    break;
    case "+": resposta = somar(num1, num2)
    break;
    case "-": resposta = subtrair (num1, num2)
}

document.getElementById("resultado").innerHTML = resposta;
}




function multiplicar(num1, num2){ 
    return num1 * num2
}

function dividir(num1, num2){
    return num1 / num2
}

function subtrair(num1, num2){
    return num1 - num2
}

function somar(num1, num2){
    return num1 + num2
}
=======
function calcularDoisNumeros (num1, num2 operacao){
    const resposta = multiplicar(num1, num2)
    document.getElementById("resultado").innerHTML = resposta;
}

function multiplicar(num1, num2){ 
    return num1 * num2
}
>>>>>>> a4778f1b604b37f66007ce0032c93a250c37e0d8
