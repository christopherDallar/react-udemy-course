/* eslint-disable react-hooks/rules-of-hooks */
// var se dejo de utilizar no se usa mas nunca, solo const o let.
const characters = ["goku", "vegetta", "trunks"];

const [, vegt] = characters;

console.log(vegt);

const useState = (value) => {
	return [
		value,
		() => {
			console.log("Hello World");
		},
	];
};

const [, funct] = useState("Valor");

funct();


