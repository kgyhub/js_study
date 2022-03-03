import { question } from 'readline-sync';

const a = question('소수점이하 자릿수가 많은 숫자를 입력하세요.');
const b = Number(a) * 2;
console.log(b.toFixed(2));

// https://deeplify.dev/front-end/js/decimal-point-control : 소수점 설명
