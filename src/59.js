// 다섯 개의 색상을 표시하고 그들 중 하나를 사용자에게 선택하라고 요청한다.
// 만약 프로그램이 선택한 것과 동일하면 "Well done"이라고 출력하 고,
// 그렇지 않다면 컴퓨터가 선택한 색상이 포함된 위트 있는 문장을 출력하라.
// 예: "I bet you are GREEN with envy" 또는
// "You are probably feeling BLUE right now".
// 다시 맞혀 보라고 사용자에게 색상을 입력하라고 한다.
// 사용자가 맞힐 때까지 이 작업을 반복한다.
import { question } from 'readline-sync';

const color = ['red', 'yellow', 'green', 'blue', 'pink'];
console.log(color);
const ramdomNumber = Math.floor(Math.random() * 5);
const randomColor = color[ramdomNumber];

console.log(color[ramdomNumber]);
const answers = [
  'I bet you are RED with envy',
  'You are probably feeling YELLOW right now',
  'I bet you are green with envy',
  'You are probably feeling blue right now',
  'You are probably feeling pink right now',
];

let stat = true;
while (stat) {
  const userColor = question('목록에있는 색상을 선택하세요.');
  if (userColor === randomColor) {
    console.log('well done');
    stat = false;
  } else {
    console.log(answers[ramdomNumber]);
  }
}
