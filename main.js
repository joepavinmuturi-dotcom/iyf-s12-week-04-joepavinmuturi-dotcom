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


function calculateArea(width, height) {
  return width * height;
}

const celsiusToFahrenheit = function (celsius) {
  return (celsius * 9) / 5 + 32;
};

const isEven = (n) => n % 2 === 0;

function getInitials(fullName) {
  return fullName
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase())
    .join('');
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculateTip = (bill, tipPercent = 15) => (bill * tipPercent) / 100;

console.log(calculateArea(5, 4));             
console.log(celsiusToFahrenheit(100));         
console.log(isEven(8), isEven(7));             
console.log(getInitials('Amina Wanjiku'));     
console.log(reverseString('hello'));           
console.log(calculateTip(2000));               
console.log(calculateTip(2000, 10));           


function gradeLetter(score) {
  if (score >= 80) return 'A';
  else if (score >= 70) return 'B';
  else if (score >= 60) return 'C';
  else return 'F';
}
console.log(gradeLetter(85), gradeLetter(72), gradeLetter(40)); // A B F

function dayType(dayNumber) {
  switch (dayNumber) {
    case 0:
    case 6:
      return 'Weekend';
    case 1: case 2: case 3: case 4: case 5:
      return 'Weekday';
    default:
      return 'Not a valid day';
  }
}
console.log(dayType(0), dayType(3), dayType(9)); 

let line = '';
for (let i = 1; i <= 100; i++) {
  line += i + ' ';
}
console.log(line.trim());

let evens = '';
for (let i = 2; i <= 50; i += 2) {
  evens += i + ' ';
}
console.log(evens.trim());

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}

for (let row = 1; row <= 5; row++) {
  console.log('*'.repeat(row));
}

let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}