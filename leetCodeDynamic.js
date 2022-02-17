//* 70. Climbing Stairs
//?? this is basically the fibonacci sequence

// n = 5
// starting from 4 how many ways can you get to 5
// 0  1  2  3  4  5
// 8  5  3  2  1  1 # of ways to get to step. work backwards
// at 3 we can add together 4 and 5 to get number of ways
// same for 2, add next two values
// same for 1

function climbstairs(n) {
	let one = 1;
	let two = 1;
	for (let i = 0; i < n - 1; i++) {
        console.log(one, two)
		//store one in temp variable before we shift it
		let temp = one;
		// add two previous values and get their result
		one = one + two;
		//shift two to be what previous value of one was
		two = temp;
	}
	return one;
}
console.log(climbstairs(5));

//** 322. Coin Change */
// dp bottom up 
// solve in reverse order