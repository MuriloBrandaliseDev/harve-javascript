function formatarData(){
    const data = document.getElementById("data").value;

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "junho",
        "julho",
        "agosto",
    ];

    const arrayData = data.split("/");

    const dia = arrayData[0];
    const mes = arrayData[1];
    const ano = arrayData[2];

    const dataFormatada = document.getElementById("data-formatada");
    dataFormatada.textContent = `${dia} de ${meses[Number(mes) - 1]} de ${ano}`;

}