// 사용자에게 원하는 카운트 방향(카운트 다운 또는 카운트 업)을 묻는다.
// 만약 업을 선택하면 가장 큰 숫자를 묻고 1부터 그 숫자까지 출력하라.
// 다운을 선택하면 20 미만의 숫자를 요청하고 20부터 그 숫자까지 출력하라.
// 업 또는 다운이 아닌 다른 것을 선택하면 "I don't understand"를 출력하라.
import { question } from 'readline-sync';

const updown = question('up 또는 down 을 선택해주세요. ');

if (updown.toLowerCase() === 'up') {
  const userMax = question('가장 큰 숫자는? ');
  for (let i = 1; i <= userMax; i++) {
    console.log(i);
  }
} else if (updown.toLowerCase() === 'down') {
  const userMin = question('20 미만 숫자 입력? ');

  for (let j = 20; j >= Number(userMin); j--) {
    console.log(j);
  }
}else {
    console.log("I don't understand');
}
