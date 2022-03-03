import { question } from 'readline-sync';

const fcolor = question('좋아하는 색을 입력하세요.');
if (fcolor === 'red' || fcolor === 'RED' || fcolor === 'Red') {
  console.log('I like red too');
} else {
  console.log(`I don't like that colour, I prefer red`);
}
