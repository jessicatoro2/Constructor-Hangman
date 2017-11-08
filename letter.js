// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var Letter = function(letterchar) {
// property to store the actual letter
  this.letterchar = letterchar;
  this.show = function(guessletters){
    // this is to make sure that both lower and upper case work in the constructoe
    if(guessletters.indexOf(this.letterchar.toLowerCase())> -1 ||
       guessletters.indexOf(this.letterchar.toUpperCase())> -1 ){
      return this.letterchar;
    } else {
      return "_"
    }
  }
}

// export to use in word.js
module.exports = Letter;
// this is the constructor 
var letter = new Letter("a");
console.log(letter);

// this is the guess that people type
var guessletters = ['m']
console.log(letter.show(guessletters));

