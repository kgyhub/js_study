/* 사용자에게 대문자로 메시지를 입력하라고 요청한다.
만약 메시지에 소문자가 있다면 모두 대문자로 입력할 때까지 계속해서 다시 입력하라고 요청한다. */

import { question } from 'readline-sync';

let tryagain = true;

while (tryagain) {
  const usermag = question('대문자로 메시지를 입력하세요 : ');
  const checkmag = usermag.toUpperCase();

  console.log(usermag);
  console.log(checkmag);
  if (usermag === checkmag) {
    console.log('Thank you');
    tryagain = false;
  }
}
