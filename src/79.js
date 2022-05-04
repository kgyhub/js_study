// 'nums'라는 이름의 빈 배열을 생성한다.
// 사용자에게 숫자를 입력하라고 요청한다.
// 숫자가 입력되면 그것을 nums 배열 끝에 추가하고 배열을 출력한다.
// 세 개의 숫자를 입력받으면 마지막 숫자를 저장할 것인지 묻는다.
// 만약 "n"이라고 답하면 배열의 마지막 항목을 삭제하고 배열을 출력하라.
import { question } from 'readline-sync';

const nums = [];
let userNumber = 0;

let answer = 'y';
while (answer !== 'n') {
  userNumber = question('숫자를 입력하세요: ');
  nums.push(userNumber);
  console.log(nums);
  if (nums.length > 3) {
    answer = question('마지막 숫자를 저장할까요? (y/n) ');
    if (answer === 'n') {
      nums.pop();
    }

    console.log(nums);
  }
}
