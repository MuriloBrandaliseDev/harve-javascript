function calcular (event) {
    event.preventDefault();

    //buscando o valor da nota.
    const nota = document.getElementById("nota").value ;


    //buscando o valor para escrever nosso resultado.
    const resultado = document.getElementById("resultado");

    if(nota < 0 || nota > 10) {
        resultado.innerHTML = `Nota inválida!`;
    } else if(nota >= 7){
        resultado.innerHTML =  `<P> O aluno tirou ${nota} e foi <span class="aprovado"> APROVADO!</span></p>`
    } else {
        resultado.innerHTML = `<P> O aluno tirou ${nota} e foi <span class="reprovado"> REPROVADO!</span></p>`;
    } if (nota >= 5 && nota < 7){
        resultado.innerHTML = `<P> O aluno tirou ${nota} e ficou de <span class="recuperacao"> RECUPERAÇÃO!</span></p>`;
    }

}