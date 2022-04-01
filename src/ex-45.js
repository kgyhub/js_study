import { question } from 'readline-sync';

let total = 0;
let userCnt = 0;
while (total <= 50) {
  userCnt = question('숫자 입력: ');
  total += Number(userCnt);

  console.log('The total is ' + total);
}
