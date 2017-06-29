import readlineSync from 'readline-sync';
// import { cons, car, cdr, toString } from 'hexlet-pairs';
import { car, cdr } from 'hexlet-pairs';


const startGames = (gameOptions) => {
  const description = car(gameOptions);

  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let count = 0;

  while (count !== 3) {
    const itsGame = cdr(gameOptions)(); // Oo =)
    const randomNum = car(itsGame);
    const checkAnswer = cdr(itsGame);

    console.log(`Question: ${randomNum}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== checkAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkAnswer}'.`);
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
