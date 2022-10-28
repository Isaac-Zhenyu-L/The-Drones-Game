const isUserInputVaild = (userInput, callback) => {
	if (userInput.length > 0) {
		const _userInputArray = userInput.split(" ");
		const movingCommander = _userInputArray[5];
		isLastOneQ(movingCommander, (isQ) => {
			let _response = { isValid: true, message: "", payload: movingCommander };
			if (isQ) {
				if (
					_userInputArray.length !== 6 ||
					movingCommander[movingCommander.length - 1] !== "Q"
				) {
					_response.isValid = false;
					_response.message =
						"The input is invaild, please try again, please refer to the below example";
					_response.payload = [];
				}
			} else {
				{
					_response.isValid = false;
					_response.message =
						"The input is invaild, please try again, please refer to the below example";
					_response.payload = [];
				}
			}
			callback(_response);
		});
	}
};

const isLastOneQ = (movingCommander, callback) => {
	const _movingCommander = movingCommander;
	const _length = _movingCommander.length;
	let count = 1;
	for (let i = 0; i < _length; i++) {
		if (_movingCommander.charAt(i) === "Q") {
			count = count + 1;
		}
	}
	callback(count > 1);
};

module.exports.isUserInputVaild = isUserInputVaild;
