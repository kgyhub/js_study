import { question } from 'readline-sync';

const radius = question(' 원기둥 의 반지름 입력.');
const depth = question(' 원기둥 의 높이 입력.');

const calcul = Number(radius) * Number(radius) * Math.PI * Number(depth);
const decimal = String(calcul).split('.');
console.log(calcul);
console.log(decimal);
console.log(decimal[0] + '.' + decimal[1].slice(0, 2));

const volume = calcul.toFixed(3); // 반올림 됨.

console.log('원기둥 부피는 ' + volume);
