import { question } from 'readline-sync';

const a = question('소수점이하 자릿수가 많은 숫자를 입력하세요.');
const b = Number(a) * 2;
console.log(b);
