const readline = require("readline");
const userInput = () => {
	const interface = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	return new Promise((resolve) =>
		interface.question("Please provide next input: ", (answer) => {
			interface.close();
			resolve(answer);
		})
	);
};
module.exports = userInput;
