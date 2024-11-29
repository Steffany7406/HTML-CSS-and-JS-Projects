/*const gameRules = {
    tesoura: { papel: true, lagarto: true, Spock: false, pedra: false },
    papel: { pedra: true, Spock: false, tesoura: false, lagarto: false },
    lagarto: { Spock: true, papel: true, pedra: false, tesoura: false },
    Spock: { tesoura: true, pedra: true, papel: false, lagarto: false },
    pedra: { lagarto: true, tesoura: true, papel: false, Spock: false }
  };

function jogo(gameRules){
    var jogo = document.getElementById("play").value;
    var jogo = jogo.gameRules;
    switch(jogo){
        case pedra:
            alert("Bazinga!")
            break;
        case tesoura:
            alert("Raj trapaceou!")
            break;
        case papel:
            alert("Penny trapaceou!")
            break;
        case lagarto:
            alert("Como Leonard venceu?!")
            break;
        case Spock:
            alert("De novo!") 
            break;
        default:
            alert("Não achamos Spock! Tente de novo!")       
    }
}*/

const gameRules = {
    tesoura: { papel: true, lagarto: true, Spock: false, pedra: false },
    papel: { pedra: true, Spock: false, tesoura: false, lagarto: false },
    lagarto: { Spock: true, papel: true, pedra: false, tesoura: false },
    Spock: { tesoura: true, pedra: true, papel: false, lagarto: false },
    pedra: { lagarto: true, tesoura: true, papel: false, Spock: false }
};

function jogo() {
    var jogadorEscolha = document.getElementById("play").value; // Get input value
    // Validate input
    if (!gameRules.hasOwnProperty(jogadorEscolha)) {
        alert("Escolha inválida! Tente novamente.");
        return;
    }

    // Randomly select the computer's choice
    const choices = Object.keys(gameRules);
    var computadorEscolha = choices[Math.floor(Math.random() * choices.length)];
    
    // Determine the outcome
    if (jogadorEscolha === computadorEscolha) {
        alert("Empate! Ambos escolheram " + jogadorEscolha);
    } else if (gameRules[jogadorEscolha][computadorEscolha]) {
        alert("Você venceu! " + jogadorEscolha + " vence " + computadorEscolha);
    } else {
        alert("Você perdeu! " + computadorEscolha + " vence " + jogadorEscolha);
    }
}