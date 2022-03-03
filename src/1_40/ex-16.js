import { question } from 'readline-sync';

// https://all-dev-kang.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C
// https://www.delftstack.com/ko/howto/javascript/how-to-perform-case-insensitive-string-comparisons-in-javascript/
const color = question('색 입력');

switch (color.toLowerCase()) {
  case 'pink':
    console.log('I like pink too');
    break;

  case 'red':
    console.log('I like red too');
    break;
  case 'yellow':
    console.log('I like yellow too');
    break;
  default:
    console.log("I don't like that color, I prefer red");
    break;
}
