import { question } from 'readline-sync';

const number1 = question('숫자1을 입력하세요.');
const number2 = question('숫자2를 입력하세요.');
const number3 = question('숫자3를 입력하세요.');
const hapnumber = (Number(number1) + Number(number2)) * Number(number3);
console.log('The answer is ' + hapnumber);
