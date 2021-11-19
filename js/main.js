import { render } from "./render.js";
import { start } from "./imcCalc.js";
const btn = document.getElementById("calcular");

btn.addEventListener("click", () => {
	try {
		render(start());
	} catch (error) {
		console.log(error);
	}
});

/*

    let imc = p / a ** 2;
		return { p, a, imc };
	return new Error("Preencha todos os campos");

*/

/*

log de erros

1 - preencha todos os campos
2 - 

*/
