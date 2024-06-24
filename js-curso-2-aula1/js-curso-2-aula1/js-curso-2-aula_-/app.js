let numberOfTries = 1;
let randomNumber = Number;

function textChange(tag, text){
    let textChanged = document.querySelector(tag);
    textChanged.innerHTML = text;
}
function genRandomNumber(){
    return randomNumber = parseInt(Math.random() * 10 + 1);
}
function verificarChute(){
    let chute = document.querySelector('input').value;
    let tryVerb = numberOfTries > 1 ? 'tentativas' : 'tentativa';


    let sucessMessage = `Você acertou com ${numberOfTries} ${tryVerb}!`;

    if(chute == randomNumber){
     textChange('h1', sucessMessage);
     textChange('p', 'Muito bem, como você conseguiu?');
     document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>randomNumber){
        textChange('h1', 'Você errou..');
        textChange('p', 'Infelizmente você errou, o número é menor');
         }else{
            
        textChange('h1', 'Você errou..');
        textChange('p', 'Infelizmente você errou, o número é maior');
         }
         numberOfTries++;
         limparCampo();
    }
}
function resetGame(){
    numberOfTries = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true)
    limparCampo();
    genRandomNumber();
    textChange('h1', 'Jogo reiniciado.');
    textChange('p', 'Chute um número para iniciar!')
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

textChange('h1', 'Jogo do número secreto!');
textChange('p', 'Digite um número de 1 a 10.');






randomNumber = genRandomNumber();