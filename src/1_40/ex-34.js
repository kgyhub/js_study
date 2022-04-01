import { question } from 'readline-sync';

console.log('1) Square');
console.log('2) Triangle');

const userNumber = question(' Enter a number : ');

if (Number(userNumber) === 1) {
  let squareSide = question(' Square side Length? ');
  squareSide = Number(squareSide);

  if (Number.isNaN(squareSide)) {
    console.log('square side is not a number.');
  } else {
    const squareArea = Number(squareSide) * Number(squareSide);

    console.log('Area of a Square is ' + squareArea);
  }
} else if (Number(userNumber) === 2) {
  let triBase = question(' Triangle base length? ');
  let triHeight = question(' Triangle height? ');
  triBase = Number(triBase);
  triHeight = Number(triHeight);

  if (Number.isNaN(triBase) || Number.isNaN(triHeight)) {
    console.log('square side is not a number.');
  } else {
    const triArea = (Number(triBase) * Number(triHeight)) / 2;

    console.log('Area of a Triangle is ' + triArea);
  }
} else {
  console.log('your number is wrong');
}

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
