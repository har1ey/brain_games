#!/usr/bin/env node
//  import readlineSync from 'readline-sync';
//  import { cons, car, cdr, toString } from 'hexlet-pairs';
import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
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


export const gameBalance = () => {
  const newRandomNum = randomNum(10, 10000);
  const trueAnswer = getBalanceNumber(newRandomNum);

  return cons(newRandomNum, trueAnswer);
};

const gameBalanceStart = () => startGames(cons(description, gameBalance));

export default gameBalanceStart;
