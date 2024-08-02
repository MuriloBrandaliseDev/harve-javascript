function buscarPizza() {
    // Lista de pizzas disponíveis no cardápio
    const pizzasDisponiveis = ["frango", "calabresa", "portuguesa", "bacon", "quatro queijos"];

    // Obter o valor do campo de entrada
    const pizzaNome = document.getElementById('pizza').value.trim().toLowerCase();

    // Verificar se o nome da pizza está no cardápio

    if(pizzasDisponiveis.includes(pizzaNome)){

        document.getElementById("resultado").innerHTML = `
        <p><span class="resultado">Sim! Temos essa pizza de ${pizzaNome} em nosso cardápio</span></p>`;
    } else if(pizzaNome === ""){
        document.getElementById("resultado").innerHTML = `
        <p><span class="resultado">Porfavor! Insira o nome da pizza.</span></p>`;
    } else {
        document.getElementById("resultado").innerHTML = `
        <p><span class="resultado">Infelizmente não temos essa pizza de ${pizzaNome} em nosso cardápio.</span></p>`;
    }
}
