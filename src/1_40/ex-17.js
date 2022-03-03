import { question } from 'readline-sync';

const nage = Number(question('나이를 입력해주세요.'));
if (nage >= 18) {
  console.log('you can vote');
} else if (nage === 17) {
  console.log('You can learn to drive');
} else if (nage === 16) {
  console.log('You can buy a lottery ticket');
} else {
  console.log('you can go Trick-or-Treating');
}
