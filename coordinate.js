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
	console.log(_directionIndex);
	_directionIndex.forEach((direction, index) => {
		// directions.forEach((direction, direction_index) => {
		if (index == 0) {
			if (direction[1] === "R") {
				if (_destinationPosition[2] === "N") {
					_result[2] = "E";
				}
				if (_destinationPosition[2] === "S") {
					_result[2] = "W ";
				}
				if (_destinationPosition[2] === "W") {
					_result[2] = "N";
				}
				if (_destinationPosition[2] === "E") {
					_result[2] = "S";
				}
			}
			if (direction[1] === "L") {
				if (_destinationPosition[2] === "N") {
					_result[2] = "W";
				}
				if (_destinationPosition[2] === "S") {
					_result[2] = "E";
				}
				if (_destinationPosition[2] === "W") {
					_result[2] = "S";
				}
				if (_destinationPosition[2] === "E") {
					_result[2] = "N";
				}
			}
		} else {
			let currentMove = direction[0] - _directionIndex[index - 1][0] - 1;
			console.log("_result", direction[1], currentMove);
			if (direction[1] === "R") {
				if (_destinationPosition[2] === "N") {
					_result[2] = "E";
					_result[0] = _destinationPosition[0] + currentMove;
					console.log("_result", _result);
				}
				// if (_destinationPosition[2] === "S") {
				// 	_result[2] = "W ";
				// 	_result[0] = _destinationPosition[0] - currentMove;
				// }
				// if (_destinationPosition[2] === "W") {
				// 	_result[2] = "N";
				// 	_result[1] = _destinationPosition[1] + currentMove;
				// }
				// if (_destinationPosition[2] === "E") {
				// 	_result[2] = "S";
				// 	_result[1] = _destinationPosition[1] - currentMove;
				// }
			}
			// if (direction[1] === "L") {
			// 	if (_destinationPosition[2] === "N") {
			// 		_result[2] = "W";
			// 		_result[0] = _destinationPosition[0] - currentMove;
			// 	}
			// 	if (_destinationPosition[2] === "S") {
			// 		_result[2] = "E";
			// 		_result[0] = _destinationPosition[0] + currentMove;
			// 	}
			// 	if (_destinationPosition[2] === "W") {
			// 		_result[2] = "S";
			// 		_result[1] = _destinationPosition[1] - currentMove;
			// 	}
			// 	if (_destinationPosition[2] === "E") {
			// 		_result[2] = "N";
			// 		_result[1] = _destinationPosition[1] + currentMove;
			// 	}
			// }
		}
		// });
	});
	// console.log(_result);
};
module.exports.getCoordinate = getCoordinate;
