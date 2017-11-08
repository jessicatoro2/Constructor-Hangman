// The completed game should meet the following criteria:

// The completed game should be able to receive user input using the inquirer or prompt npm packages.
// data layer word and letters if i give you leeters give me the work if all the letters are filled in give me another word 
// dependency for inquirer npm package
var inquirer = require("inquirer");
var prompt = require('prompt');
var word = require('./game.js');

var usersGuess = 10;

var inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Guess a letter",
      name: ""
    }
  ])
  .then(function(inquirerResponse) {  
    }
  });

// console.log("Where in the world are you?!");
// console.log("Try to guess the country, one letter at a time");
// console.log("Goodluck!");
// console.log("-----------------------------");
var startGame = function(usersGuess)

prompt.start();

// var start = function({
inquirer.prompt(guessletter)
//   then(function(answer)){
//       guess
//       update
//       finished
//       if(finished){
//         start()

//       } else 
//       prompt.
//   }
// })

start();

// // constructor function used to create programmer objects
// function PlayerGuess(letter) {
//   this.letter = letter;
//   this.word = word
// }

// // creates the printInfo method and applies it to all programmer objects
// PlayerGuess.prototype.printInfo = function() {
//   console.log("Guess a letter: " + this.letter);
//   console.log("---------------");
// };

// // variable we will use to count how many times our questions have been asked
// var guesses = 10;
// // array in which we will store each of our new programmer objects
// playerArray = [];

// var askQuestion = function() {
//   // if statement to ensure that our questions are only asked five times
//   if (guesses = 0) {
//     console.log("Guess again");
//     // runs inquirer and asks the user a series of questions whose replies are
//     // stored within the variable answers inside of the .then statement
//     inquirer.prompt([
//       {
//        letter: "letter",
//         message: "Guess a letter"
//       },
//     ]).then(function(answers) {
//       // initializes the variable newguy to be a programmer object which will
//       // take in all of the user's answers to the questions above
//       var newGuy = new PlayerGuess(
//         answers.letter,
//       );

//       playerArray.push(newGuy);
//       // add one to count to increment our recursive loop by one
//       count++;
//       // run the askquestion function again so as to either end the loop or ask the questions again
//       askQuestion();
//     });
//     // else statement which runs a for loop that will execute .printInfo() for each object insiplayerarray
//   }
//   else {
//     for (var x = 0; x < playerArray.length; x++) {
//       playerArray[x].printInfo();
//     }
//   }
// };

// // call askQuestion to run our code
// askQuestion();

//     Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:

//     Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

//     Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

//     You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

//     Each constructor function should be in it's own file and be exported and required wherever needed.

//     Look into function prototypes and use them for a few of your constructor's methods.
