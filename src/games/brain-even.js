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

const genRandom = () => Math.floor(Math.random() * 100);

const thisGame = () => startGames(cons(description, cons(genRandom, checkNumber)));
//  const checkAnswer = checkNumber(number);

export default thisGame;
