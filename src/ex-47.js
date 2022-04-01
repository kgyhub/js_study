import { question } from 'readline-sync';

const userCnt1 = question('첫번째 숫자 입력 : ');
const userCnt2 = question('두번째 숫자 입력 : ');

let result = Number(userCnt1) + Number(userCnt2);
let yn = 'n';
let plusNumber = 0;

while (true) {
  yn = question('또 다른 숫자를 더하실건가요? y/n ');
  if (yn.toLowerCase() === 'y') {
    plusNumber = question('숫자 입력 하세요 : ');
    result += Number(plusNumber);
    console.log('합 : ' + result);
  } else {
    console.log('합 : ' + result);
    break;
  }
}
