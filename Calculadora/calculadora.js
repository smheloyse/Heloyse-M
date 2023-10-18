function calcularDoisnumeros(operacao){
    let num1 = Number (document.getElementById('num1').value)
    let num2 = Number (document.getElementById('num2').value)
    let resposta

    switch(operacao){
        case "*": resposta = num1 * num2
        break;
        case "/": resposta = num1 / num2
        break;
        case "+": resposta = num1 + num2
        break;
        case "-": resposta = num1 - num2
    }
    
    document.getElementById("resultado").innerHTML = resposta;
}

function calcularTabuada(numero)
tabuada completa ="";
for (let num = 0; num <=10; num++) {
    text += tabuada [num] + "</br>";
    document.getElementById("total tabuada").innerHTML = text;
}

