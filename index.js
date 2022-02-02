/* 

✔️ 1) Support --language=tl --person=Mike as CLI args

✔️ 2) fix the bug that greets the full path 😂 of 
			Node.js when the --person flag isn't given.

*/

let language = 'en';
let greeting = 'Hello';
let person = '';
let args = process.argv.splice(2);
const processArr = [];

// language selector
function selectLanguage(language) {
	switch (language) {
		case 'es':
			greeting = 'Hola';
			break;
		case 'jp':
			greeting = 'Konnichiwa';
			break;
		case 'tl':
			greeting = 'Mano ka?';
			break;
		default:
			greeting = 'Hello';
	}
}

// sorts the input from arguments
async function getInput(arg, symbol) {
	arg.forEach((element) => {
		if (element.split('').indexOf(symbol) !== -1) {
			// found
			// removes the symbol
			element.split(symbol).forEach((element) => {
				processArr.push(element);
			});
		} else {
			// not found
			// default flags space separated is found
			processArr.push(element);
		}
	});
}

async function run(arr) {
	let languageFlagIndex = arr.indexOf('--language');
	let personFlagIndex = arr.indexOf('--person');

	// language input
	if (languageFlagIndex !== -1) {
		selectLanguage(arr[languageFlagIndex + 1]);
	}

	// person input
	if (personFlagIndex !== -1) {
		person = arr[personFlagIndex + 1];
	}
}

async function display(argsArray, processArray) {
	// index helper logger
	console.log('INPUT ARGS:');

	argsArray.forEach(function (val, index) {
		console.log(`	index ${index} argument -> ${val}`);
	});

	console.log('=============================================');
	console.log('PROCESS:');

	processArray.forEach(function (val, index) {
		console.log(`	index ${index} argument -> ${val}`);
	});

	// outputs
	console.log('---------------------------------------------');
	console.log('Output -> ', greeting, person);
	console.log('---------------------------------------------');
}

// init
await getInput(args, '=');
await run(processArr);
await display(args, processArr);
