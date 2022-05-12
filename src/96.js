/* 간단한 2차원 배열로 다음의 데이터를 생성하라. */
import { question } from 'readline-sync';

const array04 = [
  [' ', '0', '1', '2'],
  ['0', '2', '5', '8'],
  ['1', '3', '7', '4'],
  ['2', '1', '6', '9'],
  ['3', '4', '2', '0'],
];

console.log(array04);
const row = question('행을 선택하세요 : ');
const col = question('열을 선택하세요 : ');
const resultRow = Number(row) - 1;
const resultCol = Number(col) - 1;
console.log(array04[resultRow][resultCol]);
