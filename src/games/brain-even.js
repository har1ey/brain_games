#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"\n');

const actual = welcome();

const checkNumber = (number) => {
  if (number % 2 === 0) return 'yes';

  return 'no';
};

const thisGame = () => {
  let count = 0;

  while (count !== 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const checkAnswer = checkNumber(number);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== checkAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkAnswer}'.`);
      break;
    } else {
      console.log('Correct!');
      count += 1;
    }
  }

  if (count === 3) console.log(`Congratulations, ${actual}!`);
  else console.log(`Let's try again, ${actual}!`);
};

export default thisGame;
