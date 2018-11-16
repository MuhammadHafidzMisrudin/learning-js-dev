// Arrow functions.
const integers = [1, 2, 3];

const updatedIntegers = integers.map((x) => {
  total = 0;
  return total += x;
});

console.log(updatedIntegers);

let sumAll = 0;
for(var i in integers){
  sumAll += integers[i];
}
console.log(sumAll);

// Prototype methods and template strings.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.speak = function() {
  console.log(`Name is ${this.name}, and age is ${this.age}`);
}

const personObject = new Person('Bill', 25);
console.log(personObject.name);
console.log(personObject.age);
console.log(personObject.speak());
personObject.speak();
