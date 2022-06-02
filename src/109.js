/*
사용자에게 다음과 같이 메뉴를 표시하라

1.Create a new file
2.Display the file
3.Add a new item to the file Make a selection 1, 2 or 3:

사용자에게 1, 2 또는 3을 입력하라고 요청한다. 다른 것을 입력한다면 에러 메시지를 출력한다.
만약 1을 선택하면 과목명을 입력하라고 요청하고, 그것을 ‘Subject.txt'라는 이름의 새로운 파일에 저장한다. 기존 파일이 있다면 새 파일로 덮어쓰게 된다
2를 선택하면 'Subject.txt' 파일의 내용을 출력한다
3을 선택하면 새로운 과목명을 입력하라고 요청하고, 그것을 파일에 저장한 후에 파일의 전체 내용을 출력 한다.
*/
import wf from 'node:fs';
import { question, questionInt } from 'readline-sync';

const userAnswer = questionInt(
  ' 1.Create a new file \n 2.Display the file \n 3.Add a new item to the file Make a selection 1, 2 or 3:'
);

let fd;
let subName = '';
switch (userAnswer) {
  case 1:
    subName = question('과목명을 입력하세요 : ');

    wf.writeFile('file/Subject.txt', subName, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('파일 생성 완료');
      }
    });

    break;
  case 2:
    wf.readFile('file/‘Subject.txt', 'utf8', (error, data) => {
      if (error) {
        console.log(error);
        return;
      }

      console.log(data);
    });

    break;

  case 3:
    try {
      subName = question('과목명을 입력하세요 : ');
      fd = wf.openSync('file/Subject.txt', 'a');
      wf.appendFileSync(fd, '\n' + subName, 'utf8');

      const result = wf.readFileSync('file/Subject.txt', 'utf8');
      console.log(result);
    } catch {
      /* Handle the error */
    } finally {
      if (fd !== undefined) wf.closeSync(fd);
    }

    break;

  default: {
    console.log('잘못된 숫자 입력');
    break;
  }
}
