import { question } from 'readline-sync';

const radius = question('원의 반지름 입력.');
const circumarea = Number(radius) * Number(radius) * Math.PI;
console.log('원의 넓이는 ' + circumarea + ' 입니다.');
