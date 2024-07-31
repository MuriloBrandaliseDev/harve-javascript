function calcular() {
    const velocidade = document.getElementById('velocidade').value;
    const resultado = document.getElementById('resultado');

    
    
    
    if(velocidade > 60 && velocidade < 63){
        resultado.innerHTML = `
        <p> O veículo está a ${velocidade} km/h. O veículo estava perto de ultrapassar do limite de velocidade, <span class="diminua"> TOME CUIDADO!</span></p>`
    } else if (velocidade > 60) {
        resultado.innerHTML = `
        <p> O veículo está a ${velocidade} km/h.<span class="multa"> Multado por excesso de velocidade!</span></p> `;
        
    } else {
        resultado.innerHTML = `
        <p> O veículo está a ${velocidade} km/h. <span class="noLimite">Está dentro do limite de velocidade.</span></p>`;
        
    }
}
