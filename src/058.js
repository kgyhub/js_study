// 임의로 생성된 두 개의 정수를 더하는 다섯 개의 질문(즉, [숫자1] + [숫자2])이 나오는 수학 퀴즈를 만들자.
// 사용자에게 답을 입력하라고 요청하고 정답을 맞히면 점수를 증가하라.
// 퀴즈가 끝나면 다섯 문제 중에 몇 개를 맞혔는지 출력하라.
import { question } from 'readline-sync';

let userCount = 0;

for (let i = 0; i <= 4; i++) {
  const ramdomNumber1 = Math.floor(Math.random() * (10 - 1) + 1);
  const ramdomNumber2 = Math.floor(Math.random() * (10 - 1) + 1);
  const randomresult = ramdomNumber1 + ramdomNumber2;
  console.log(randomresult);
  const userNumber = question('답을 입력해보세요. ');

  if (Number(randomresult) === Number(userNumber)) {
    userCount++;
    console.log('맞았습니다.');
  } else {
    console.log('틀렸습니다.');
    console.log(
      '정답은 ' + ramdomNumber1 + ' + ' + ramdomNumber2 + '= ' + randomresult
    );
  }
}

console.log('당신이 맞힌 개수는 ' + userCount);
