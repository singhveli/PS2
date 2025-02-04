/*
Write a function that prints the cube value of its input (ie f(x)=x^3). Next,
write a single line of code to call the function on each value of the array
[1,2,3,4,5,6,7].
Note: The .map() method on Array is your friend here.
*/

function cubes_Values(input) {
	return input**3;
}

const cubes = input => {
	return input.map(x => x**3);
}

console.log(`The cubed values are: ${cubes([1,2,3,4,5,6,7])}`);
