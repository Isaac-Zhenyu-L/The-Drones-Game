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
		}
		if (index == _directionIndex.length - 1) {
			let currentMove = direction[0] - _directionIndex[index - 1][0] - 1;
			if (_result[2] === "N") {
				_result[1] = _result[1] + currentMove;
			}
			if (_result[2] === "S") {
				_result[1] = _result[1] - currentMove;
			}
			if (_result[2] === "W") {
				_result[0] = _result[0] - currentMove;
			}
			if (_result[2] === "E") {
				_result[0] = _result[0] + currentMove;
			}
			console.log("length", _result);
		} else {
			let currentMove = _directionIndex[index + 1][0] - direction[0] - 1;
			console.log("no length", _result);
			if (direction[1] === "R") {
				if (_result[2] === "N") {
					_result[2] = "E";
					_result[0] = _result[0] + currentMove;
				}
				if (_result[2] === "S") {
					_result[2] = "W";
					_result[0] = _result[0] - currentMove;
				}
				if (_result[2] === "W") {
					_result[2] = "N";
					_result[1] = _result[1] + currentMove;
				}
				if (_result[2] === "E") {
					_result[2] = "S";
					_result[1] = _result[1] - currentMove;
				}
			}
			if (direction[1] === "L") {
				if (_result[2] === "N") {
					_result[2] = "W";
					_result[0] = _result[0] - currentMove;
				}
				if (_result[2] === "S") {
					_result[2] = "E";
					_result[0] = _result[0] + currentMove;
				}
				if (_result[2] === "W") {
					_result[2] = "S";
					_result[1] = _result[1] - currentMove;
				}
				if (_result[2] === "E") {
					_result[2] = "N";
					_result[1] = _result[1] + currentMove;
				}
				console.log("no length", _result);
			}
		}
	});
	console.log("final", _result);
};
module.exports.getCoordinate = getCoordinate;
