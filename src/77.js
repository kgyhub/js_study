// 076번 프로그램을 수정하여 초대할 사람들의 이름이 배열에 모두 추가되면
// 전체 명단을 출력하고 배열에 있는 이름들 중 하나를 입력하라고 요청한다.
// 입력된 이름의 위치(인덱스)를 출력하고 그 사람을 정말로 파티에 초대할 것인지를 묻는다.
// 만약 "n"이라고 답하면 그 항목을 배열서 삭제하고 배열을 다시 출력한다.
import { question } from 'readline-sync';

const partyPeople = [];

for (let i = 0; i <= 2; i++) {
  partyPeople.push(
    question('파티에 초대할 사람을 3명 입력하세요 ' + (i + 1) + '번 : ')
  );
}

console.log(partyPeople);

let answer = 'y';
while (answer !== 'n') {
  answer = question('파티에 사람을 더 초대하시겠습니까? (y/n) ');
  if (answer === 'n') {
    console.log(
      '파티에 초대한 사람의 수는 ' + partyPeople.length + '명 입니다.'
    );
    console.log(partyPeople);
  } else {
    partyPeople.push(question('파티에 초대할 사람을 더 입력하세요  : '));
  }
}

const checkPerson = question('초대될 사람들 목록중 한명을 입력하세요 : ');
const checkIndex = partyPeople.indexOf(checkPerson);
if (checkIndex >= 0) {
  const personConfirm = question(
    checkPerson + ' 이분을 정말로 초대하실건가요? (y/n) '
  );
  if (personConfirm === 'n') {
    partyPeople.splice(checkIndex, checkIndex + 1);
  }
} else {
  console.log('목록에 있는 사람의 이름을 입력해주세요.');
}

console.log('파티 초대 인원 목록은 아래와 같습니다.');
console.log(partyPeople);
