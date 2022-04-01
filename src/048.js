import { question } from 'readline-sync';

let sum = 0;
const name = question('파티에 초대하고 싶은 사람의 이름을 입력하세요 : ');

while (true) {
  if (name.length > 0) {
    console.log(name + ' has now been invited ');
    sum++;
    console.log(sum + '명이 파티에 참석');
  } else {
    console.log(sum + '명이 파티에 참석');
    break;
  }
}
