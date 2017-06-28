import readlineSync from 'readline-sync';


const welcome = () => {
  const actual = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${actual}!\n`);

  return actual;
};

export default welcome;
