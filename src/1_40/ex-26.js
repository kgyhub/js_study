import { question } from 'readline-sync';

const ftext = question('영어로 아무 글자나 입력해주세요.');
const ftextLower = ftext.toLowerCase(); // 소문자로 변환
const ftextfirst = ftextLower.slice(0, 1); // 첫글자

if (
  ftextfirst === 'a' ||
  ftextfirst === 'i' ||
  ftextfirst === 'o' ||
  ftextfirst === 'e' ||
  ftextfirst === 'u'
) {
  console.log(ftextLower + 'way'); // 첫글자가 모음일경우
} else {
  console.log(ftextLower.slice(1) + ftextfirst + 'ay'); // 첫글자가 모음이 아닐경우
}
