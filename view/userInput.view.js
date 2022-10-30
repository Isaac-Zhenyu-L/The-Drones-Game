const readline = require("readline");
const userInput = () => {
	const interface = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	return new Promise((resolve) =>
		interface.question(
			"Please input moving commander of drones in the format, as same as 4 5 2 1 N MMRMLMQ\n: ",
			(answer) => {
				interface.close();
				resolve(answer);
			}
		)
	);
};
module.exports = userInput;
