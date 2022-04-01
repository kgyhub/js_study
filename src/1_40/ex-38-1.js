/* 37번 프로그램을 수정하여 숫자도 입력하도록 요청하자.
 이름의 각 문자를 한 줄에 하나씩 출력하는 작업을 입력한 숫자만 큼 반복하라. */
import { question } from 'readline-sync';

const userName = question(' 사용자 이름 입력.');
const userCnt = question(' 숫자 입력.');

for (let j = 0; j <= userCnt - 1; j++) {
  for (let i = 0; i < userName.length; i++) {
    console.log(userName[i]);
  }
}
