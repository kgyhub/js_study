import { question } from 'readline-sync';

const firstNumber = question(' 첫번째 숫자 입력.');
const secondNumber = question(' 두번째 숫자 입력.');
const result = Math.floor(Number(firstNumber) / Number(secondNumber));
const remain = Number(firstNumber) % Number(secondNumber);

console.log(
  firstNumber +
    ' divided by ' +
    secondNumber +
    ' is ' +
    result +
    ' with ' +
    remain +
    ' remaining'
);
