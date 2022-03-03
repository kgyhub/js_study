import { question } from 'readline-sync';

const fname1 = question('이름을 입력해주세요.');
const fname2 = question('성을 입력해주세요.');
const fname = fname1 + ' ' + fname2;
const fnamelen = fname.length;
console.log(`이름 성 : ${fname} / 전체길이 : ${fnamelen}`);
