import { question } from 'readline-sync';

const userName = question(' 사용자 이름 입력.');

for (let i = 0; i <= 2; i++) {
  console.log(userName);
}
