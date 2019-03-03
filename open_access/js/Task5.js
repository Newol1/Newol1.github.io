// TASK NUMBER 6 START
var test = [1, [2, [3,[1, 8, 9], 4], 32], 98];

getSumFromArr(test);

function getSumFromArr(arr) {
	var sum = 0;

	getSum(arr);

		function getSum(arr) {
				for(let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i]) == true) {
				getSum(arr[i]);
			} else {
				sum += arr[i];
			}
		}
	}
	return sum;
}
// TASK NUMBER 6 END