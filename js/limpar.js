'use strict'

const botaoEnviar = document.getElementById('enviar')

function limparInput(){
    const input1 = document.getElementById('input1')
    input1.value = ""

    const input2 = document.getElementById('input2')
    input2.value = ""

    const input3 = document.getElementById('problema')
    input3.value = ""

}

botaoEnviar.addEventListener('click', limparInput)