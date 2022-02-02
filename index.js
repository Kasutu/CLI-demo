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

function getFlag(arr) {
	let bool = false;
	const flagList = ['--language', '--person'];

	arr.forEach((element) => {
		if (flagList.indexOf(element) !== -1) {
			bool = true;
		}
	});
	return bool;
}

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
	if (getFlag(arg)) {
		arg.forEach((element) => {
			processArr.push(element);
		});
	}

	arg.forEach((element) => {
		const chars = element.split('').indexOf(symbol);

		// equal sign not in str
		if (chars !== -1) {
			const sign = element.split(symbol);

			sign.forEach((element) => {
				processArr.push(element);
			});
		}
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

async function display(arr) {
	// index helper logger
	arr.forEach(function (val, index) {
		console.log(`index ${index} argument -> ${val}`);
	});

	// outputs
	console.log('---------------------------------------------');
	console.log('Output -> ', greeting, person);
	console.log('---------------------------------------------');
}

// init
await getInput(args, '=');
console.log(processArr, 'process arr');
await run(processArr);
await display(args);
