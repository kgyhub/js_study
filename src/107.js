// ‘Names.txt’ 파일을 열고 읽어서 데이터를 표시하라.
// import rf from 'node:fs';

// rf.readFile('Names.txt', 'utf8', (error, data) => console.log(data));
import { readFile } from 'node:fs';

readFile('Names.txt', 'utf8', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
});
