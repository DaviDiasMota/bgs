'use strict'

const botao = document.getElementById('botao')

const popUp = document.createElement('div')
    popUp.className = 'pop-up'
    
function excluirNotificacao(){
    popUp.replaceChildren()
    popUp.remove()
}

function aceitarNotificacao(){
    const container = document.getElementById('contador')
    popUp.replaceChildren()
    const fechar = document.createElement('button')
    fechar.textContent = 'X'
    fechar.className = 'fechar'
    fechar.onclick = excluirNotificacao
    const mensagem = document.createElement("p")
    mensagem.className = 'pop-up-mensagem'
    mensagem.textContent = 'Notificações ativadas com sucesso'

    popUp.append(fechar, mensagem)
    contador.append(popUp)
}

botao.addEventListener('click', aceitarNotificacao)