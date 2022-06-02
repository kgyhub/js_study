// 앞에서 생성한 Names.txt 파일을 이용하여 목록의 이름들을 출력한다
// 그 이름들 중 하나를 입력하라고 요청하고, 그 이름을 제외한 나머지 이름들을 Names2.txt라는 새로운 파일에 저장하라.
// 프로그램을 여러 번 실행하여 옵션들을 테스트하라.
import file from 'node:fs';
import { question } from 'readline-sync';

file.readFile('Names.txt', 'utf8', (error, data) => {
  console.log(data);

  const name = question('위 이름중 하나 입력: ');
  const result = data.replace(name, '');

  file.writeFile('Names2.txt', result, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('파일 생성 완료');
    }
  });
});
