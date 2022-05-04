// 네 개의 TV 프로그램 타이틀을 담은 배열을 생성하고 각 항목을 한 줄씩 출력한다.
// 사용자에게 다른 프로그램을 입력하도록 요청하고 배열에서의 원하는 위치를 묻는다.
// 입력한 프로그램 타이틀을 원하는 위치에 삽입하고 다섯 개 의 TV 프로그램 모두를 다시 출력한다.
import { question } from 'readline-sync';

const arrayPrograms = ['Running', 'Mudo', 'Show', 'Friends'];

for (const onePro of arrayPrograms) {
  console.log(onePro);
}

const userProgram = question('다른 프로그램을 입력하세요: ');
const userIndex = question(
  '당신의 프로그램이 리스트에서 몇번째 위치했으면 좋겠는가? (숫자입력) '
);

arrayPrograms.splice(userIndex - 1, 0, userProgram);
console.log(arrayPrograms);
