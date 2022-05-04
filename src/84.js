// 사용자에게 영어 단어를 입력하라고 요청한다. 처음 두 개의 문자만 대문자로 출력하라.
import { question } from 'readline-sync';

const userLetter = question('영어단어를 입력하세요. ');

const first = userLetter.charAt(0).toUpperCase();
const second = userLetter.charAt(1).toUpperCase();

console.log(first + second + userLetter.slice(2, userLetter.length));
