const coordinateCaculator = (
	directionIndexArray,
	result,
	destinationPosition
) => {
	const _directionIndexArray = directionIndexArray;
	const _destinationPosition = destinationPosition;
	let _result = result;
	_directionIndexArray.forEach((direction, index) => {
		// Hander the index 0 of the given array
		if (index == 0) {
			if (_destinationPosition[2] === "N") {
				_result[1] = _result[1] + _directionIndexArray[index + 1][0];
			}
			if (_destinationPosition[2] === "S") {
				_result[1] = _result[1] - _directionIndexArray[index + 1][0];
			}
			if (_destinationPosition[2] === "W") {
				_result[0] = _result[0] - _directionIndexArray[index + 1][0];
			}
			if (_destinationPosition[2] === "E") {
				_result[0] = _result[0] + _directionIndexArray[index + 1][0];
			}
		}
		// Hander the index in the middle of the given array
		if (index > 0 && index < _directionIndexArray.length - 1) {
			let currentMove = _directionIndexArray[index + 1][0] - direction[0] - 1;
			let _direction = "";
			if (direction[1] === "R") {
				if (_result[2] === "N") {
					_direction = "E";
					_result[0] = _result[0] + currentMove;
				}
				if (_result[2] === "S") {
					_direction = "W";
					_result[0] = _result[0] - currentMove;
				}
				if (_result[2] === "W") {
					_direction = "N";
					_result[1] = _result[1] + currentMove;
				}
				if (_result[2] === "E") {
					_direction = "S";
					_result[1] = _result[1] - currentMove;
				}
			}
			if (direction[1] === "L") {
				if (_result[2] === "N") {
					_direction = "W";
					_result[0] = _result[0] - currentMove;
				}
				if (_result[2] === "S") {
					_direction = "E";
					_result[0] = _result[0] + currentMove;
				}
				if (_result[2] === "W") {
					_direction = "S";
					_result[1] = _result[1] - currentMove;
				}
				if (_result[2] === "E") {
					_direction = "N";
					_result[1] = _result[1] + currentMove;
				}
			}
			_result[2] = _direction;
		}
		// Hander the last index of the given array
		if (index == _directionIndexArray.length - 1) {
			_result = _result;
		}
	});
	return _result;
};
module.exports = coordinateCaculator;
