// 다섯 개의 정수를 입력받아 배열에 저장한다. 정렬을 한 후 역순으로 표시하라.
import { question } from 'readline-sync';

const arrayNumbers = [];
let userNumber = 0;
for (let i = 0; i <= 4; i++) {
  userNumber = question('정수를 입력하세요 ' + (i + 1) + '번째 : ');
  arrayNumbers.push(userNumber);
}

arrayNumbers.sort();
console.log(arrayNumbers.reverse());
