function calcular(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores dos campos de entrada
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Converter para metros
    const peso = parseFloat(document.getElementById('peso').value);

    // Verificar se os valores são válidos
    if (isNaN(altura) || isNaN(peso)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para altura e peso.";
        return;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);

    // Determinar a categoria do IMC
    let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    // Exibir o resultado
    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} (${categoria}).`;
}
