// 두 개의 빈 배열을 생성한다. 하나에는 사용자가 입력할 숫자 세 개를 담을 것이고, 다른 하나에는 다섯 개의 임의의 숫자를 담을 것이다.
// 두 개의 배열을 큰 배열 하나로 결합한다.
// 결합한 배열을 정렬하고 각 항목을 한 줄에 하나씩 출력하라.
import { question } from 'readline-sync';

const arryA = []; // 사용자가 숫자 담을 배열
const arryB = []; // 다섯개의 임의 숫자 담을 배열

for (let i = 0; i < 3; i++) {
  const userNumber = question('숫자 세개를 입력하세요 : ');
  arryA.push(Number(userNumber));
}

for (let j = 0; j < 5; j++) {
  const randomNumber = Math.floor(Math.random() * (20 - 1) + 1);
  arryB.push(Number(randomNumber));
}

console.log(arryA);
console.log(arryB);
//const arryAB = arryA.concat(arryB);
arryA.push(...arryB);
arryA.sort(function (a, b) {
  return a - b;
});
console.log(arryA);

// const array1 = [];
// const array2 = [];
// let user = 0;
// while (array1.length < 3) {
//   user = question('숫자를 입력해주세요 : ');
//   console.log(isNaN(user));
//   if (isNaN(user)) {
//     console.log('숫자를 입력하세요.');
//   } else {
//     array1.push(Number(user));
//   }
// }

// console.log(array1);

// for (let i = 0; i < 5; i++) {
//   array2.push(Math.floor(Math.random() * 10) + 1);
// }

// console.log(array2);
// array1.push(...array2);
// console.log(array1);

// array1.sort();

// for (const oneNumber of array1) {
//   console.log(oneNumber);
// }
