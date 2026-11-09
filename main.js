let studentName = 'Amina';
const birthYear = 2000;
let age = 2026 - birthYear;
let isStudent = true;
const favoriteColors = ['green', 'blue', 'amber'];
const today = new Date();

console.log(typeof studentName, typeof age, typeof isStudent);
console.log(typeof favoriteColors, typeof today); 
console.log(`My name is ${studentName} and I am ${age} years old.`);
console.log('Student:', isStudent);
console.log('Favourite colours:', favoriteColors.join(', '));
console.log('Today is', today.toDateString());

age = age + 1;   

const a = 17;
const b = 5;
console.log(a + b, a - b, a * b, a / b, a % b, a ** 2);
console.log(Math.round(4.6), Math.floor(4.6), Math.ceil(4.2), Math.sqrt(81), Math.max(3, 9, 4));
console.log(0.1 + 0.2, (0.1 + 0.2).toFixed(2));

const text = 'JavaScript';
console.log(text.length, text.toUpperCase(), text.toLowerCase());
console.log(text[0], text.slice(0, 4), text.indexOf('S'), text.includes('Script'));
console.log(text.replace('Java', 'Type'), '  padded  '.trim());

console.log(5 == '5', 5 === '5', 5 != '5', 5 !== '5');
console.log(10 > 3, 10 <= 3);
console.log(true && false, true || false, !true);

const birthDate = new Date('2000-05-15'); 
const now = new Date();
const days = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24));
const hours = days * 24;
console.log(`I am about ${days} days (${hours} hours) old.`);
console.log('I turn 100 in', birthDate.getFullYear() + 100);



