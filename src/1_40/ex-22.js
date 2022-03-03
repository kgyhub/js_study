import { question } from 'readline-sync';

const fname1 = question('이름을 소문자로 입력해주세요.');
const fname2 = question('성을 소문자로 입력해주세요.');
const fname11 = fname1.slice(0, 1);
const fname22 = fname2.slice(0, 1);
const fname =
  fname11.toUpperCase() +
  fname1.slice(1) +
  ' ' +
  fname22.toUpperCase() +
  fname2.slice(1);
console.log(`이름 성 : ${fname} `);
