function doubler(arr) {
	let newArr = arr.map((x) => x * 2);
	console.log(newArr);
}
// doubler(x);

function doublertwo(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] * 2);
	}
	console.log(newArr);
}

// doublertwo(x);

function yell(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] + '!');
	}
	console.log(newArr);
}
let y = ['Hi', 'Bye', 'Kiss'];

// yell(y);

function yelltwo(arr) {
	console.log(arr.map((x) => x + '!'));
}
// yelltwo(y);

function element_times_index(arr) {
	let newArr = [];
	for (i = 0; i < arr.length; i++) {
		newArr.push(arr[i] * i);
	}
	console.log(newArr);
}

let x = [1, 2, 3, 4];

// element_times_index(x);

function even_nums(max) {
	let arr = [];
	for (let i = 0; i < max + 1; i++) {
		if (i % 2 === 0) {
			arr.push(i);
		}
	}
	console.log(arr);
}

// even_nums(10);

function range(min, max) {
	let arr = [];
	for (i = min; i < max + 1; i++) {
		arr.push(i);
	}
	console.log(arr);
}

// range(5, 11);

function odd_range(min, max) {
	let arr = [];
	for (let i = min; i < max + 1; i++) {
		if (i % 2 !== 0) {
			arr.push(i);
		}
	}
	console.log(arr);
}

// odd_range(0, 11);

function reverse_range(min, max) {
	let arr = [];
	for (let i = max - 1; i > min; i--) {
		arr.push(i);
	}
	console.log(arr);
}

// reverse_range(1, 10);

function first_half(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length / 2; i++) {
		newArr.push(arr[i]);
	}
	console.log(newArr);
}

// let z = ['mom', 'sister', 'son'];
// first_half(z);

function factors_of(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			arr.push(i);
		}
	}
	console.log(arr);
}

// factors_of(16);

function select_odds(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			newArr.push(arr[i]);
		}
	}
	console.log(newArr);
}

// let a = [1, 2, 4, 9];
// select_odds(a);

function select_long_words(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 4) {
			newArr.push(arr[i]);
		}
	}
	console.log(newArr);
}

// let b = ['bob', 'toby', 'britney'];
// select_long_words(b);

function select_long_words_two(arr) {
	let newArr = arr.filter((x) => x.length > 4);
	console.log(newArr);
}

function sum_elements(arr1, arr2) {
	let newArr = [];
	for (let i = 0; i < arr1.length; i++) {
		newArr.push(arr1[i] + arr2[i]);
	}
	console.log(newArr);
}

// let a = ['aunt', 'mom', 'cousin'];
// let c = [1, 4, 6];
// let g = [2, 6, 8];
// sum_elements(c, g);

function fizz_buzz(max) {
	let arr = [];
	for (i = 1; i < max; i++) {
		if ((i % 4 === 0 || i % 6 === 0) && !(i % 4 === 0 && i % 6 === 0)) {
			arr.push(i);
		}
	}
	console.log(arr);
}

// fizz_buzz(20);
