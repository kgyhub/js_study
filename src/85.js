// 사용자의 이름(영어로)을 입력하라고 요청한 뒤, 그 이름 모음이 몇 개인지 출력하라. 정규식....
/* 사용자의 이름을 입력하라고 요청한 뒤, 
그 이름에 모음이 몇 개인지 출력하라 */

// import { question } from 'readline-sync';

// let username = question('이름을 영어로 입력하세요 : ');
// let count = 0;
// username = username.toLowerCase(); // abcde

// for (const oneLetter of username) {
//   console.log(oneLetter);
//   if (
//     oneLetter === 'a' ||
//     oneLetter === 'e' ||
//     oneLetter === 'i' ||
//     oneLetter === 'o' ||
//     oneLetter === 'u'
//   ) {
//     count += 1;
//   }
// }

// console.log(count);

import { question } from 'readline-sync';

const userName = question('이름을 영문으로 입력하세요: ');
const countVowel = userName.replace(/[aeiou]/gi, '-');

console.log(countVowel);

// https://beecoder.org/ko/javascript/count-the-number-of-vowels-in-a-string-in-javascript
