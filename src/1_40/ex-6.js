import { question } from 'readline-sync';

const number1 = question('처음에 갖고 있었던 피자 조각수를 입력하세요.');
const number2 = question('먹은 피자 조각수를 입력하세요.');
const hapnumber = Number(number1) - Number(number2);
console.log('남은 피자 조각수는  ' + hapnumber + ' 조각 입니다.');
