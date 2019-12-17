
document.addEventListener('DOMContentLoaded', function() {
	function startGame() {
		let plSecret = null;
		let pcSecret = getRandomNum(1, 100);
		console.log('pс secret', pcSecret);

		let play = true; // game flow

		// nodes
		const formSecret = document.getElementById('secret-form'); // player secret number
		const formGuess = document.getElementById('guess-form'); // player guesses
		const pcTitle = document.getElementsByClassName('pc-hint')[0];
		const plTitle = document.getElementsByClassName('pl-hint')[0];

		// restart button
		const container = document.getElementsByClassName('container')[0];
		const restartBtn = document.createElement('button');
		restartBtn.innerText = 'Start new game';
		restartBtn.addEventListener('click', () => {
			startGame();
			formSecret.className = 'visible';
			formGuess.className = '';

			pcTitle.innerText = 'Guess number from 1 to 100. (Tries: 0)';
			plTitle.innerText = 'Guess number from 1 to 100. (Tries: 0)';

			restartBtn.remove()
		});

		function restart(){
			container.appendChild(restartBtn);
		}

		class Guess {
			constructor(secret, guess, node, player) {
				this.player = player || 'Computer';
				this.tries = 0;
				this.guess = guess;
				this.secret = secret;
				this.min = 1;
				this.max = 100;
				this.node = node;
			}

			start() {
				this.tries++;
				let secret = this.secret;
				let guess = this.guess;

				if (secret === guess) {
					play = false;
					this.node.innerText = `${this.player} win! Secret number is ${secret} and it was guessed after ${this.tries} tries`;
					formGuess.className = '';
					restart();
				} else if (guess === 0) {
					this.node.innerText = `Hm... Seems you haven't entered your number or it value is 0. Try again!`
				} else if (guess > secret) {
					this.max = guess - 1;
					this.node.innerText = `${guess} Too big, guess from ${this.min} to ${this.max}`;
				} else if (guess < secret) {
					this.min = guess + 1;  // hint log
					this.node.innerText = `${guess} Too small, guess from ${this.min} to ${this.max}`;
				}
			}
		}

		formSecret.addEventListener('submit', function (e) {
			e.preventDefault();
			let input = document.getElementById('secret');
			plSecret = +input.value;
			input.value = null;
			console.log('player secret', plSecret);

			formSecret.className = '';
			formGuess.className = 'visible';
		});

		const PlGuess = new Guess();
		PlGuess.node = pcTitle;

		const PcGuess = new Guess();
		PcGuess.secret = pcSecret;
		PcGuess.player = 'Player';
		PcGuess.node = plTitle;

		if (play) {
			formGuess.addEventListener('submit', function (e) {
				e.preventDefault();
				let input = document.getElementById('guess');

				PcGuess.guess = +input.value;
				input.value = null;

				PcGuess.start();

				PlGuess.secret = plSecret;
				PlGuess.guess = getRandomNum(PlGuess.min, PlGuess.max);

				if (play){PlGuess.start()}
			});
		}
	}

	startGame();

});

function getRandomNum(min, max) {
	return Math.ceil(Math.random() * (max - min) + min);
}
