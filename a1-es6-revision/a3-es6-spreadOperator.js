const names = ['Inma', 'Jess', 'Hafidz'];
const moreNames = ['Reyes', 'Cuesta', 'Ramirez'];

console.log(names) // output: ['Inma', 'Jess', 'Hafidz']

console.log(...names) // output: Inma Jess Hafidz

// ['Inma', 'Jess', 'Hafidz', 'Gio', 'Reyes', 'Cuesta', 'Ramirez']
const allNames = [...names, 'Gio', ...moreNames];
console.log(allNames); // output: ['Inma', 'Jess', 'Hafidz', 'Gio', 'Reyes', 'Cuesta', 'Ramirez']
