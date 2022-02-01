// 3) Take an input from the user, and get the initials.
// Richard Michael Coo => RMC
// Albus Wulfric Percival Bryan Dumbledore => AWPBD
// Regulus Arcturus Black => RAB

import readline from 'readline-sync';

const name = readline.question('name? ').split(' ');
const initials = [];

name.forEach((element) => {
	let initial = element[0].toUpperCase();
	initials.push(initial);
});

console.log('output -> ', initials.join(''));
