import { question } from 'readline-sync';

const fname = question('이름을 입력해주세요.');
const fnamelen = fname.length;
console.log(`이름 : ${fname} / 길이 : ${fnamelen}`);
