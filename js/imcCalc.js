export const start = () => {
	const data = {};

	calculaImc(filtraInputs(data));

    return data

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
    data.imc = data.p / data.a ** 2
    
    return data
} 