
'use strict';

let score = 0;

function greet() {
  let id = prompt('What is your name?', '');
  alert('Welcome ' + id + '!');
}

function quiz() {
  let checkTest = prompt('Are you ready to take the test? (y/n)').toLowerCase();
  if (checkTest === 'y' || checkTest === 'yes') {
    alert('Alright!');
    //fav color
    let favColor = prompt('Is my favorite color green? (y/n)').toLowerCase();
    if (favColor === 'y' || favColor === 'yes') {
      score++;
      //console.log(Correct!)
      alert('Correct! is any other color as good?');
    } else if (favColor === 'n' || favColor === 'no') {
      //console.log(Incorrect)
      alert('Sorry that is incorrect!');
    } else {
      alert('Please answer in (y/n) format.');
    }}
  else if (checkTest === 'n' || checkTest === 'no') {
    alert('Ok read my bio and click the "take test" button when you are ready!');
    return;
  } else {
    alert('Please answer in (y/n) format.');
  }
}

function middleName(){
  //middle name
  let middleName = prompt('Is my middle name Robert? (y/n)').toLowerCase();
  if (middleName === 'y' || middleName === 'yes') {
    //console.log(Incorrect)
    alert('Sorry that is incorrect!');
  } else if (middleName === 'n' || middleName === 'no') {
    score++;
    //console.log(Correct!)
    alert('Correct! My friends call me Hot Rod! (or at least I tell them too)');
  } else {
    alert('Please answer in (y/n) format.');
  }}

function ageQuiz(){
  //age
  let age = prompt('am I older then 21? (y/n)').toLowerCase();
  if (age === 'y' || age === 'yes') {
    //console.log(Incorrect)
    alert('Nope! I wish');
  } else if (age === 'n' || age === 'no') {
    score++;
    //console.log(Correct!)
    alert('Correct! I only just turned 20. Did you wish me happy birthday?');
  } else {
    alert('Please answer in (y/n) format.');
  }}
function locationQuiz(){
  //location
  let loc = prompt('Do I live in the Seattle area? (y/n)').toLowerCase();
  if (loc === 'y' || loc === 'yes') {
    //console.log(Incorrect)
    alert('Wrong! I do really miss the views though!');
  } else if (loc === 'n' || loc === 'no') {
    score++;
    //console.log(Correct!)
    alert('Correct! I moved just a little bit ago!');
  } else {
    alert('Please answer in (y/n) format.');
  }}

function humbleQuiz(){
  let humble = prompt('Am I the most humble person to ever exist? (y/n)').toLowerCase();
  if (humble === 'y' || humble === 'yes') {
    score++;
    //console.log(Correct!)
    alert('Of course im the most humble! Im much more humble then you!');
  } else if (humble === 'n' || humble === 'no') {
    //console.log(Incorrect)
    alert('You are way off!');
  } else {
    alert('Please answer in (y/n) format.');
  }}

alert('You got ' + score + '/5 correct!');




function game() {
  alert('Im thinking of a number between 1-10 can you guess?');
  let attempts = 4;
  let guess = 0;
  while (attempts > 0) {
    guess = prompt('What is your guess');
    guess = Number(guess);
    console.log(guess);
    if (guess === 8) {
      alert('you got it!');
      score ++;
      return;
    } else if (guess < 8 && guess > 0) {
      attempts--;
      alert('Wrong! Higher: you have ' + attempts + ' guesses left');
      console.log(guess);
    } else if (guess > 8 && guess <= 10) {
      attempts--;
      alert('Wrong! Lower: you have ' + attempts + ' guesses left');
      console.log(guess);
    } else {
      alert('please enter a number 1-10');
      console.log(guess);
    }
  }
}

function game2() {
  let attemptsRemaining = 7;
  let myNum = [2, 3, 4, 6, 12];
  let userGuess = 0;
  alert('alright now im thinking of 5 different numbers (1-20) Can you guess one?');
  while (attemptsRemaining) {
    attemptsRemaining--;
    userGuess = prompt('What is your guess?');
    userGuess = Number(userGuess);
    for (let i = 0; i < myNum.length; i++) {
      console.log(i);
      if (userGuess === myNum[i]) {
        alert('correct!');
        score ++;
        return;
      } else {
        console.log(i);
      }
    }
    alert('Nope! attempts remaining: ' + attemptsRemaining);
  }
}

function finalScore() {
  alert('You got ' + score + '/7 correct!');
}
