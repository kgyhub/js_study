// 사용자의 이름을 입력하라고 요청한 뒤, 그 이름을 세 번 출력하라.

import { question } from 'readline-sync';

const userName = question('이름을 입력 : ');
const userCnt = question('숫자 : ');

for (let i = 0; i < userCnt; i++) {
  console.log(i);
  console.log(userName);
}
