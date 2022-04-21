// 두 개의 스포츠 이름을 담고 있는 배열을 생성하라.
// 사용자에게 좋아하는 스포츠가 무엇인지 물어보고 그것을 배열 끝에 추가하라.
// 배열을 정렬하고 출력하라.
import { question } from 'readline-sync';

const sports1 = ['Soccer', 'Golf'];
console.log(sports1);

const sports2 = question('What is your favorite sport?: ');

sports1.push(sports2);
console.log(sports1);

// Const arraySports = ['swimming', 'basket ball'];
// const yourSport = question('좋아하는 스포츠를 적어주세요 : ');

// arraySports.push(yourSport);
// arraySports.sort();
// console.log(arraySports);
