// Compnum이라는 이름의 변수를 생성하고 50을 설정한다. 사용자에게 숫자를 입력하라고 요청하고 입력한 값이 compnum과 동일하지 않다면
// 입력한 값이 높은지 낮은지를 알려주고 다시 맞춰보라고 묻는다.
// 만약 compnum의 값과 일치하면 "Well done, you took [카운트] attempts"라는 메시지를 출력하라.
import { questionInt } from 'readline-sync';

const compnum = 50;
let que = 0;
let count = 1;

while (compnum !== que) {
  que = questionInt('enter the number : ');
  if (que < compnum) {
    console.log('낮습니다.');
    count++;
  } else if (que > compnum) {
    console.log('높습니다.');
    count++;
  } else {
    console.log('Well done, you took ' + count + ' attempts');
  }
}
