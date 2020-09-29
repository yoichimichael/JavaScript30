// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

// const isAdult = people.some(function(person) {
//   const currentYear = (new Date()).getFullYear();
//   if (currentYear - person.year >= 19) {
//     return true;
//   }
// });

// refactor
const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});

// adding curly braces will show name of variable and return value in console
// console.log({isAdult})

// Array.prototype.every() // is everyone 19 or older?

const areAllAdults = people.every(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});

// console.log(areAllAdults)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// const matchedComment = comments.find(function(comment) {
//   if(comment.id === 823423) {
//     return true;
//   }
// })

// refactor
const matchedComment = comments.find(comment => comment.id === 823423);

// console.log(matchedId)

// Array.prototype.findIndex()
// Find the comment with this ID

const index = comments.findIndex(comment => comment.id === 823423)

// delete the comment with the ID of 823423

comments.splice(index, 1)
console.table(comments)

// alternative
// const newComments = [
//   // a spread of elements from beginning until index
//   ...comments.slice(0, index),
//   // a spread of elements from one after index until end
//   ...comments.slice(index + 1)
// ]
// console.table(newComments)

