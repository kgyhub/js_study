// 세자리 숫자 네 개가 담긴 배열을 생성한다.
// 배열의 각 항목을 한 줄에 하나씩 출력하여 사용자에게 표시한다.
// 사용자에게 세 자리의 숫자를 입력하라고 요청한다.
// 만약 입력한 숫자가 배열에 있는 숫자들 중 하나라면 배열에 그 숫자가 위치한 인덱스를 출력하라.
// 그렇지 않다면 "That is not in the list"라는 메시지를 출력하라.
import { question } from 'readline-sync';

const arrayNumbers = [111, 222, 333, 444];

for (const element of arrayNumbers) {
  console.log(element);
}

const userNumber = question('세자리 숫자 입력 : ');
const userIndex = arrayNumbers.indexOf(Number(userNumber));

if (userIndex < 0) {
  console.log('That is not in the list');
} else {
  console.log('your Index is : ' + userIndex);
}
