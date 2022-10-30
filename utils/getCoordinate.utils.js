const getDirectionArray = require("./data-handle/getDirectionArray.utils");
const coordinateCaculator = require("./app-core/coordinateCaculator.utils");
const getMixedArray = require("./data-handle/getMixedArray.utils");

const getCoordinate = async (movingCommander, landingPosition) => {
	const _movingCommander = movingCommander;
	const _destinationPosition = await getMixedArray(landingPosition);
	const _result = _destinationPosition;
	const _directionIndexArray = await getDirectionArray(_movingCommander);
	const calulatedResult = await coordinateCaculator(
		_directionIndexArray,
		_result,
		_destinationPosition
	);
	return calulatedResult;
};
module.exports = getCoordinate;
