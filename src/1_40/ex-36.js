import { question } from 'readline-sync';

const userName = question(' 사용자 이름 입력.');
const userCnt = question(' 출력 숫자 입력.');

for (let i = 1; i <= userCnt; i++) {
  console.log(userName);
}
