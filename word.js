//     Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
var Letter = require("./letter.js");

// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
var WordPick = function(country){
	// this.length = country.length;
	// console.log(this.length = 5)
	// 
	this.country = function (){
		console.log(country); // "canada"
	}
}
 
// word list 
var words = ['CANADA','ICELAND','JAMAICA','KENYA','GREECE','UGANDA','NICARAGUA','ROMANIA','DENMARK','ETHIOPIA','GUATEMALA','JORDON'];

var newCountry = new WordPick(words[0]);
	newCountry.country();
	newCountry.letter

var newCountry2 = new WordPick(words[1]);

// What is needed --function that picks the word function name, math.random, if else statement. 

function WordList(words) {
	// body...
	this.words = words;
	for (i = 0; i < this.words.length; i++) { 
    math.random();
    
	}
}

// picks a random word from the list 
var wordList = words[Math.floor(Math.random() * words.length)];
console.log("this is the word pick:", wordList);


//list of words to guess.
module.exports = words;

