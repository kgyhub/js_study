import { question } from 'readline-sync';

const a = question('500이상 정수를 입력하세요.');
const b = Math.sqrt(a);
console.log(b.toFixed(2));
