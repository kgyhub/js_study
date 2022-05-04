// 사용자에게 파티에 초대할 사람 3명의 이름을 입력하라고 요청하고 배열에 저장한다.
// 모든 이름이 입력되면 추가할 사람이 있는지 묻는다.
// 만약 그렇다면 "n"이라고 답할 때까지 이름을 추가하게 한다.
// "n"이라고 입력하면 파티에 초대한 사람이 몇 명인지 표시하라.
import { question } from 'readline-sync';

const name1 = question('첫 번째 초대할 사람의 이름을  입력하세욘: ');
const name2 = question('두 번째 초대할 사람의 이름을  입력하세욘: ');
const name3 = question('세 번째 초대할 사람의 이름을  입력하세욘: ');
const human = [name1, name2, name3];
let another = '';

while (another.toUpperCase() !== 'N') {
  another = question('더 초대하실?(Y/N): ');

  if (another.toUpperCase() === 'N') {
    console.log(human);
    console.log('파티에 초대된 사람은 ' + human.length);
  } else {
    const newname = question('초대할 사람의 이름을 입력하세요: ');
    human.push(newname);
  }
}
