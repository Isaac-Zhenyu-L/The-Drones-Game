const getDirectionArray = require("./getDirectionArray.utils");
const coordinateCaculator = require("./coordinateCaculator.utils");

const getCoordinate = async (movingCommander) => {
	const _movingCommander = movingCommander;
	let _destinationPosition = [2, 1, "N"];
	let _result = [2, 1, "N"];
	const _directionIndexArray = await getDirectionArray(_movingCommander);
	const calulatedResult = await coordinateCaculator(
		_directionIndexArray,
		_result,
		_destinationPosition
	);
	console.log("final", calulatedResult);
};
module.exports = getCoordinate;
