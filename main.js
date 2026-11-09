// ===== Task 7.1: Variables =====
let studentName = 'Amina';
const birthYear = 2000;
let age = 2026 - birthYear;
let isStudent = true;
const favoriteColors = ['green', 'blue', 'amber'];
const today = new Date();

console.log(typeof studentName, typeof age, typeof isStudent);
console.log(typeof favoriteColors, typeof today); // both print 'object'
console.log(`My name is ${studentName} and I am ${age} years old.`);
console.log('Student:', isStudent);
console.log('Favourite colours:', favoriteColors.join(', '));
console.log('Today is', today.toDateString());

age = age + 1;        // let can change
// birthYear = 2001;  // const cannot change: remove the // to see the TypeError, then put it back