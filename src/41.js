import { question } from 'readline-sync';
const userName = question('이름을 입력하세요 : ');
const userNumber = question('숫자를 입력하세요 : ');

if (userNumber < 10) {
  for (let i = 0; i < userNumber; i++) {
    console.log(userName);
  }
} else {
  for (let j = 0; j < 3; j++) {
    console.log('Too high');
  }
}
