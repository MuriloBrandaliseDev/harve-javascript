function calcular(event) {
    event.preventDefault();

    //buscando o aluno
    const aluno = document.getElementById("aluno").value;

    //buscando o valor da nota.
    const nota = Number(document.getElementById("nota").value);


    //buscando o valor para escrever nosso resultado.
    const resultado = document.getElementById("resultado");

    //buscando o valor de faltas
    const faltas = document.getElementById("faltas").value;



    if (nota < 0 || nota > 10 || faltas >=10 || !aluno || Number.isNaN(nota)) {
        resultado.innerHTML = `<span class="reprovado">Dados inválidos</span>`;
    } else if (nota >= 7) {
        resultado.innerHTML = `
        <p> O ${aluno} tirou a nota ${nota}.<span class="aprovado"> Aluno APROVADO</span></p>`;
    } else {
        resultado.innerHTML= `
        <p> O ${aluno} tirou a nota ${nota}. <span class="reprovado"> Aluno REPROVADO</span></p>`;
    } if (faltas >= 10) {
        resultado.innerHTML = `
        <p> O ${aluno} tem mais 10 ou mais ${faltas} faltas! <span class="reprovado"> Aluno REPROVADO</span></p>`; 
    }

}
