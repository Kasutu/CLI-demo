// 3) Take an input from the user, and get the initials.
// Richard Michael Coo => RMC
// Albus Wulfric Percival Bryan Dumbledore => AWPBD
// Regulus Arcturus Black => RAB

// import readline using `npm install readline-sync`
import readline from 'readline-sync';

// make a question and split everything with a ' ' (space) separator
// to make an array of words
const name = readline.question('name? ').split(' ');
console.log(name);

const initials = [];

// loop through the array and find the first index and push it to an array
// or just `initials += initial` add it to a string
// Richard Michael Coo => ['Richard', 'Michael', 'Coo']
// outputs -> RMC___________R__________M__________C
name.forEach((element) => {
	let initial = element[0].toUpperCase();
	initials.push(initial);
});

// Output
console.log('output -> ', initials.join(''));
