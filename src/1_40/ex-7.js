import { question } from 'readline-sync';

const name = question('이름을 입력하세요.');
const age = question('나이를 입력하세요.');
const newage = Number(age) + 1;
console.log(name + ' next birthday you will be ' + newage);
