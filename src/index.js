import readlineSync from 'readline-sync';
// import { cons, car, cdr, toString } from 'hexlet-pairs';
import { car, cdr } from 'hexlet-pairs';


const startGames = (gameOptions) => {
  const data = gameOptions;
  const description = car(data);

  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);

  let count = 0;

  while (count !== 3) {
    const randomNumber = car(cdr(data));
    const number = randomNumber();

    console.log(`Question: ${number}`);
    const checkNumber = cdr(cdr(data));
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

export default startGames;
