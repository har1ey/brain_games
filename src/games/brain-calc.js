#!/usr/bin/env node
//  import readlineSync from 'readline-sync';
//  import { cons, car, cdr, toString } from 'hexlet-pairs';
import { cons, car, cdr } from 'hexlet-pairs';

import startGames from '..';

const description = 'What is the result of the expression?';

const calcExpression = (expression) => {
  const a = car(expression);
  const b = cdr(cdr(expression));
  const operation = car(cdr(expression));

  switch (operation) {
    case '+': {
      return a + b;
    }
    case '-': {
      return a - b;
    }
    default: {
      return a * b;
    }
  }
};

const createExpression = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const operation = Math.floor((Math.random() * 3) + 1);

  switch (operation) {
    case 1: {
      return cons(a, cons('+', b));
    }
    case 2: {
      return cons(a, cons('-', b));
    }
    default: {
      return cons(a, cons('*', b));
    }
  }
};

export const gameCalc = () => {
  const newExpression = createExpression();
  const trueAnswer = String(calcExpression(newExpression));

  return cons(newExpression, trueAnswer);
};

const gameCalcStart = () => startGames(cons(description, gameCalc));

export default gameCalcStart;
