'use strict'

const botao = document.getElementById('botao')

function limpar(container) {
    container.replaceChildren()
}

function sucesso(container){
    

    const div = document.createElement('div')
    div.className = 'pop-up'

    const mensagem = document.createElement("p")
    mensagem.textContent = "Cadastro realizado com sucesso"
    mensagem.className = "pop-up-mensagem"

    const fechar = document.createElement("button")
    fechar.type = 'button'
    fechar.className = "fechar"
    fechar.textContent = "X"
    fechar.onclick = () => {
        div.remove()
    }

    div.append(fechar, mensagem)
    container.append(div)

}

function chamarFormulario() {
    botao.remove()
    const formContainer = document.getElementById('form-container')
    const card = document.createElement('div')
    card.className = 'card-form'
    const mensagem = document.createElement("p")
    mensagem.className = "mensagem-form"
    mensagem.textContent = "Preencha este campo para Receber mais informações"
    const inputEmail = document.createElement('input')
    inputEmail.className = "input-email"
    inputEmail.type = "text"
    inputEmail.placeholder = "Digite o seu Email aqui"
    const botaoConfirmar = document.createElement('button')
    botaoConfirmar.type = 'button'
    botaoConfirmar.textContent = "Confirmar"

    botaoConfirmar.onclick = () => {
        if (inputEmail.value !== "") {
            limpar(formContainer)
            sucesso(formContainer)

        }
        else {
            inputEmail.classList.add('erro')
            alert("por favor preencha o email")
        }
    }
    card.append(mensagem, inputEmail, botaoConfirmar)
    formContainer.append(card)
}

botao.addEventListener('click', chamarFormulario)


const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {

    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
};


const contagemRegressiva = (tempo) => {

    const pararContagem = () => clearInterval(id);

    const contar = () => {

        if (tempo <= 0) {
            atualizar(0);
            pararContagem();
            return;
        }

        atualizar(tempo);
        tempo--;
    };

    const id = setInterval(contar, 1000);
};


const tempoRestante = () => {

    const dataEvento = new Date('2026-10-09 12:00:00');
    const hoje = Date.now();

    return Math.floor((dataEvento - hoje) / 1000);
};


const elementoContador = document.getElementById('dias');

if (elementoContador) {
    contagemRegressiva(tempoRestante());
}
