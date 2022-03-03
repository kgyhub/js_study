import { question } from 'readline-sync';

const hnumber = question('100이 넘는 숫자를 입력하세요.');
const tnumber = question('10 미만 숫자를 입력하세요.');
const countnumber = Math.floor(Number(hnumber) / Number(tnumber));
console.log(countnumber);
