import { question } from 'readline-sync';

const day = question('날짜수를 입력해주세요.');
const hour = Number(day) * 24;
const min = hour * 60;
const sec = min * 60;
console.log(`${hour} 시간 OR  ${min} 분 OR ${sec} 초 남았습니다.`);
