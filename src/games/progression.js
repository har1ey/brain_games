#!/usr/bin/env node

import { cons, car, cdr } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGames from '..';

const description = 'What number is missing in this progression?';

const genProgression = (number) => {
  const lostIndex = randomNum(0, 10);
  const d = randomNum(2, 7);
  let numProgression = number;
  let res = '';
  let answer = 0;

  for (let i = 0; i <= 10; i += 1) {
    if (i === lostIndex) {
      res += '.. ';
      numProgression += d;
      answer = numProgression;
    } else {
      numProgression += d;
      res += `${numProgression} `;
    }
  }
  return cons(res, String(answer));
};

export const gameProgression = () => {
  const newRandomNum = randomNum(1, 100);
  const dataProgression = genProgression(newRandomNum);
  const progression = car(dataProgression);
  const trueAnswer = cdr(dataProgression);

  return cons(progression, trueAnswer);
};

const gameProgressionStart = () => startGames(cons(description, gameProgression));

export default gameProgressionStart;
