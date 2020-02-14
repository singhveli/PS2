/*
Write two generators that together implement a series of even Fibonacci numbers. The first
generator should return the series of fibonacci numbers starting from 0. The series F is defined as
F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
Use the generators to print out the first 6 even Fibonacci numbers.
*/

function* fib () {
	yield 0;
	yield 1;
	let a = 0;
	let b = 1;
	while (true) {
		let result = a + b;
		a = b;
		b = result;
		yield result;
	}
}

function* fibEvens () {
	for (fib of fib()){
		if (fib%2==0) {
			yield fib;
		}
	}

}

const xFibs = count => {
	let res = [];
	for (fib of fibEvens()) {
		res.push(fib);
		if (count == 1) {
			break;
		}
		count--;
	}
	return res;
}

console.log(`The first 6 even Fibonacci numbers are: ${xFibs(6)}`);
