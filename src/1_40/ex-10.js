import { question } from 'readline-sync';

const kgweight = question('kg 몸무게를 입력하세요.');
const podweight = Number((Number(kgweight) * 2.204).toFixed(3));
console.log('당신의 몸무게는 ' + podweight + ' 파운드 입니다.');
