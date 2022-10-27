const logger = require("./logger");
const input = require("./userInput");
const coordinate = require("./coordinate");

(async () => {
	let _length = Infinity,
		_indexOfMovingRight = 0,
		_indexOfMovingLeft = 0;
	for (let index = 0; index < _length; index++) {
		const data = await input.userInput();
		const _userInputArray = data.split(" ");
		const northEastX = _userInputArray[0];
		const northEastY = _userInputArray[1];
		const movingCommander = _userInputArray[5];
		if (
			_userInputArray.length !== 6 ||
			movingCommander[movingCommander.length - 1] !== "Q"
		) {
			logger.log("The input is invaild, please try again");
		} else {
			coordinate.getCoordinate(movingCommander);
			// logger.log(movingCommander);
		}
	}
})();
