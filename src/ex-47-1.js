// 사용자에게 숫자를 입력하라고 요청한 다음에 다른 숫자를 입력하라고 하자.
// 두 숫자들을 더한 뒤, 또 다른 숫자를 더하고 싶은지 묻고 "y" 라고 입력하면 다른 숫자를 입력받아 더하고
// 다시 같은 질문을 한다. "y"가 아닌 답을 하면 루프를 종료하고 총합을 출력하라.
import { question, questionInt } from 'readline-sync';

const number1 = questionInt('숫자를 입력하세요');
const number2 = questionInt('다른 숫자를 입력하세요');

let number3 = number1 + number2;
let que1 = null;
let stat = true;

while (stat) {
  que1 = question('다른 숫자를 입력하겠습니까? y/n');

  if (que1.toLowerCase() === 'y') {
    const number4 = questionInt('또 다른 숫자를 입력하세요.?');
    number3 += number4;
  } else {
    console.log('The last number you entered was a ' + number3);
    stat = false;
  }
}
