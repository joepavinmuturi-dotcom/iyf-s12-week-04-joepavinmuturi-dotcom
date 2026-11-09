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

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return 'Error: cannot divide by zero';
  return a / b;
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+': return add(num1, num2);
    case '-': return subtract(num1, num2);
    case '*': return multiply(num1, num2);
    case '/': return divide(num1, num2);
    case '%': return num2 === 0 ? 'Error: cannot divide by zero' : num1 % num2;
    case '**': return num1 ** num2;
    default: return 'Error: unknown operator ' + operator;
  }
}

console.log(calculate(10, '+', 5));   
console.log(calculate(10, '-', 5));  
console.log(calculate(10, '*', 5));   
console.log(calculate(10, '/', 4));   
console.log(calculate(10, '/', 0));   
console.log(calculate(10, '%', 3));   
console.log(calculate(2, '**', 8));   
console.log(calculate(2, '^', 8));    


const calcForm = document.getElementById('calc-form');
if (calcForm) {
  calcForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    document.getElementById('calc-result').textContent =
      'Result: ' + calculate(num1, operator, num2);
  });
}

const fruits = ['apple', 'banana', 'mango'];
fruits.push('orange');      
fruits.pop();              
fruits.unshift('kiwi');     
fruits.shift();             
console.log(fruits.length, fruits[0], fruits.indexOf('mango'), fruits.includes('banana'));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((n) => console.log('Number:', n));

const squares = numbers.map((n) => n * n);                        // 1. map
const evenNumbers = numbers.filter((n) => n % 2 === 0);           // 2. filter
const firstOverFive = numbers.find((n) => n > 5);                 // 3. find
const total = numbers.reduce((sum, n) => sum + n, 0);             // 4. reduce
console.log(squares);        
console.log(evenNumbers);    
console.log(firstOverFive); 
console.log(total);          

const names = ['Amina', 'Brian', 'Joy', 'Cynthia'];
console.log(names.map((n) => n.toUpperCase()));
console.log(names.filter((n) => n.length > 4));


const learner = {
  name: 'Amina',
  age: 20,
  course: 'Software Development',
  skills: ['HTML', 'CSS', 'JavaScript'],
  greet() {
    return `Hi, I am ${this.name} and I study ${this.course}.`;
  },
};

console.log(learner.name, learner['age']);
learner.age = 21;
learner.city = 'Nairobi';
delete learner.city;
console.log('skills' in learner);  
console.log(learner.greet());

console.log(Object.keys(learner));
console.log(Object.values(learner));
console.log(Object.entries(learner));
for (const [key, value] of Object.entries(learner)) {
  console.log(key + ': ' + value);
}



const studentList = [
  { id: 1, name: 'Amina',   grade: 85, course: 'Web',  passed: true },
  { id: 2, name: 'Brian',   grade: 62, course: 'Data', passed: true },
  { id: 3, name: 'Cynthia', grade: 45, course: 'Web',  passed: false },
  { id: 4, name: 'Daniel',  grade: 91, course: 'Data', passed: true },
  { id: 5, name: 'Esther',  grade: 58, course: 'Web',  passed: false },
];

const studentNames = studentList.map((s) => s.name);
const passingList = studentList.filter((s) => s.grade >= 60);
const studentFour = studentList.find((s) => s.id === 4);
const classAverage = studentList.reduce((sum, s) => sum + s.grade, 0) / studentList.length;
const ranked = [...studentList].sort((x, y) => y.grade - x.grade);
const anyoneBelowFifty = studentList.some((s) => s.grade < 50);
const everyonePassed = studentList.every((s) => s.passed);
const webStudentNames = studentList.filter((s) => s.course === 'Web').map((s) => s.name);

console.log(studentNames);
console.log(passingList);
console.log(studentFour);
console.log('Average:', classAverage);
console.log(ranked.map((s) => s.name + ' ' + s.grade));
console.log(anyoneBelowFifty, everyonePassed);   
console.log(webStudentNames);                    



const postsJson = `[
  {"id": 1, "title": "Intro to JS", "published": true,  "likes": 42},
  {"id": 2, "title": "Draft ideas", "published": false, "likes": 3},
  {"id": 3, "title": "Arrays explained", "published": true, "likes": 87},
  {"id": 4, "title": "Why JSON matters", "published": true, "likes": 55}
]`;

try {
  const posts = JSON.parse(postsJson);                          
  const publishedPosts = posts.filter((p) => p.published);     
  const byLikes = [...publishedPosts].sort((x, y) => y.likes - x.likes);
  const postLines = byLikes.map((p) => `${p.title} (${p.likes} likes)`);
  console.log(postLines);
  console.log(JSON.stringify(byLikes, null, 2));                
} catch (error) {
  console.log('Invalid JSON:', error.message);
}

try {
  JSON.parse('{ title: missing quotes }');
} catch (error) {
  console.log('Caught bad JSON:', error.message);
}



const gradeTracker = {
  students: [],

  addStudent(name, grades) {
    this.students.push({ name, grades }); 
  },

  getStudent(name) {
    return this.students.find((s) => s.name === name) || null;
  },

  getStudentAverage(name) {
    const student = this.getStudent(name);
    if (!student) return null;
    const scores = Object.values(student.grades);
    const average = scores.reduce((sum, g) => sum + g, 0) / scores.length;
    return Math.round(average * 10) / 10;
  },

  getSubjectAverage(subject) {
    const scores = this.students
      .filter((s) => subject in s.grades)
      .map((s) => s.grades[subject]);
    if (scores.length === 0) return null;
    return Math.round((scores.reduce((sum, g) => sum + g, 0) / scores.length) * 10) / 10;
  },

  getTopStudent() {
    if (this.students.length === 0) return null;
    return this.students.reduce((best, s) =>
      this.getStudentAverage(s.name) > this.getStudentAverage(best.name) ? s : best
    );
  },

  getStrugglingStudents() {
    return this.students
      .filter((s) => this.getStudentAverage(s.name) < 70)
      .map((s) => s.name);
  },

  getLetterGrade(average) {
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
  },

  generateReportCard(name) {
    const student = this.getStudent(name);
    if (!student) return `No student named ${name}`;
    const average = this.getStudentAverage(name);
    let report = `REPORT CARD: ${student.name}\n`;
    for (const [subject, grade] of Object.entries(student.grades)) {
      report += `  ${subject}: ${grade}\n`;
    }
    report += `  Average: ${average}\n  Letter grade: ${this.getLetterGrade(average)}`;
    return report;
  },
};

gradeTracker.addStudent('Amina', { math: 90, english: 85, science: 92 });
gradeTracker.addStudent('Brian', { math: 65, english: 58, science: 70 });
gradeTracker.addStudent('Cynthia', { math: 78, english: 82, science: 75 });

console.log(gradeTracker.getStudent('Amina'));
console.log(gradeTracker.getStudentAverage('Amina'));   
console.log(gradeTracker.getSubjectAverage('math'));
console.log(gradeTracker.getTopStudent().name);
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.getLetterGrade(85));
console.log(gradeTracker.generateReportCard('Amina'));
console.log(gradeTracker.generateReportCard('Zed'));  



// ===== Daily challenges =====
// Day 1: FizzBuzz as a reusable function
function fizzBuzzUpTo(limit) {
  const results = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 15 === 0) results.push('FizzBuzz');
    else if (i % 3 === 0) results.push('Fizz');
    else if (i % 5 === 0) results.push('Buzz');
    else results.push(i);
  }
  return results;
}
console.log(fizzBuzzUpTo(15));

// Day 2: reverse a string with a loop (no .reverse())
function reverseWord(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
console.log(reverseWord('JavaScript')); 

// Day 3: largest number without Math.max()
function findLargest(list) {
  if (list.length === 0) return null;
  let largest = list[0];
  for (const n of list) {
    if (n > largest) largest = n;
  }
  return largest;
}
console.log(findLargest([3, 17, 9, 42, 8])); 

// Day 4: remove duplicates
function removeDuplicates(list) {
  return list.filter((item, index) => list.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); 

// Day 5: palindrome checker (ignores case, spaces and punctuation)
function isPalindrome(sentence) {
  const cleaned = sentence.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome('Racecar'));                          
console.log(isPalindrome('A man, a plan, a canal: Panama'));   
console.log(isPalindrome('Hello'));                            