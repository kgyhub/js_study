import { question } from 'readline-sync';

const userName = question(' 사용자 이름 입력.');

for (let i = 0; i <= userName.length - 1; i++) {
  const oneChar = userName.slice(i, i + 1);
  console.log(oneChar);
}
