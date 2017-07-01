#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGames from '..';

const description = 'Answer "yes" if number even otherwise answer "no"';

const checkNumber = (number) => {
  if (number % 2 === 0) return 'yes';

  return 'no';
};

export const gameEven = () => {
  const newRandomNum = randomNum(1, 100);
  const trueAnswer = checkNumber(newRandomNum);

  return cons(newRandomNum, trueAnswer);
};

const gameEvenStart = () => startGames(cons(description, gameEven));

export default gameEvenStart;
