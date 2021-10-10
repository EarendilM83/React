// normal function

function myFunc(name) {
  console.log(name);
}

// myFunc("nukri");

// arrow function
const mFunc = (name) => {
  console.log(name);
};

// mFunc("firefly");

// classes: print name and gender

class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Nukri";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

// another example with classes: print book and author names

class Genre {
  constructor() {
    this.author = "Author: Isaac Azimov";
  }
  printAuthor() {
    console.log(this.author);
  }
}

class SciFi extends Genre {
  constructor() {
    super();
    this.book = "Foundation";
  }
  printBookName() {
    console.log(this.book);
  }
}

const scifi = new SciFi();
scifi.printBookName();
scifi.printAuthor();

// another ex about classes
// show book name and game based on it.

class TheWitcher {
  constructor() {
    this.bookName = "The Witcher: The Last Wish";
  }
  printBookName() {
    console.log(this.bookName);
  }
}

class TheWitcherGame extends TheWitcher {
  constructor() {
    super();
    this.gameName = "The Witcher: Wild Hunt";
  }

  printGameName() {
    console.log(this.gameName);
  }
}

const theWitcherName = new TheWitcherGame();
theWitcherName.printBookName();
theWitcherName.printGameName();

// now the actual ES7  babel js method that can make above code way easier to read and write

class TheWitcherBook {
  bookName = "The Witcher: Last Wish";
  printBookName = () => {
    console.log(this.bookName);
  };
}

class TheWitcherGameES7 extends TheWitcherBook {
  gameName = "The Witcher: Wild Hunt";
  printGameName = () => {
    console.log(this.gameName);
  };
}

const thewitcherbook = new TheWitcherGameES7();
thewitcherbook.printBookName();
thewitcherbook.printGameName();

// spread & rest Operators

// spread operator

// ex on array
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6]; //[1,2,3,4,5,6]
const newNumberss = [numbers, 4, 5, 6]; //[[1, 2, 3], 4, 5, 6]

console.log(newNumbers, newNumberss);

// ex on objects

const author = {
  name: "J.r.r Tolkien",
  book: "The lord of the ringns",
};

const authorRate = {
  ...author,
  rate: " * * * * *",
};

console.log(authorRate);

// rest operator

const someName = (...someArguments) => {
  return someArguments.filter((someElements) => someElements === 1);
};

console.log(someName(1, 2, 3));

// Destructuring
// easily extract array elements or object properties and store them in variables for arrays and for objects

const someNumbers = [1, 2, 3];

[num1, , num2] = someNumbers; // [1, 3]
[num1, num2] = someNumbers; // [1, 2]

console.log(num1, num2);

// referenece and primitive types

const referenceEx = {
  name: "Firefly",
};

const newReferenceEx = referenceEx; //if we assign object to new variable it will take it's value/s because it doesn't actually copys the object but takes reference link of it from the memory. If we want to actually copy the object we need to user spread operator "...objName"

const newReferenceEx1 = {
  ...referenceEx,
};
referenceEx.name = "nukri";

console.log(newReferenceEx1);
console.log(newReferenceEx);

// Array Functions

// return odd and even numbers as their doubled values as a new array
const nums = [1, 2, 3];

// arrary.map method is for getting each elemen of the array and make some actions on them.
const oddEvenNums = nums.map((num) => {
  if (num % 2 == 0) {
    console.log(num + " is even number");
  } else {
    console.log(num + " is odd number");
  }

  return num * 2;
});

console.log(oddEvenNums);
