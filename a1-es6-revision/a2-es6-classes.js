// ES6 Classes.
class Person {
  constructor(name, age, children) {
    this.name = name;
    this.age = age;
    this.children = children;
  }

  speak() {
    console.log(`Name is ${this.name}, and age is ${this.age}`);
  }

  birth(child) {
    this.children.push(child);
    return this.children;
  }
}

let personObj = new Person('Inma', 31, ['Hugo']);
const personObjTwo = new Person('Hafidz', 25, []);

console.log(personObj);
console.log(personObjTwo);

console.log(personObj.name + " " + personObj.age);
personObj.speak(); // Person 1 speak()
personObjTwo.speak(); // Person 2 speak()

console.log(personObj.birth('Isabelle'));
console.log(personObjTwo.birth('Valentina'));
