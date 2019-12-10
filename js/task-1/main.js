
const Fibonacci = n => {
	let a = 0, b = 1;
	let arr = [0];
	for(let i = 1; i < n; i++){
		let temp = b;
		b = a + b;
		a = temp;
		arr.push(a);
	}
	return arr;
};
console.log(`With loops: ${Fibonacci(8)}`);

// optional variant (given on lesson)
function Fibo() {
	const f = (function * () {
		const A = [ 0, 1 ];
		let forward = true;
		for ( ; true; ) {
			const flag = yield A[0];
			if (flag===true || flag===false){
				forward = flag;
			}
			if (forward) {
				const next = A[0] + A[1];
				A.push(next);
				A.shift();
			} else {
				const prev = A[1] - A[0];
				A.unshift(prev);
				A.pop();
			}
		}
	})();
	const one = (flag) => f.next(flag).value;
	return (amount, flag) => {
		const result = [];
		for ( let i=0; i<amount; i++ ) {
			result.push( one( flag ) );
		}
		return result;
	}
}

const f1 = Fibo();
for ( let i=1, f=true; i<15; i++ ) {
	if ( i===4 ) f=false;
	console.log( f1( i, f) );
}