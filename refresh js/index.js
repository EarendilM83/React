// normal function

// function myFunc(name) {
//   console.log(name);
// }

// myFunc("nukri");

// arrow function
// const mFunc = (name) => {
//   console.log(name);
// };

// mFunc("firefly");

// classes: print name and gender

// class Human {
//   constructor() {
//     this.gender = "male";
//   }
//   printGender() {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//   constructor() {
//     super();
//     this.name = "Nukri";
//   }

//   printMyName() {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

// another example with classes: print book and author names

// class Genre {
//   constructor() {
//     this.author = "Author: Isaac Azimov";
//   }
//   printAuthor() {
//     console.log(this.author);
//   }
// }

// class SciFi extends Genre {
//   constructor() {
//     super();
//     this.book = "Foundation";
//   }
//   printBookName() {
//     console.log(this.book);
//   }
// }

// const scifi = new SciFi();
// scifi.printBookName();
// scifi.printAuthor();

// another ex about classes
// show book name and game based on it.

// class TheWitcher {
//   constructor() {
//     this.bookName = "The Witcher: The Last Wish";
//   }
//   printBookName() {
//     console.log(this.bookName);
//   }
// }

// class TheWitcherGame extends TheWitcher {
//   constructor() {
//     super();
//     this.gameName = "The Witcher: Wild Hunt";
//   }

//   printGameName() {
//     console.log(this.gameName);
//   }
// }

// const theWitcherName = new TheWitcherGame();
// theWitcherName.printBookName();
// theWitcherName.printGameName();

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
