#!/usr/bin/env node
//  import readlineSync from 'readline-sync';
//  import { cons, car, cdr, toString } from 'hexlet-pairs';
import { cons } from 'hexlet-pairs';

import startGames from '..';

const description = 'Balance the given number.';

const getBalanceNumber = (number) => {
  const arrNumbers = Array.from(number.toString()).map(Number);
  const len = arrNumbers.length;
  let sumNumbers = 0;
  let res = '';

  for (let i = 0; i < len; i += 1) {
    sumNumbers += arrNumbers[i];
  }

  const average = Math.floor(sumNumbers / len);
  const modulo = sumNumbers % len;

  for (let i = 0; i < (len - modulo); i += 1) {
    res += String(average);
  }

  for (let i = 0; i < modulo; i += 1) {
    res += String(average + 1);
  }

  return res;
};


const randomNum = () => Math.floor((Math.random() * 9991) + 10);

export const gameBalance = () => {
  const newRandomNum = randomNum();
  const trueAnswer = getBalanceNumber(newRandomNum);

  return cons(newRandomNum, trueAnswer);
};

const gameEvenStart = () => startGames(cons(description, gameBalance));

export default gameEvenStart;
