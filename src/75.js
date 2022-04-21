// 사용자에게 대문자로 메시지를 입력하라고 요청한다.
// 만약 메시지 에 소문자가 있다면 모두 대문자로 입력할 때까지 계속해서 다시 입력하라고 요청한다.
import { question } from 'readline-sync';

let stat = true;
while (stat) {
  const upperCase = question('대문자 메시지를 입력하세요. : ');
  const checkCase = upperCase.toUpperCase();
  if (upperCase === checkCase) {
    //
    stat = false;
  }
}
