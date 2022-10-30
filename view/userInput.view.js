const readline = require("readline");
const userInput = () => {
	const interface = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	return new Promise((resolve) =>
		interface.question(
			"Please input moving commander of drones in the format (Example: 4 5 2 1 N MMRMLMQ):\n ",
			(input) => {
				interface.close();
				resolve(input);
			}
		)
	);
};
module.exports = userInput;
