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
        alert("Nada de trapaça!! Tente novamente.");
        return;
    }

    // Randomly select the computer's choice
    const choices = Object.keys(gameRules);
    var computadorEscolha = choices[Math.floor(Math.random() * choices.length)];
    
    // Determine the outcome
    if (jogadorEscolha === computadorEscolha) {
        alert("Empate do Spock! " + jogadorEscolha + "\nVamos de novo? Você começa!");
    } else if (gameRules[jogadorEscolha][computadorEscolha]) {
        alert("Bazinga!! Você venceu! " + jogadorEscolha + " vence " + computadorEscolha + "\nVamos de novo?");
    } else {
        alert("Você perdeu! " + computadorEscolha + " vence " + jogadorEscolha + "\nVamos de novo?");
    }
}