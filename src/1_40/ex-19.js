import { question } from 'readline-sync';

const fnumber = Number(question('1이나 2 또는 3을 입력해주세요.'));
if (fnumber === 1) {
  console.log('Thank you');
} else if (fnumber === 2) {
  console.log('well done');
} else if (fnumber === 3) {
  console.log('Correct');
} else {
  console.log('Error message');
}
