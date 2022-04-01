import { question } from 'readline-sync';

const ramdomNumber = Math.floor(Math.random() * 10) + 1;
let stat = true;
while (stat) {
  const select = question('1~10 숫자 입력하세요 : ');
  if (ramdomNumber === Number(select)) {
    console.log('right end.');
    stat = false;
  } else {
    console.log('wrong.');
  }
}
