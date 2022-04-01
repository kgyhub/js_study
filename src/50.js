import { question } from 'readline-sync';

const usernum = question('10과 20 사이의 숫자를 입력하라 : ');
let i = usernum; //초기값을 밖에서 세팅

if (usernum <= 10) {
  console.log('Too low');
  //const usernum = question('10과 20 사이의 숫자를 입력하라 : ');
} else if (usernum > 10 && usernum <= 20) {
  // 10 과 20 사이의 숫자

  console.log('Thank you');
  if (usernum > 20) {
    console.log('Too high');
    const usernum = question('10과 20 사이의 숫자를 입력하라 : ');
    while (i <= 20) {
      console.log('i');
      i++;
    }
  }
}
