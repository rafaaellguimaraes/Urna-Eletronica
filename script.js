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
let votoBranco = false

//Função para setar o inicio da nossa etapa
function comecarEtapa(){
    //Aqui a variavel etapa vai receber a primeira etapa de etapas
    let etapa = etapas[etapaAtual]
    let numeroHtml = ''
    numero = ''
    votoBranco = false

    //Aqui eu vou percorrer quantos numeros tem o candidato que vem do arquivo etapas.js e adiciono um quadradinho para cada vez que ele incrementar
    for(let i=0; i<etapa.numeros; i++){
        if(i === 0){
            numeroHtml += '<div class="numero piscar"></div>'
        }else{
            numeroHtml += '<div class="numero"></div>'
        }
    }

    seuVotoPara.style.display= 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
}

//Função que atualiza a interface da urna
function atualizaInterface(){
    let etapa = etapas[etapaAtual]
    //Aqui eu verifico se o numero que foi digitado pertence a algum candidato
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero){
            return true
        }else{
            return false
        }
    })
    
    //Se achou candidato a gente preenche as info na tela
    if(candidato.length > 0){
        candidato = candidato[0]
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`
        //Definir a foto do candidato
        let fotosHtml= ''
        for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
                fotosHtml += `<div class="d-1-image small"><img src="images/${candidato.fotos[i].url}" alt="Bart Image"/>${candidato.fotos[i].legenda}</div>`
            }else {
                fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="Bart Image"/>${candidato.fotos[i].legenda}</div>`
            }
        }
        lateral.innerHTML = fotosHtml
    } else {
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = '<div class="aviso--grande piscar">VOTO NULO</div>'
    }

}

//CONTROLE DOS TECLADOS (BOTOES)
//Função que preenche os quadradinhos com os numeros
function clicou(n){
    //Verifico se existe um numero piscando, se não tiver ele retorna null
    let elNumero = document.querySelector('.numero.piscar')
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`

        //Quando preencher o primeiro numero, eu tenho que tirar o piscar do primeiro quadrado e passar para o proximo
        elNumero.classList.remove('piscar')
        //Acha o proximo elemento e adiciona a classe piscar
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('piscar')
        }else{
            atualizaInterface();
        }
    }
}

function branco(){
        numero = ''
        votoBranco = true
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        numeros.innerHTML = ''
        descricao.innerHTML = '<div class="aviso--grande piscar">VOTO EM BRANCO</div>'
        lateral.innerHTML = ''
}

function corrige(){
    comecarEtapa()
}
function confirma(){
    let etapa = etapas[etapaAtual]
    let votoConfirmado = false

    if(votoBranco === true){
        votoConfirmado = true
    }else if(numero.length === etapa.numeros){
        votoConfirmado = true
    }

    //Passa para a proxima etapa
    if(votoConfirmado){
        etapaAtual ++
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        }else{
            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante piscar">FIM</div>'
        }
    }
}

comecarEtapa()