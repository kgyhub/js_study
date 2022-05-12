/** 네 명의 이름과 나이, 신발 사이즈를 입력하라고 요청한다.
입력된 이름들 중 하나를 입력하라고 요청하고 입력된 이름의 나이와 신발 사이즈를 출력하라. */
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
userName = question('위 이름중 한명의 이름을 입력하세요 : ');
console.log(
  `${userName}의 나이는 ${peopleData[userName].age} 신발사이즈는 ${peopleData[userName].size} 입니다.`
);

// https://velog.io/@surim014/%EC%9B%B9%EC%9D%84-%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94-%EA%B7%BC%EC%9C%A1-JavaScript%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-part-7-Object-35k01xmdfp
