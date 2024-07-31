function somar(){
    const num01 = Number(document.getElementById("num-01").value);
    const num02 = Number(document.getElementById("num-02").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <span class="resultados"> O resultado de somar é ${num01 + num02}</span>`

}

function subtrair(){
    const num01 = Number(document.getElementById("num-01").value);
    const num02 = Number(document.getElementById("num-02").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <span class="resultados"> O resultado de somar é ${num01 - num02}</span>`

}

function multiplicar(){
    const num01 = Number(document.getElementById("num-01").value);
    const num02 = Number(document.getElementById("num-02").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <span class="resultados" > O resultado de somar é ${num01 * num02}</span>`;


}


function dividir(){
    const num01 = Number(document.getElementById("num-01").value);
    const num02 = Number(document.getElementById("num-02").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <span class="resultados" > O resultado de somar é ${num01 / num02}</span>`;

}

function potencializar(){
    const num01 = Number(document.getElementById("num-01").value);
    const num02 = Number(document.getElementById("num-02").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <span class="resultados"> O resultado de somar é ${num01 ** num02}</span>`;

}

function resto(){
    const num01 = Number(document.getElementById("num-01").value);
    const num02 = Number(document.getElementById("num-02").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <span class="resultados"> O resultado de somar é ${num01 % num02}</span>`;

}