var letters= ["a","b","c",];
var guessedLetters=[];
var letterToGuess=" ";
var guessesLeft=9;
var wins=0;
var losses=0;

var updateGuessesLeft=function(){
    document.querySelector("#guessesleft").innerHTML=guessesLeft;
}
var updateLetterToGuess=function(){
    letterToGuess=letters[Math.floor(Math.random()*letters.length)];
}
var updateGuessesSoFar=function(){
    document.querySelector("#yourguesses").innerHTML=guessedLetters;
}

var reset=function(){
 guessedLetters=[];
guessesLeft=9;
updateLetterToGuess();
updateGuessesLeft();
updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();
document.onkeydown=function(e){
    guessesLeft--;
  var letter = String.fromCharCode(e.which).toLowerCase();
    
 guessedLetters.push(letter);
 updateGuessesLeft();
 updateGuessesSoFar();
 if(letter===letterToGuess){
    wins++;
    document.querySelector("#playwins").innerHTML = wins;
reset()
 }
 if(guessesLeft ===0){
    losses++;
    document.querySelector("#playlosses").innerHTML = losses;
reset()

 }
}
