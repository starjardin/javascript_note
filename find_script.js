students = ([
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
]);

const findById = (key, value) => {
  return function isStudent(student) {
      return[key] === value;
  }
};

const student = students.find(findById('name', 'Angelina Jolie'));

//Filter exercise

function fiveAndGreaterOnly(arr) {
  return arr.filter(number => number > 5)
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

function evensOnly(arr) {
  return arr.filter(number => {
    if (number % 2 === 0 || number === 0) {
      return number
    }
  })
}
// test
console.log(evensOnly([3, 6, 8, 2]));

function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(letter => letter.length <= 5)
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(trueMember => trueMember.member)
}
// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

function ofAge(arr){
  return arr.filter(oldEnough => oldEnough.age >= 18)
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 