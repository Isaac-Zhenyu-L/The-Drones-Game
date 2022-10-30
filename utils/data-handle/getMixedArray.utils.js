const getMixedArray = (array) => {
	return array.map((arr) => {
		if (/^\d+$/.test(arr)) {
			return parseInt(arr);
		} else {
			return arr;
		}
	});
};
module.exports = getMixedArray;
