function calcular (event) {
    event.preventDefault();

    //buscando o valor da nota.
    const nota = document.getElementById("nota").value ;


    //buscando o valor para escrever nosso resultado.
    const resultado = document.getElementById("resultado");

    if(nota < 0 || nota > 10) {
        resultado.textContent = "Nota Inválida";
    } else if(nota >= 7){
        resultado.textContent = "aluno aprovado";
    } else {
        resultado.textContent = "aluno reprovado";
    }

}