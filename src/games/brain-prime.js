#!/usr/bin/env node
//  import readlineSync from 'readline-sync';
//  import { cons, car, cdr, toString } from 'hexlet-pairs';
import { cons } from 'hexlet-pairs';
import randomNum from '../functions';

import startGames from '..';

const description = 'Answer "yes" if number prime otherwise answer "no"\n';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};


export const gamePrime = () => {
  const newRandomNum = randomNum(1, 100);
  const trueAnswer = isPrime(newRandomNum) ? 'yes' : 'no';

  return cons(newRandomNum, trueAnswer);
};

const gamePrimeStart = () => startGames(cons(description, gamePrime));

export default gamePrimeStart;
