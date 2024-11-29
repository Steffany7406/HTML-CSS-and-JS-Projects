document.addEventListener("DOMContentLoaded", function() {
    // Obtenha os elementos do formulário
    const nomeInput = document.getElementById("nome");
    const alturaInput = document.getElementById("altura");
    const pesoInput = document.getElementById("Peso");
    const calcularButton = document.getElementById("calcular");
    const resultadoElement = document.getElementById("resultado");
  
    // Função para calcular o IMC
    function calcularImc() {
      // Obtenha os valores dos campos
      const nome = nomeInput.value;
      const altura = parseFloat(alturaInput.value);
      const peso = parseFloat(pesoInput.value);
  
      // Verifique se todos os campos estão preenchidos
      if (nome !== '' && altura !== '' && peso !== '') {
        // Calcule o IMC
        const imc = (peso / (altura * altura)).toFixed(2);
  
        // Exiba o resultado
        resultadoElement.innerText = `${nome} tem ${altura} de altura e seu IMC é de ${imc}`;
      } else {
        alert("Por favor, preencha todas as caixas!");
      }
    }
  
    // Adicione um evento de clique ao botão calcular
    calcularButton.addEventListener("click", calcularImc);
  });