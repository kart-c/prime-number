const readlineSync = require('readline-sync');
const chalk = require('chalk');

const userName = readlineSync.question(chalk.red('What is your name? '));
console.log(
	chalk.red(
		`Welcome ${chalk.yellowBright(
			userName
		)}! Let's check if your birthday is a prime number or not.`
	)
);

let userMonthOfBirth = readlineSync.questionInt(chalk.blue('Enter your birth month... '), {
	limitMessage: 'Enter valid numbers',
});

while (
	userMonthOfBirth >= 13 ||
	userMonthOfBirth === 0 ||
	Math.sign(userMonthOfBirth) === -1 ||
	userMonthOfBirth.toString().includes('.') === true
) {
	userMonthOfBirth = readlineSync.questionInt(chalk.red('Enter valid month '));
}

let userDateOfBirth = readlineSync.questionInt(chalk.blue('Enter your birth date... '), {
	limitMessage: 'Enter valid numbers',
});

while (
	userDateOfBirth >= 32 ||
	userDateOfBirth === 0 ||
	Math.sign(userDateOfBirth) === -1 ||
	userDateOfBirth.toString().includes('.') === true
) {
	userDateOfBirth = readlineSync.questionInt(chalk.red('Enter valid date format '));
}

function checkDate() {
	const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	while (userDateOfBirth > daysInMonths[userMonthOfBirth - 1]) {
		userDateOfBirth = readlineSync.questionInt(
			chalk.red(`Your birth month does not have this date. Enter again!! `)
		);
	}
}

checkDate();

function reducer(accumlator, currentValue) {
	return Number(accumlator) + Number(currentValue);
}

function sum() {
	const dateString = userDateOfBirth.toString().split('');
	const monthString = userMonthOfBirth.toString().split('');
	const dateSum = dateString.reduce(reducer);
	const monthSum = monthString.reduce(reducer);
	const totalSum = Number(dateSum + monthSum);
	checkPrimeNumber(totalSum);
}

function checkPrimeNumber(num) {
	console.log(typeof num);
	console.log(chalk.bgWhite.black.dim('Calculating...'));
	setTimeout(() => {
		console.log(`Provided date: ${userDateOfBirth}....`);
		console.log(`Provided month: ${userMonthOfBirth}....`);
		console.log('-------');
	}, 500);
	setTimeout(() => {
		console.log(chalk.bgWhite.black.dim('Almost there.....'));
	}, 1500);
	setTimeout(() => {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				console.log(chalk.red('Your birthdate is not a prime number 😔'));
				break;
			} else {
				console.log(chalk.blue('Congrats your birthdate is a prime number!!! 🥳'));
				break;
			}
		}
	}, 3000);
}

sum();
