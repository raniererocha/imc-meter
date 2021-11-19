export const start = () => {
	const data = {};

	calculaImc(filtraInputs(data));

	return data;
};

const filtraInputs = (data) => {
	if (peso.value !== "" && altura.value !== "") {
		//trata os inputs
		data.p = parseFloat(peso.value.replace(",", "."));
		data.a = parseFloat(altura.value.replace(",", "."));

		return data;
	}
	throw new Error("1");
};
const calculaImc = (data) => {
	data.imc = data.p / data.a ** 2;
	data.check = true;
	checaGrauImc(data);
	return data;
};

const checaGrauImc = (data) => {
	switch (data.check) {
		case data.imc <= 18.5:
			data.grau = "abaixo do peso";
			break;
		case data.imc <= 24.9:
			data.grau = "com o peso normal";
			break;
		case data.imc <= 29.9:
			data.grau = "com sobrepeso";
			break;
		case data.imc <= 34.9:
			data.grau = "com obesidade grau I";
			break;
		case data.imc <= 39.9:
			data.grau = "com obesidade grau II";
			break;
		default:
			data.grau = "com obesidade grau III ou Mórbida";
			break;
	}
};
