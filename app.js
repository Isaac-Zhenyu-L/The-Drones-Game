const getCoordinate = require("./utils/getCoordinate.utils");
const userInput = require("./view/userInput.view");
const validation = require("./utils/validation/validateResult.utils");
const logger = require("./utils/logger");
(async () => {
	let _length = Infinity;
	for (let index = 0; index < _length; index++) {
		const _userInputData = await userInput();
		validation.isUserInputVaild(
			_userInputData,
			async ({ isValid, payload, message }) => {
				if (isValid) {
					const _userInputArray = _userInputData.split(" ");
					const maxPosition = _userInputArray.slice(0, 2);
					const landingPosition = _userInputArray.slice(2, 5);
					const destination = await getCoordinate(payload, landingPosition);
					const isDesinationValid = await validation.destinationValidation(
						maxPosition,
						destination
					);
					isDesinationValid
						? logger(`The current position is ${destination.join(" ")}`)
						: logger("The drone is out of scope, please input again");
				} else {
					logger(message);
				}
			}
		);
	}
})();
