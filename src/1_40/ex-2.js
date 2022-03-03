import { question } from 'readline-sync';

const firstname = question('write first name...');
const lastname = question('write last name...');

console.log('Hello  ' + firstname + ' ' + lastname);
