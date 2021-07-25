const dataBig = require('./01-random-data.json');

let accountAge = 0;
let accountFemale = 0;
let accountMale = 0;
let eyeColor = new Set();

[...dataBig].forEach((position) => {
  if (position.age > 30) accountAge++;
  if (position.gender === 'male') {
    accountMale++;
  } else {
    accountFemale++;
  }
  eyeColor.add(position.eyeColor);
});

console.log(`Personas mayores a 30: ${accountAge} \nPersonas femeninas: ${accountFemale} \nPersonas masculinas: ${accountMale} \nColor de ojos: ${eyeColor.size}`);
