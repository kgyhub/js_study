import { question } from 'readline-sync';

const fname1 = question('이름을 입력해주세요.');
if (fname1.length < 5) {
  const fname2 = question('성을 입력해주세요.');
  const fname = fname1 + fname2;
  console.log(fname.toUpperCase());
} else {
  console.log(fname1.toLowerCase());
}
