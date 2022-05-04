// 단어를 입력하라고 요청한 뒤, 그 단어의 문자를 한 줄 에 하나씩 거꾸로 출력하라. 예를 들어, 'Hello'라고 입 력했다면 다음과 같이 출력되어야 한다.
import { question } from 'readline-sync';

const userWord = question('Enter a word : ');

for (let i = userWord.length - 1; i >= 0; i--) {
  console.log(userWord[i]);
}
