// 시 한 구절을 사용자에게 표시하고
// 시작 인덱스와 마지막 인덱스를 입력하도록 요청한다. 입력한 두 값 사이의 문자를 출력하라.

import { question } from 'readline-sync';

const poem = '과거를팔아'; // 오늘을 살지 말 것 현실이 미래를 잡아먹지 말 것 미래를 말하며 과거를 묻어버리거나 미래를 내세워 오늘 할 일을 흐리지 말 것';

console.log(poem);
const startIndex = question('시작 인덱스 (0-76): ');
let endIndex = question('마지막 인덱스 (0-76): ');
endIndex = Number(endIndex) + 1;
const userPoem = poem.slice(startIndex, endIndex);

console.log(userPoem);
console.log('시의 문자열 길이 ' + poem.length);
