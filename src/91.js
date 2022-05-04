// 다섯 개의 숫자(이 숫자들 중 2개는 반복 되어야 함)를 담고 있는 배열을 생성한다.
// 사용자에게 배열 전체를 출력한다.
// 사용자에게 배열 속에 있는 숫자들 하나를 입력하라고 요청한 뒤,
// 입력한 숫자가 배열에 몇 개 있는지 메시지를 표시하라.
import { question } from 'readline-sync';

const userNumber = [100, 100, 300, 400, 500];
console.log(userNumber);

const seletNumber = question('배열 속 숫자 중 하나를 입력하세요 : ');

const result = userNumber.filter((v) => v >= Number(seletNumber));
console.log(result);

// Const arrayNumbers = [1, 3, 4, 5, 3];
// console.log(arrayNumbers);

// const user = question('배열속에있는 숫자 하나를 입력하세요: ');

// const result = arrayNumbers.filter((v) => v === Number(user)).length;
// console.log(result);

// https://hianna.tistory.com/488
