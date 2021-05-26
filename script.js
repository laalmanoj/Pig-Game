'use strict';

let rollButton = document.querySelector('.btn--roll');
let csplayer1 = document.getElementById('current--0');
let csplayer2 = document.getElementById('current--1');

let totalscore1 = document.getElementById('score--0');
let totalscore2 = document.getElementById('score--1');
let holds = document.querySelector('.btn--hold');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

document.querySelector('.dice').classList.add('hidden');
let score = [ 0, 0 ];
let currentscore = 0;
let activeplayer = 0;
let previousplayer = 0;
const roll = function() {
	let randomNumber = Math.trunc(Math.random() * 6) + 1;
	// document.querySelector('.current-score').textContent = randomNumber;
	console.log(randomNumber);
	document.querySelector('.dice').classList.remove('hidden');
	document.querySelector('.dice').src = `./dice-${randomNumber}.png`;

	if (randomNumber !== 1) {
		//add diceroll to currentscore
		currentscore += randomNumber;
		document.getElementById(`current--${activeplayer}`).textContent = currentscore;

		//add current score to score
	} else {
		//switch player
		activeplayer = activeplayer === 0 ? 1 : 0;

		previousplayer = activeplayer === 1 ? 0 : 1;

		document.getElementById(`current--${previousplayer}`).textContent = 0;
		currentscore = 0;

		// document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
		// document.querySelector(`.player--${previousplayer}`).classList.remove('player--active');
		player0.classList.toggle('player--active');
		player1.classList.toggle('player--active');
	}
};

const hold = function() {
	score[activeplayer] += currentscore;
	document.querySelector(`#score--${activeplayer}`).textContent = score[activeplayer];

	if (score[activeplayer] >= 100) {
		document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
		document.querySelector('.btn--roll').classList.add('nohover');
		document.querySelector('.btn--hold').classList.add('nohover');
	} else {
		activeplayer = activeplayer === 0 ? 1 : 0;

		previousplayer = activeplayer === 1 ? 0 : 1;
		document.getElementById(`current--${previousplayer}`).textContent = 0;
		currentscore = 0;
	}
};

holds.addEventListener('click', hold);
rollButton.addEventListener('click', roll);
