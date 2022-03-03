import { question } from 'readline-sync';

const fnumber = Number(question('10과 20(포함) 사이 의 숫자를 입력하세요.'));

if (fnumber >= 10 && fnumber <= 20) {
  console.log('Thank you');
} else {
  console.log('Incorrect answer');
}
