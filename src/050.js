import { question } from 'readline-sync';

let inputNumber = 0;

while (inputNumber <= 10 || inputNumber >= 20) {
  console.log(inputNumber);
  inputNumber = question('10과 20 사이의 숫자를 입력:');
  console.log(inputNumber);

  if (inputNumber <= 10) {
    console.log('Too low');
  } else if (inputNumber >= 20) {
    console.log('Too high');
  } else {
    console.log('Thank you');
  }
}
