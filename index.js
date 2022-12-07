// [x] 2. Create a function that prints/logs all the integers from 1 to 20.

const print1To20 = () => {
	for (let i = 1; i <= 20; i++) {
		console.log(i);
	}
};
print1To20();

// [x] 3. Create a function that prints/logs all the odd numbers from 3 to 20.

const printOdd3To20 = () => {
	for (let i = 3; i <= 20; i++) {
		console.log(i);
	}
};
printOdd3To20();

// [x] 4. Create a function that prints/logs all the even numbers from 4 to 22.

const printEven4to22 = () => {
	for (let i = 4; i <= 22; i += 2) {
		console.log(i);
	}
};
printEven4to22();

// [x] 5. Print/log all the multiples of 7 between the numbers 7 to 62.

const multipleOf7 = () => {
	for (let i = 7; i <= 62; i += 7) {
		console.log(i);
	}
};
multipleOf7();

// [x] 6. Log positive numbers starting at 50, counting down by fives (exclude 0).

const countdownBy5 = () => {
	for (let i = 50; i >= 5; i -= 5) {
		console.log(i);
	}
};
countdownBy5();

// [x] 7. Given an array, print/log the sum of the first value in the array, plus the array’s length. Assume that the array is composed of numbers.

const firstPlusLength = (arr) => {
	let sum = arr[0] + arr.length;
	console.log(sum);
};
firstPlusLength([1, 2, 5]);
firstPlusLength([3, 0, 2, 5]);
firstPlusLength([-5, 0, 2, 5]);
firstPlusLength([1]);

// [x] 8. Create a function that prints/logs all the even numbers from 4 to 22.
// [x] Have it also return the sum of all the numbers that were printed.

const printEven4To22Sum = () => {
	let sum = 0;
	for (let i = 4; i <= 22; i += 2) {
		sum += i;
		console.log(i);
	}
	console.log(`The sum is: ${sum}`);
};
printEven4To22Sum();

// [x] 9. Add odd integers from -25,000 to 30,000 and have the function return its final sum.

const addOddInt = () => {
	let sum = 0;
	for (let i = 24999; i <= 29999; i += 2) {
		sum += i;
	}
	console.log(sum);
};
addOddInt();

// [x] 10. Given an array, write a function that prints/logs each number in the array.

const printArray = (arr) => {
	arr.forEach((element) => {
		console.log(element);
	});
};
printArray([1, 3, 5]);
printArray([-1, 3, -5]);
printArray([1, 2, 3, 4, 5]);

// [x] 11. Given an array, write a function that only prints/logs its positive value.

const printPositives = (arr) => {
	// * solution 1
	// 	// for (let i = 0; i < arr.length; i++) {
	// 	// 	if (arr[i] > 0) {
	// 	// 		console.log(arr[i]);
	// 	// 	}

	// * solution 2
	const positive = arr.filter((item) => item > 0);
	console.log(positive);
};
printPositives([-1, 3, -5, 10]);
printPositives([-1, 3, -5]);
printPositives([-1, 10, 15]);

// [x] 12. Given an array, write a function that prints the index value of its positive values.

const printPositiveIndex = (arr) => {
	// * solution 1
	// 	// for (let i = 0; i < arr.length; i++) {
	// 	// 	if (arr[i] > 0) {
	// 	// 		console.log(i);
	// 	// 	}
	// 	// }

	// * solution 2
	arr.filter((item, index) => {
		if (item > 0) {
			console.log(index);
		}
	});
};
printPositiveIndex([1, 3, -10]);
printPositiveIndex([10, 5, -5, 15]);
printPositiveIndex([10, 5, 5, 15]);

// [x] 13. Given an array, write a function that returns a new array where each negative value was converted to a positive value.

const bePositive = (arr) => {
	const toPositive = arr.map((item) => {
		if (item < 0) {
			return Math.abs(item);
		} else {
			return item;
		}
	});
	console.log(toPositive);
};
bePositive([-1, -3, -5]);
bePositive([-1, -3, -5, 7, -9]);
bePositive([0, 2, 4, -6, -8]);
bePositive([-1]);

// [x] 14. Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself.

const squareVal = (arr) => {
	const squared = arr.map((num) => num ** 2);
	console.log(squared);
};
squareVal([1, 3, 5]);
squareVal([1, -3]);
squareVal([0, 2, 4]);

// [x] 15. Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
// [x] 15. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

const noNeg = (arr) => {
	const noNegative = arr.map((number) => {
		if (number < 0) {
			return (number = 0);
		} else {
			return number;
		}
	});
	console.log(noNegative);
};
noNeg([1, 5, 10, -2]);
noNeg([1, 5, 10]);
noNeg([1, -5, -10]);
noNeg([2, -5, -10, -5]);
noNeg([-1, -3, -5]);

// [x] 16. Given an array of multiple values, write a function that returns the sum of its numbers.
// [x] 16. For example, findSum([1,2,3]) should return 6.

const findSum = (arr) => {
	const sum = arr.reduce((a, b) => a + b);
	console.log(sum);
};
findSum([1, 2, 3]);
findSum([1, 3, 5]);
findSum([-1, 2, -3]);
findSum([-2, 0, 2]);

// [x] 17. Given an array with multiple values, write a function that returns the maximum number in the array.
// [x] 17. For example, findMax([-3,3,5,7]) should return 7.

const findMax = (arr) => {
	const max = Math.max(...arr);
	console.log(max);
};
findMax([-3, 3, 5, 7]);
findMax([-3, 3, 15, 7]);
findMax([13, 3, 5, 7]);
findMax([0, -3, -5, -7]);
findMax([3]);
findMax([-1, -3, -5, -7]);

// [x] 18. Given an array with multiple values, write a function that returns the minimum value in the array.
// [x] 18. For example findMin([0,3,-5]) should return -5.

const findMin = (arr) => {
	const min = Math.min(...arr);
	console.log(min);
};

findMin([0, 3, -5]);
findMin([-3, -5, -7]);
findMin([-3, 5, 7]);
findMin([3, 5, 7]);

// [x] 19. Given an array with multiple values, write a function that returns a new array with two elements.
// [x] 19. The first value in the new array should be the minimum value in the original array.
// [x] 19. The second value in the new array should be the maximum value in the original array.

const findMinMax = (arr) => {
	const min = Math.min(...arr);
	const max = Math.max(...arr);

	const minMax = [min, max];
	console.log(minMax);
};
findMinMax([1, 3, 5]);
findMinMax([-1, 3, 5]);
findMinMax([-1, -3, -5]);
findMinMax([-1, -3, 10]);

// [x] 20. Given array of numbers, create function to replace last value with number of positive values.
// [x] 20. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

const countPositives = (arr) => {
	// * solution 1
	// let counter = 0;
	// for (i = 0; i < arr.length; i++) {
	// 	if (arr[i] > 0) {
	// 		counter++;
	// 		arr.pop();
	// 		arr.push(counter);
	// 	}
	// }
	// console.log(arr);

	//* solution 2
	let counter = 0;
	arr.map((num) => {
		if (num > 0) {
			counter++;
			arr.pop();
			arr.push(counter);
		}
	});
	console.log(arr);
};

countPositives([-1, 1, 1, 1]);
countPositives([-1, -5, -5, 10]);
countPositives([1, 2, 3, 2]);

// [x] 21. Given an array, write a function that prints values that are greater than its 2nd value in the array.
// [x] 21. For example, given [1,3,5,7,9,13], it should print/log 5, 7, 9, and 13.
// [x] 21. Assume that the array has at least 2 values. Have the function also return the sum of the numbers that were printed/logged.

const valGreaterThanSecond = (arr) => {
	let sum = 0;
	let newArray = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > arr[1]) {
			newArray.push(arr[i]);
			sum += arr[i];
		}
	}
	console.log(newArray);
	console.log(sum);
};

valGreaterThanSecond([1, 3, 5, 7, 9, 13]);
valGreaterThanSecond([1, 5, 3, 7, 0, 19]);
valGreaterThanSecond([1, 3, -5, 7, -9, 13]);

// [x] 22. Given two numbers passed to the function, return a new array of length num1 with each value num2.
// [x] 22. For example, thisLengthThatValue(3,5) should return [5, 5, 5]. thisLengthThatValue(2, 10) should return [10, 10].

const thisLengthThatValue = (num1, num2) => {
	let array = [];

	for (let i = 0; i < num1; i++) {
		array.push(num2);
	}
	console.log(array);
};
thisLengthThatValue(3, 5);
thisLengthThatValue(2, 10);
thisLengthThatValue(3, 10);
thisLengthThatValue(1, 55);
thisLengthThatValue(10, 2);

// [x] 23. Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
// [x] 23. For example, addSevenToMost([1,3,5]) should return [10, 12]. addSevenToMost([1, 3, 5, 7]) should return [10, 12, 14].

const addSevenToMost = (arr) => {
	let newArray = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[0]) {
			let plusSeven = arr[i] + 7;
			newArray.push(plusSeven);
		}
	}
	console.log(newArray);
};
addSevenToMost([1, 3, 5]);
addSevenToMost([1, 3, 5, 7]);
addSevenToMost([5, 10, 20]);

// [x] 24.  Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value.
// [x] 24.  If the array that was passed to the function has less than two elements, have the function return false.
// [x] 24.  For example, greaterThanSecond([1,3,5,7]) should return [5, 7].
// [x] 24.  Similarly, greaterThanSecond([0, -3, 2, 5]) should return [0, 2, 5].Also, greaterThanSecond([2]) should return false.

const greaterThanSecond = (arr) => {
	let newArray = [];

	if (arr.length > 2) {
		for (i = 0; i < arr.length; i++) {
			if (arr[i] > arr[1]) {
				newArray.push(arr[i]);
			}
		}
		console.log(newArray);
	} else {
		console.log('False');
	}
};
greaterThanSecond([1, 3, 5, 7]);
greaterThanSecond([0, -3, 2, 5]);
greaterThanSecond([2]);
greaterThanSecond([]);
greaterThanSecond([0, 1, 2, -5]);

// [x] 25.  Write a function that will swap the first and last values in any given array. The default minimum length of the array is 2.
// [x] 25.  For example, swapFirstLast([1,3,5]) should return [5, 3, 1]. swapFirstLast([1,3,5,7,9]) should return [9, 3, 5, 7, 1].

const swapFirstLast = (arr) => {
	let firstElement = arr[0];
	let lastElement = arr[arr.length - 1];

	arr[0] = lastElement;
	arr[arr.length - 1] = firstElement;

	console.log(arr);
};
swapFirstLast([1, 3, 5]);
swapFirstLast([1, 3, 5, 7, 9]);
swapFirstLast([1, 3]);
