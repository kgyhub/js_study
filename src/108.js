// ‘Names.txt’ 파일을 연다. 사용자에게 새로운 이름을 입력하라고 요청한다.
// 입력된 이름을 파일의 끝에 추가하고(파일에 저장) 전체 파일을 출력하라.
import file from 'node:fs';
import { question } from 'readline-sync';

let fd;
file.readFile('Names.txt', 'utf8', (error, data) => {
  console.log(data);

  const name = question('Please enter a new name: ');
  fd = file.openSync('Names.txt', 'a');
  file.appendFileSync(fd, name, 'utf8');
  const result = file.readFileSync('Names.txt', 'utf8');
  console.log(result);
});
