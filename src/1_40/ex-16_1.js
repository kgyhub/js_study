import { question } from 'readline-sync';

const fyn = question('지금 비가 오나요? Yes OR No.');

if (fyn.toLowerCase() === 'yes') {
  const windy = question('지금 바람? Yes OR No.');
  if (windy.toLowerCase() === 'yes') {
    console.log('It is too windy for an umbrella');
  } else {
    console.log('Take an umbrella');
  }
} else {
  console.log('Enjoy your day');
}
