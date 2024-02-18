let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = verificarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;     
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1', 'Jogos Vorazes');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10:');

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto ){
            exibirTextoNaTela('p', 'o número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o número secreto é maior');
        }
        tentativas++
        limparCampo()
    }
}  

function verificarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return verificarNumeroSecreto;
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; 
}

function reiniciarJogo() {
    numeroSecreto = verificarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogos Vorazes');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10:'); 
}

