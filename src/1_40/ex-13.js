import { question } from 'readline-sync';

const fnumber = Number(question('20보다 작은 숫자를 입력하세요.'));
if (fnumber >= 20) {
  console.log('Too high');
} else {
  console.log('Thank you');
}
