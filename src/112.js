// 111번 프로그램에서 만든 Books.csv 파일을 사용한다.
// 사용자에게 다른 레코드를 입력하도록 요청하고 입력된 데이터를 파일의 끝에 추가한다.
// csv 파일의 각 행을 한 줄에 하나씩 출력하라.
import file from 'node:fs';
import { question } from 'readline-sync';

// let fd;
// file.readFile('Books.csv', 'utf8', (error, data) => {
//   console.log(data);
//   const bookList = data.split('\n');
//   //console.log(bookList);
//   //console.log(bookList.length);
//   const bookData = question(
//     '새로운 책 데이터를 입력하세요 : (title, author, publicationdate) '
//   );
//   fd = file.openSync('Books.csv', 'a');
//   file.appendFileSync(fd, bookList.length - 2 + ',' + bookData + '\n', 'utf8');

//   const result = file.readFileSync('Books.csv', 'utf8');
//   console.log(result);
// });

const bookData = file.readFileSync('Books.csv', 'utf8');

const bookList = bookData.split('\n');
console.log(bookList);
const listCnt = bookList.length;
console.log(listCnt);

const newBook = question(
  '새로운 책 데이터를 입력하세요 : (title, author, publicationdate) '
);

file.appendFileSync(
  'Books.csv',
  bookList.length - 2 + ',' + newBook + '\n',
  'utf8'
);

const result = file.readFileSync('Books.csv', 'utf8');
console.log(result);
