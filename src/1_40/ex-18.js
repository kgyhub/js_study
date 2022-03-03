import { question } from 'readline-sync';

const fnumber = Number(question('숫자를 입력해주세요.'));
if (fnumber < 10) {
  console.log('Too low');
} else if (fnumber >= 10 && fnumber <= 20) {
  console.log('Correct');
} else {
  console.log('Too high');
}
