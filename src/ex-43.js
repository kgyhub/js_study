import { question } from 'readline-sync';

const updown = question('up 또는 down 을 선택해주세요. ');
let userCnt = 0;

if (updown.toLowerCase() === 'up') {
  userCnt = question('가장 큰숫자를 적으세요. ');
  for (let i = 1; i <= Number(userCnt); i++) {
    console.log(i);
  }
} else if (updown.toLowerCase() === 'down') {
  userCnt = question('20 미만의 숫자를 적으세요. ');
  for (let i = 20; i >= Number(userCnt); i--) {
    console.log(i);
  }
} else {
  console.log("I don't understand");
}
