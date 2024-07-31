const calcularNota = (nota) => {
    return nota >= 6 ? "Aluno aprovado" : "Aluno reprovado";
};

// Testando a função
let notaAluno = 7; // Você pode alterar esse valor para testar outras notas
console.log(calcularNota(notaAluno)); // Deve imprimir "Aluno aprovado"
