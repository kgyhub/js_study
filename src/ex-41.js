import { question } from 'readline-sync';

const userName = question(' 이름 입력 : ');
const userCnt = question(' 숫자 입력 : ');

if (userCnt <= 9) {
  for (let i = 0; i < Number(userCnt); i++) {
    console.log(userName);
  }
} else {
  for (let i = 0; i <= 2; i++) {
    console.log('Too high');
  }
}
