#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startEven from '../games/even';
import startCalc from '../games/calc';
import startGCD from '../games/gcd';
import startBalance from '../games/balance';
import startProgression from '../games/progression';
import startPrime from '../games/prime';

console.log('-=Game list=-');
console.log('1 - Even\\Odd number?');
console.log('2 - Calculator.');
console.log('3 - The greatest common divisor.');
console.log('4 - Balance.');
console.log('5 - Progression.');
console.log('6 - Simple number?');

const choise = readlineSync.question('Choise game: ');

switch (choise) {
  case '1':
    startEven();
    break;
  case '2':
    startCalc();
    break;
  case '3':
    startGCD();
    break;
  case '4':
    startBalance();
    break;
  case '5':
    startProgression();
    break;
  case '6':
    startPrime();
    break;
  default:
    console.log('Bad choise =(');
}
