import { question } from 'readline-sync';

const fnumber = Number(question('첫번째 숫자를 입력하세요.'));
const snumber = Number(question('두번째 숫자를 입력하세요.'));
if (fnumber > snumber) {
  console.log(`두번째 숫자 출력 ${snumber}`);
} else {
  console.log(`첫번째 숫자 출력 ${fnumber}`);
  console.log(`두번째 숫자 출력 ${snumber}`);
}
