/* 이전 프로그램을 변경하여 어떤 행을 출력할지 사용자에게 묻는다. 입력받은 행을 출력한다.
열을 선택하라고 요청하고 그 행에서의 해당 열을 출력한다.
그 값을 변경하고 싶은지 사용자에게 묻고, 그러길 원한다면 새로운 값을 입력받아 변경한다.
마지막으로 그 행 전체를 다시 출력하라. */
import { question } from 'readline-sync';

const array2 = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];
console.log(array2);

const row = question('어떤 행을 출력할까요?(숫자) : ');
const resultRow = Number(row) - 1; // 인덱스는 0부터 잡기 때문에 -1 해주는 것
console.log(array2[resultRow]);
const col = Number(question('열을 선택하세요 : '));
const resultCol = Number(col) - 1;
console.log(array2[resultRow][resultCol]);

const answer = question('이 값을 변경하고 싶은가요? (y/n)');
if (answer === 'y') {
  for (let i = 0; i <= 2; i++) {
    const resultNumber = Number(question('변경하고 싶은 숫자를 입력하세요: '));
    array2[resultRow][i] = resultNumber;
  }
} else {
  console.log('End');
}

console.log(array2[resultRow]);
