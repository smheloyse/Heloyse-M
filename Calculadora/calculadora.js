function calcularDoisnumeros(operacao) {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let resposta

    switch (operacao) {
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

function calcularTabuada(numero) {
    tabuadaCompleta = "";
    for (let num = 0; num <= 10; num++) {
        tabuadaCompleta += numero + " * " + num + " = " + numero * num + "</br"
    }
    document.getElementById("tabuada").innerHTML = text;
}


const listAlunos = ["Bianca", "Luana", "Milena", "Lucas", "Heloyse"];
    
let lista = ""

function mostrarLista(){
    let index = 0

    while(index<listAlunos.length) {
    lista += `${listAlunos[index]} <br>`
    // sintaxe: `olá ${variavel}`--
        index++;
  }
  document.getElementById("lista").innerHTML = lista;
}