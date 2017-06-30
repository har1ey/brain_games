#!/usr/bin/env node
//  import readlineSync from 'readline-sync';
//  import { cons, car, cdr, toString } from 'hexlet-pairs';
import { cons } from 'hexlet-pairs';

import startGames from '..';

const description = 'Answer "yes" if number even otherwise answer "no"\n';

const checkNumber = (number) => {
  if (number % 2 === 0) return 'yes';

  return 'no';
};

const randomNum = () => Math.floor(Math.random() * 100);

export const gameEven = () => {
  const newRandomNum = randomNum();
  const trueAnswer = checkNumber(newRandomNum);

  return cons(newRandomNum, trueAnswer);
};

const gameEvenStart = () => startGames(cons(description, gameEven));

export default gameEvenStart;
