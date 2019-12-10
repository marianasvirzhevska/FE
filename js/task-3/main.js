document.addEventListener('DOMContentLoaded', function() {
	let tries = 0;
	let num;

	const form = document.getElementById('form');
	const input = document.getElementById('input');
	const button = document.getElementById('button');
	const title = document.getElementById('title');
	const container = document.getElementById('container');
	const restartBtn = document.createElement('button');
	restartBtn.innerText = 'Start new game';
	restartBtn.addEventListener('click', start);

	function start(){
		tries = 0;
		num = Math.ceil(getRandomNum(0, 100));
		button.disabled = false;
		input.disabled = false;
		let btn = document.getElementsByTagName('button')[0];
		if(btn){
			btn.remove()
		}
	}
	function restart(){
		container.appendChild(restartBtn);
	}

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		tries++;
		const guess = +input.value;

		if (tries <= 10) {
			if (guess === num) {
				title.innerText = `Congratulations! You got it after ${tries} tries!`;
				restart();
			} else if (guess === 0) {
				title.innerText = 'Seems you haven\'t entered your number or it value is 0. Try again!';
			} else if (guess > num) {
				title.innerText = 'Ooops... Your number is too big. Try another one';
			} else if (guess < num) {
				title.innerText = 'Ooops... Your number is too small. Try another one';
			}
			console.log(`num ${num}`, `entered ${guess}`, `tries ${tries}`);
			input.value = null;
		} else {
			button.disabled = true;
			input.disabled = true;
			restart();
		}
	});

	start();
});

function getRandomNum(min, max) {
	return Math.random() * (max - min) + min;
}