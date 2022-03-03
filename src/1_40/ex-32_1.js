import { question } from 'readline-sync';

const radius = question('원기둥의 반지름 ');
const depth = question('원기둥의 깊이 ');

const result = Number(radius) * Number(radius) * Math.PI * depth; // 원기둥의 부피

console.log('원기둥의 부피는 ' + result.toFixed(3));
