// 102번 프로그램을 수정하여 모든 사람의 이름과 나이를 출력하라. 단, 신발 사이즈는 출력하지 않는다.
import { question } from 'readline-sync';

const peopleData = {};
let userName = '';
let userAge = 0;
let userSize = 0;
for (let i = 1; i <= 4; i++) {
  userName = question(' 이름을 입력하세요 ' + i + '번 : ');
  userAge = question('나이를 입력하세요 : ');
  userSize = question('신발사이즈를 입력하세요 : ');
  peopleData[userName] = { age: userAge, size: userSize };
}

console.log(peopleData);

for (const [key, value] of Object.entries(peopleData)) {
  console.log('이름: ' + key + ' 나이: ' + value.age);
}
// https://velog.io/@jinyongp/JavaScript-%EB%B0%B0%EC%97%B4-%EB%B0%8F-%EA%B0%9D%EC%B2%B4-%EB%B0%98%EB%B3%B5%EB%AC%B8
