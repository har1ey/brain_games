#!/usr/bin/env node

import { cons, car, cdr } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGames from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (numbers) => {
  let a = car(numbers);
  let b = cdr(numbers);

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const genRandomNums = () => {
  const a = randomNum(1, 100);
  const b = randomNum(1, 100);

  return cons(a, b);
};

export const gameGCD = () => {
  const newRandomNums = genRandomNums();
  const trueAnswer = String(getGCD(newRandomNums));

  return cons(newRandomNums, trueAnswer);
};

const gameGCDStart = () => startGames(cons(description, gameGCD));

export default gameGCDStart;
