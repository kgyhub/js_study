import file from 'node:fs';
import { question } from 'readline-sync';

let count = question('몇 개의 레코드를 추가? : ');

while (count > 0) {
  const books = file.readFileSync('Books.csv', 'utf8');
  const bookList = books.split('\n');
  const bookData = question(
    '새로운 책 데이터를 입력하세요 (title, author, publication data) : '
  );

  file.appendFileSync(
    'Books.csv',
    bookList.length - 2 + ',' + bookData + '\n',
    'utf8'
  );
  count--;
}

const result = file.readFileSync('Books.csv', 'utf8');
const resultList = result.split('\n');
console.log('\n');
console.log(result);
const author = question('검색할 저자의 이름은? : ');

for (const [idx, value] of resultList.entries()) {
  if (value.split(',')[2] === author) {
    console.log(value);
  }
}
