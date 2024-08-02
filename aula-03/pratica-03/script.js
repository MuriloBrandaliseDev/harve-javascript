const numeroCeil = Number(document.getElementById("numero-ceil").textContent);
const ceil = document.getElementById("ceil");
ceil.textContent = Math.ceil(numeroCeil);

const numeroFloor = Number(document.getElementById("numero-floor").textContent);
const floor = document.getElementById("floor");
floor.textContent = Math.floor(numeroFloor);

const numeroRound01 = Number(document.getElementById("numero-round-01").textContent);
const round01 = document.getElementById("round-01");
round01.textContent = Math.round(numeroRound01);


const numeroRound02 = Number(document.getElementById("numero-round-02").textContent);
const round02 = document.getElementById("round-02");
round02.textContent = Math.round(numeroRound02)


const random = document.getElementById("numero-random");
random.textContent = Math.random();