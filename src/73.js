// 사용자에게 좋아하는 음식 네 개를 입력하도록 요청하고 그것들은 인덱스 번호 1부터 시작하는 객체에 저장한다.
// 인덱스 번호와 항목이 모두 표시되도록 객체를 출력한다.
// 사용자에게 제거하고 싶은 항목을 묻고 그것을 제거한다.
// 객체를 다시 출력하라.
import { question } from 'readline-sync';

const foods = {};

for (let i = 1; i <= 4; i++) {
  const userFood = question(
    '좋아하는 음식 4가지를 입력하세요. ' + i + '번째 : '
  );
  foods[i] = userFood;
}

// Foods.forEach((foods, index) => console.log(foods, index));
for (const [key, value] of Object.entries(foods)) {
  console.log(`${key}: ${value}`);
}

const userDelete = question('삭제하고 싶은 음식을 적어주세요. ');

for (const [key, value] of Object.entries(foods)) {
  if (value === userDelete) {
    delete foods[key];
  }
}

for (const [key, value] of Object.entries(foods)) {
  console.log(`${key}: ${value}`);
}
