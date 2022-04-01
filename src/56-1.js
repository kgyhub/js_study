import { questionInt } from 'readline-sync';

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selected = number[Math.floor(Math.random() * number.length)]; // 1

let que1 = questionInt('select your number: '); // 5

while (selected !== que1) {
  console.log(selected);

  if (que1 > selected) {
    console.log('big');
    que1 = questionInt('re-enter the number: ');
  } else if (que1 < selected) {
    console.log('small');
    que1 = questionInt('re-enter the number: ');
  }
}

console.log('number is correct');
