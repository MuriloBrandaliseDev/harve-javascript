const dataAtual = new Date();

const diaDoMes = document.getElementById("dia-do-mes");
diaDoMes.textContent = dataAtual.getDate();

const diaDaSemana = document.getElementById("dia-da-semana");
diaDaSemana.textContent = dataAtual.getDay();

const mesAtual = document.getElementById("mes-atual");
mesAtual.textContent = dataAtual.getMonth()+ 1;

const anoAtual = document.getElementById("ano-atual");
anoAtual.textContent = dataAtual.getFullYear() ;