import { question } from 'readline-sync';

const ftext = question('영어로 아무 글자나 입력해주세요.');
console.log(`대문자로 출력 ${ftext.toUpperCase()}`);
