function testeJs2 (){ 
    document.getElementById('teste3').innerHTML= "teste 3"
}

function calcularDoisNumeros (num1, num2 operacao){
    const resposta = multiplicar(num1, num2)
    document.getElementById("resultado").innerHTML = resposta;
}

function multiplicar(num1, num2){ 
    return num1 * num2
}
