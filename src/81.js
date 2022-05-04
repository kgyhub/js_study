// 가장 좋아하는 과목 이름을 입력받고 각 문자 뒤에 '-'를 붙여서 출력하라.
import { question } from 'readline-sync';

const userSubject = question('가장 좋아하는 과목을 입력하세요 : ');
let resultPrint = '';
for (const oneChar of userSubject) {
  resultPrint += oneChar + '-';
}

console.log(resultPrint);
