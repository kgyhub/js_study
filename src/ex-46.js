import { question } from 'readline-sync';

let userCnt = 0;

while (userCnt <= 5) {
  userCnt = question('숫자 입력: ');
}

console.log('The last number you entered was a ' + userCnt);
