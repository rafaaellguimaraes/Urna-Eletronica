//CONTROLE DA TELA

//Armazena em seuVotoPara oque ta no span da classe d-1-1
let seuVotoPara = document.querySelector('.d-1-1 span')
//Armazena em cargo oque ta no span da classe d-1-2
let cargo = document.querySelector('.d-1-2 span')
//Armazena em descricao oque ta na classe d-1-4
let descricao = document.querySelector('.d-1-4')
//Armazena em aviso oque esta na classe divisão 2
let aviso = document.querySelector('.divisao-2')
//Controla os elementos que estão na lateral, ou seja, tudo que esta dentro da classe divisao-1-right
let lateral = document.querySelector('.divisao-1-right')
//Controla os numeros da tela
let numeros = document.querySelector('.d-1-3')

//Variaveis de ambiente
let etapaAtual = 0
let numero = ''

//Função para setar o inicio da nossa etapa
function comecarEtapa(){
    //Aqui a variavel etapa vai receber a primeira etapa de etapas
    let etapa = etapas[etapaAtual]
    let numeroHtml = ''

    //Aqui eu vou percorrer quantos numeros tem o candidato que vem do arquivo etapas.js e adiciono um quadradinho para cada vez que ele incrementar
    for(let i=0; i<etapa.numeros; i++){
        numeroHtml += '<div class="numero"></div>'
    }

    seuVotoPara.style.display= 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
}

//Função que preenche os quadradinhos com os numeros
function atualizaInterface(){
    
}

//CONTROLE DOS TECLADOS (BOTOES)
function clicou(n){
    alert("Clicou em "+n)
}

function branco(){
    alert("Clicou em BRANCO")
}

function corrige(){
    alert("Clicou em CORRIGE")
}
function confirma(){
    alert("Clicou em CONFIRMA")
}

comecarEtapa()