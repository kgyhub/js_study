import { question } from 'readline-sync';

const fsong = question('자장가의 첫출을 입력해주세요.');
console.log(`자장가의 총 길이는 ${fsong.length} 입니다.`);
const startnum = question('자장가의 시작 번호를 입력해주세요.');
const endnum = question('자장가의 끝 번호를 입력해주세요.');
console.log(fsong.slice(startnum - 1, endnum));
