#!/usr/bin/env node
//  import readlineSync from 'readline-sync';
//  import { cons, car, cdr, toString } from 'hexlet-pairs';
import { cons } from 'hexlet-pairs';

import startGames from '..';

const description = 'Find the greatest common divisor of given numbers.';

const checkNumber = (numbers) => {
  const nums = numbers.split(' ');
  let a = nums[0];
  let b = nums[1];

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return String((Number(a) + Number(b)));
};

const genRandom = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);

  return `${a} ${b}`;
};

export const gameGCD = () => {
  const randomNum = genRandom();
  const trueAnswer = checkNumber(randomNum);

  return cons(randomNum, trueAnswer);
};

const gameGCDStart = () => startGames(cons(description, gameGCD));

export default gameGCDStart;
