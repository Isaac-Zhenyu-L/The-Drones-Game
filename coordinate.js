const getCoordinate = (movingCommander) => {
	const _directionIndex = [];
	const _length = movingCommander.length;
	let _destinationPosition = [2, 1, "N"];
	let _result = [2, 1, "N"];
	for (let i = 0; i < _length; i++) {
		if (i == 0) {
			_directionIndex.push([i, movingCommander.charAt(i)]);
		}
		if (movingCommander.charAt(i) !== "M") {
			_directionIndex.push([i, movingCommander.charAt(i)]);
		}
	}
	console.log("initial", _directionIndex);
	_directionIndex.forEach((direction, index) => {
		if (index == 0) {
			if (_destinationPosition[2] === "N") {
				_result[1] = _result[1] + _directionIndex[index + 1][0];
			}
			if (_destinationPosition[2] === "S") {
				_result[1] = _result[1] - _directionIndex[index + 1][0];
			}
			if (_destinationPosition[2] === "W") {
				_result[0] = _result[0] - _directionIndex[index + 1][0];
			}
			if (_destinationPosition[2] === "E") {
				_result[0] = _result[0] + _directionIndex[index + 1][0];
			}
			console.log("first", _result);
		}
		if (index == _directionIndex.length - 1) {
			console.log("last one", _result);
		}
		if (index > 0 && index < _directionIndex.length - 1) {
			let currentMove = _directionIndex[index + 1][0] - direction[0] - 1;
			let _direction = "";
			console.log("middle_come_to", _result, direction[1]);
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
				console.log("middle done R", _result);
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
				console.log("middle done L", _result);
			}
			_result[2] = _direction;
		}
	});
	console.log("final", _result);
};
module.exports.getCoordinate = getCoordinate;
