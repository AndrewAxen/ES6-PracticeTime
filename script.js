// Part 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
const girl = new Person('Rose', 19)
console.log(girl.greet()) // Output: Hello, my name is Rose and I am 19 years old.
const girlGreetOutput = girl.greet();

// Part 2
class Student extends Person {
 constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

study() {
   return `I am studying ${this.major}.`;
  }
}
const collegeGirl = new Student('Diana', 20, 'Computer Science');
console.log(collegeGirl.greet()); // Output: Hello, my name is Diana and I am 20 years old.
console.log(collegeGirl.study()); // Output: I am studying Computer Science
const collegeGirlGreetOutput = collegeGirl.greet();
const collegeGirlStudyOutput = collegeGirl.study();

// Part 3
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
   throw new Error("Subclasses must implement the speak() method");
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} says Woof!`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} says Meow!`;
  }
}

const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");

console.log(myDog.speak()); // Output: Buddy says Woof!
console.log(myCat.speak()); // Output: Whiskers says Meow!

const dogSpeakOutput = myDog.speak();
const catSpeakOutput = myCat.speak();

// The console output
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
  <p>Part 1:</p>
  <p>${girlGreetOutput}</p>
  <p>Part 2:</p>
  <p>${collegeGirlGreetOutput}</p>
  <p>${collegeGirlStudyOutput}</p>
  <p>Part 3:</p>
  <p>${dogSpeakOutput}</p>
  <p>${catSpeakOutput}</p>
`;
