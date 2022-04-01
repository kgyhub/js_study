import { question } from 'readline-sync';

let total = 0;
let userCnt = 0;

for (let i = 0; i <= 4; i++) {
  userCnt = question(i + 1 + '. 숫자 입력 : ');
  const yn = question(' total 에 더할건가요? (y/n) ');
  if (yn.toLowerCase() === 'y') {
    total += Number(userCnt);
  }
}

console.log('최종 total = ' + total);
