const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen(e) {
  // const p = document.querySelector('p');
  e.target.style.color = '#BADA55';
  e.target.style.fontSize = '50px';
}

const p = document.querySelector('p');
p.addEventListener('click', makeGreen)

// Regular
console.log('hello');

// Interpolated
console.log('hello I am a %s string!', '💩')

let poop = '💩'
console.log(`hello I am a ${poop} string`)

// Styled
console.log('%c I am some great text', 'font-size: 20px; background: red; text-shadow: 5px 5px 0 blue')

// warning!
// includes stack trace
console.warn("Attention please!")

// Error :|
// includes stack trace
console.error("Something's definitely wrong!")

// Info
console.info('crocodiles eat 3-4 people a year!')

// Testing
// only displays second argument if first argument is false
console.assert(1 === 2, "That's just not true!")

// clearing
// console.clear();

// Viewing DOM Elements
// shows all the different properties and methods
console.dir(p)

// Grouping together
// Groups lots of related logs together
dogs.forEach(dog => {
  console.group(`${dog.name}`); // can also use console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog-years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Yay!');
console.count('Yay!');
console.count('Yay!');
console.count('Boo!');
console.count('Yay!');
console.count('Boo!');
console.count('Yay!');

// console.clear();

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs)