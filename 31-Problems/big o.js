function addUpTo(n) {
	let total = 0;
	for (let i = 1; i  <= n; i++) {
	  total += i;
	}
	return total;
}

console.log(addUpTo(99));
addUpTo(34);
addUpTo(9);

/*
Exception: ReferenceError: total is not defined
addUpTo@Scratchpad/2:4:4
@Scratchpad/2:9:1
*/