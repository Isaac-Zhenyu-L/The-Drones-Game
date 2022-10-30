const isUserInputVaild = async (userInput, callback) => {
	let _response = {
		isValid: false,
		message:
			"The input is invaild, please try again, please refer to the below example",
		payload: [],
	};
	if (userInput.length > 0) {
		if (userInput.split(" ").length !== 6) {
			callback(_response);
		} else {
			const _userInputArray = userInput.split(" ");
			const movingCommander = _userInputArray[5];
			const otherCommanders = _userInputArray.slice(0, 4);
			inputFormatValidation(
				otherCommanders,
				movingCommander,
				(isinputVaild) => {
					let _response = {
						isValid: true,
						message: "",
						payload: movingCommander,
					};
					if (isinputVaild) {
						_response.isValid = true;
						_response.payload = movingCommander;
					} else {
						{
							_response.isValid = false;
							_response.message =
								"The input is invaild, please try again, please refer to the below example";
							_response.payload = [];
						}
					}
					callback(_response);
				}
			);
		}
	}
};

const inputFormatValidation = async (
	otherCommanders,
	movingCommander,
	callback
) => {
	const _otherCommanders = otherCommanders.join("");
	const _movingCommander = movingCommander;
	const _isFormatValidation = await isFormatValidation(
		_otherCommanders,
		_movingCommander
	);
	const _isLastOneQ = await isLastOneQ(_movingCommander);
	callback(_isFormatValidation && _isLastOneQ);
};

const isFormatValidation = (_otherCommanders, _movingCommander) => {
	const _array = _otherCommanders.split("");
	const _maxPosition = _array.slice(0, 2);
	const _landingPosition = _array.slice(2, 4);
	const isMaxPositionVaild = _maxPosition.some((p) => p > 0);
	const isLandingPositionVaild = _landingPosition.some((p) => p >= 0);
	return (
		isMaxPositionVaild &&
		isLandingPositionVaild &&
		/^\d+$/.test(_otherCommanders) &&
		/^[A-Z]+$/.test(_movingCommander)
	);
};

const isLastOneQ = (movingCommander) => {
	const _movingCommander = movingCommander;
	const _length = _movingCommander.length;
	let count = 0;
	for (let i = 0; i < _length; i++) {
		if (_movingCommander.charAt(i) === "Q") {
			count++;
		}
	}
	return count === 1 && movingCommander[movingCommander.length - 1] === "Q";
};

const isDestinationValid = (maxPosition, desitination) => {
	const _maxPosition = maxPosition.map((p) => parseInt(p));
	const _desitination = desitination.slice(0, 2);
	return _maxPosition.join("") > _desitination.join("");
};

module.exports.isUserInputVaild = isUserInputVaild;
module.exports.destinationValidation = isDestinationValid;
