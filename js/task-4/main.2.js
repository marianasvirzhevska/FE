document.addEventListener('DOMContentLoaded', function() {
	const formSecret = document.getElementById('secret-form'); // player secret number
	const formGuess = document.getElementById('guess-form'); // player guesses

	const computerHint = document.querySelector('.pc-hint');
	const playerHint = document.querySelector('.pl-hint');

	const player = new GuessGame('Player');
	const computer = new GuessGame('Computer');


	formSecret.addEventListener('submit', function (e) {
		e.preventDefault();

		const input = document.getElementById('secret');
		const secret = +input.value;

		player.start(getRandomNum(1, 100));
		computer.start(secret);

		input.value = null;
		formSecret.className = '';
		formGuess.className = 'visible';
	});

	formGuess.addEventListener('submit', function (e) {
		e.preventDefault();

		const input = document.getElementById('guess');
		const attempt = +input.value;

		player.guess(attempt);
		computer.guess(getRandomNum(computer.min, computer.max));

		input.value = null;
		render(player, playerHint);
		render(computer, computerHint);
	});

	function render(game, hint) {
		if (game.end) {
			hint.innerText = `${game.player} win! Secret number is ${game.secret} and it was guessed after ${game.tries} tries`;
			formSecret.className = 'visible';
			formGuess.className = '';
			game.reset();

			return;
		}

		hint.innerText = game.attempt > game.secret
			? `${game.attempt} Too big, guess from ${game.min} to ${game.max}`
			: `${game.attempt} Too small, guess from ${game.min} to ${game.max}`;
	}
});

class GuessGame {
	attempts = [];
	min = 1;
	max = 100;
	end = false;

	get tries() {
		return this.attempts.length;
	}

	get attempt() {
		return this.attempts[this.attempts.length - 1];
	}

	constructor(player) {
		this.player = player;
	}

	start(secret) {
		this.secret = secret;
	}

	guess(num) {
		this.attempts.push(num);

		if (num === this.secret) {
			this.end = true;
		}
		else if (num > this.secret) {
			this.max = num - 1;
		}
		else if (num < this.secret) {
			this.min = num + 1;
		}
	}

	reset() {
		this.attempts = [];
		this.player = null;
		this.secret = null;
		this.end = false;
	}
}

function getRandomNum(min, max) {
	return Math.ceil(Math.random() * (max - min) + min);
}
