const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

const resposta = document.getElementById("resposta");

export const render = (e) => {
	resposta.innerHTML = `<h2>Seu IMC é de ${e.imc.toFixed(1)}, você está ${
		e.grau
	}`;
};
