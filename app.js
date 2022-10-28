const getCoordinate = require("./utils/getCoordinate.utils");
const userInput = require("./view/userInput.view");
const validation = require("./utils/userInputValidation/validateResult.utils");
const logger = require("./utils/logger");
(async () => {
	let _length = Infinity,
		_indexOfMovingRight = 0,
		_indexOfMovingLeft = 0;
	for (let index = 0; index < _length; index++) {
		const _userInputData = await userInput();
		validation.isUserInputVaild(
			_userInputData,
			async ({ isValid, payload, message }) => {
				if (isValid) {
					await getCoordinate(payload);
				} else {
					logger(message);
				}
			}
		);
	}
})();
