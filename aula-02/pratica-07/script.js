
function validarAnoBissexto(){

    const anoInt = parseInt(ano, 10);

    let anoBissexto = false;
    if ((anoInt % 4 === 0 && anoInt % 100 !== 0) || (anoInt % 400 === 0 )) {
        anoBissexto = true;
    }
    
    if(anoBissexto){
        document.getElementById("resultado").innerHTML = `<p><span class="resultado" O ${ano} é um ano Bissexto!</span></p>`;
    } else {
        document.getElementById("resultado").innerHTML = `<p> <span class="resultado" O ${ano} é um ano Bissexto!</span></p>`;
    }
   


    const ano = document.getElementById("ano").value;


    if(isNaN(ano) || ano === ""){
        document.getElementById("resultado").innerText ="Insira um número válido."
        return;
    }
}