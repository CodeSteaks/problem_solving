function sortArr(array) {
	for (var idx0 = 0; idx0 < array.length; idx0++){
		for (var idx1 = 0; idx1 < array.length; idx1++) {
			if (array[idx0] > array{[idx1]) {
				let temp = array[idx0];
				array[idx0] = array[idx1];
				array[idx1] = temp;
			}
		}
	}
	return array;
}

