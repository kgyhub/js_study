const array = ['사과', '배', '자두', '바나나', '석류']; //  0 - 4
const ramdomNumber = Math.floor(Math.random() * 5);
console.log(ramdomNumber);
console.log(
  '다섯 개의 과일 이름들의 목록에서 임의의 과일 : ' + array[ramdomNumber]
);
