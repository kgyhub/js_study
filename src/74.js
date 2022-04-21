// 열 개의 색상이 담긴 배열을 생성한다.
// 사용자에게 0에서 4 사이의 시작 번호와 5에서 9 사이의 끝 번호를 입력하라고 요청하고
// 입력된 시작 번호부터 끝 번호까지의 색상을 출력하라.
import { question } from 'readline-sync';

const colorList = [
  'red',
  'yellow',
  'blue',
  'pink',
  'black',
  'green',
  'gray',
  'white',
  'purple',
  'sky',
];

const startNumber = question('0-4 사이의 시작번호를 입력하세요. : ');
const endNumber = question('5-9 사이의 끝번호를 입력하세요. : ');

console.log(colorList.slice(startNumber, endNumber + 1));
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
