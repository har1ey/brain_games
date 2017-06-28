#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"\n');

const actual = welcome();


const even = () => {
  let count = 0;

  while (count !== 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');


    if ((answer !== 'yes') && (answer !== 'no')) {
      console.log('Please correct input: \'yes\' or \'no\'');
      break;
    } else if (((answer === 'yes') === (number % 2 === 0)) || ((answer === 'no') === (number % 2 !== 0))) {
      console.log('Correct!');
      count += 1;
    } else if (answer === 'yes') {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      break;
    } else {
      console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      break;
    }
  }

  if (count === 3) console.log(`Congratulations, ${actual}!`);
  else console.log(`Let's try again, ${actual}!`);
};

export default even;
