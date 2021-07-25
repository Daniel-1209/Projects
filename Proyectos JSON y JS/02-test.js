const arch = require('./02-test.json');

arch.people.forEach((present) => {
  console.log(present.address);
});