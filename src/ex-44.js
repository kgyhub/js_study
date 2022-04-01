import { question } from 'readline-sync';

const peopleCount = question('파티에 몇명 초대?  ');

if (Number(peopleCount) < 10) {
  for (let i = 0; i < peopleCount; i++) {
    const name = question('이름을 적으세요!.');
    console.log(name + ' has been invited');
  }
} else {
  console.log('Too many people');
}
