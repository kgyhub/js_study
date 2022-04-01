import { question } from 'readline-sync';

let que = 'y'; // 얘를 왜 선언함?
let count = 0;

while (que === 'y') {
  const name = question('초대할 사람의 이름을 입력하세요');
  console.log(name + ' has now been invited');
  count++; // count + 1
  que = question('사람을 더 초대할건가요? y/n ');

  if (que !== 'y') {
    console.log('You have ' + count + ' people coming to your party');
  }
}
