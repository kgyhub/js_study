import { question } from 'readline-sync';

const totalbill = question('how much ??');
const peoples = question('how many people ??');
const price = Number(totalbill) / Number(peoples);

console.log('you should pay ' + price + 'won per person');
