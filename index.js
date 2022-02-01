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

// init
await getInput(args, '=');
await run(processArr);
await display();

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
	arg.forEach((elements) => {
		const chars = elements.split('').indexOf(symbol);

		if (chars !== -1) {
			const sign = elements.split(symbol);

			sign.forEach((element) => {
				processArr.push(element);
			});
		}

		return; // do nothing
	});
}

async function run(arr) {
	let languageFlagIndex = arr.indexOf('--language');
	let personFlagIndex = arr.indexOf('--person');

	// console.log({ languageFlagIndex }, { personFlagIndex });

	// language input
	if (languageFlagIndex !== -1) {
		selectLanguage(arr[languageFlagIndex + 1]);
	}

	// person input
	if (personFlagIndex !== -1) {
		person = arr[personFlagIndex + 1];
	}
}

async function display() {
	// index helper logger
	args.forEach(function (val, index) {
		console.log(`index ${index} argument -> ${val}`);
	});

	// outputs
	console.log('---------------------------------------------');
	console.log('Output -> ', greeting, person);
	console.log('---------------------------------------------');
}
