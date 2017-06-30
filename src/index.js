import readlineSync from 'readline-sync';
// import { cons, car, cdr, toString } from 'hexlet-pairs';
import { car, cdr, isPair } from 'hexlet-pairs';

// fix hexlet-pairs toString
const toString = (pair) => {
  const rec = (p) => {
    if (!isPair(p)) {
      return String(p);
    }
    const left = car(p);
    const right = cdr(p);
    return `${rec(left)} ${rec(right)}`;
  };

  return rec(pair);
};

const startGames = (gameOptions) => {
  const description = car(gameOptions);

  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let count = 0;

  while (count !== 3) {
    const gameData = cdr(gameOptions)();

    const newRandomNum = toString(car(gameData));
    //  const newRandomNum = (isPair(car(gameData))) ? toString(car(gameData))
    // : String(car(gameData));

    const trueAnswer = cdr(gameData);

    console.log(`Question: ${newRandomNum}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      break;
    } else {
      console.log('Correct!');
      count += 1;
    }
  }

  if (count === 3) console.log(`Congratulations, ${name}!`);
  else console.log(`Let's try again, ${name}!`);
};

export default startGames;
