function minMax(arr){
	// how to get the min
	let min = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	
	// how to get the max
	let max = arr[0];
	for (var j = 1; j < arr.length; j++){
		if (arr[j] > max){
			max = arr[j];
		}
	}
	
	return [min, max];
}