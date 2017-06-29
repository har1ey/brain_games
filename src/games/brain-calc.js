#!/usr/bin/env node
//  import readlineSync from 'readline-sync';
//  import { cons, car, cdr, toString } from 'hexlet-pairs';
import { cons } from 'hexlet-pairs';

import startGames from '..';

const description = 'What is the result of the expression?';

const checkNumber = (expression) => {
  const exp = expression.split(' ');

  switch (exp[1]) {
    case '+': {
      return String(Number(exp[0]) + Number(exp[2]));
    }
    case '-': {
      return String(Number(exp[0]) - Number(exp[2]));
    }
    default: {
      return String(Number(exp[0]) * Number(exp[2]));
    }
  }
};

const genRandom = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const operation = Math.floor((Math.random() * 3) + 1);

  switch (operation) {
    case 1: {
      return `${a} + ${b} `;
    }
    case 2: {
      return `${a} - ${b} `;
    }
    default: {
      return `${a} * ${b} `;
    }
  }
};

export const gameCalc = () => {
  const randomNum = genRandom();
  const trueAnswer = checkNumber(randomNum);

  return cons(randomNum, trueAnswer);
};

const gameEvenStart = () => startGames(cons(description, gameCalc));

export default gameEvenStart;
