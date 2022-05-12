// 사용자에게 숫자 다섯 개를 입력하라고 요청한다.
// 입력된 숫자를 정렬하고 사용자에게 표시한다.
// 배열의 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 입력된 숫자를 배열에서 삭제하고 새로운 배열에 그 값을 저장하라
import { question } from 'readline-sync';

const arrayNumbers = [];
let userNumber = 0;
for (let i = 0; i <= 4; i++) {
  userNumber = question('숫자 다섯개를 입력하세요' + (i + 1) + '번째: ');
  arrayNumbers.push(Number(userNumber));
}

arrayNumbers.sort();
console.log(arrayNumbers);

userNumber = question('배열의 숫자중 하나를 고르세요: ');
