const getDirectionArray = (movingCommander) => {
	let _directionIndexArray = [];
	const _movingCommander = movingCommander;
	const _length = movingCommander.length;
	for (let i = 0; i < _length; i++) {
		if (i == 0) {
			_directionIndexArray.push([i, _movingCommander.charAt(i)]);
		}
		if (_movingCommander.charAt(i) !== "M") {
			_directionIndexArray.push([i, _movingCommander.charAt(i)]);
		}
	}
	return _directionIndexArray;
};
module.exports = getDirectionArray;
