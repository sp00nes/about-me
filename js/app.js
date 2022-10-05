
"use strict";

function greet() {
  let id = prompt('What is your name?', '');
  alert('Welcome ' + id + '!');
}

function quiz() {
  let score = 0;
  let checkTest = prompt('Are you ready to take the test? (y/n)').toLowerCase();
  if (checkTest === 'y' || checkTest === 'yes') {
    alert('Alright!');
    //fav color
    let favColor = prompt('Is my favorite color green? (y/n)').toLowerCase();
    if (favColor === 'y' || favColor === 'yes') {
      score ++;
      //console.log(Correct!)
      alert('Correct! is any other color as good?');
    } else if (favColor === 'n' || favColor === 'no') {
      //console.log(Incorrect)
      alert('Sorry that is incorrect!');
    } else {
      alert('Please answer in (y/n) format.');
    }

    //middle name
    let middleName = prompt('Is my middle name Robert? (y/n)').toLowerCase();
    if (middleName === 'y' || middleName === 'yes') {
      //console.log(Incorrect)
      alert('Sorry that is incorrect!');
    } else if (middleName === 'n' || middleName === 'no') {
      score ++;
      //console.log(Correct!)
      alert('Correct! My friends call me Hot Rod! (or at least I tell them too)');
    } else {
      alert('Please answer in (y/n) format.');
    }

    //age
    let age = prompt('am I older then 21? (y/n)').toLowerCase();
    if (age === 'y' || age === 'yes') {
      //console.log(Incorrect)
      alert('Nope! I wish');
    } else if (age === 'n' || age === 'no') {
      score ++;
      //console.log(Correct!)
      alert('Correct! I only just turned 20. Did you wish me happy birthday?');
    } else {
      alert('Please answer in (y/n) format.');
    }

    //location
    let loc = prompt('Do I live in the Seattle area? (y/n)').toLowerCase();
    if (loc === 'y' || loc === 'yes') {
      //console.log(Incorrect)
      alert('Wrong! I do really miss the views though!');
    } else if (loc === 'n' || loc === 'no') {
      score ++;
      //console.log(Correct!)
      alert('Correct! I moved just a little bit ago!');
    } else {
      alert('Please answer in (y/n) format.');
    }

    //humble
    let humble = prompt('Am I the most humble person to ever exist? (y/n)').toLowerCase();
    if (humble === 'y' || humble === 'yes') {
      score ++;
      //console.log(Correct!)
      alert('Of course im the most humble! Im much more humble then you!');
    } else if (humble === 'n' || humble === 'no') {
      //console.log(Incorrect)
      alert('You are way off!');
    } else {
      alert('Please answer in (y/n) format.');
    }

    alert('You got ' + score + '/5 correct!');

  } else if (checkTest === 'n' || checkTest === 'no') {
    alert('Ok read my bio and click the "take test" button when you are ready!');
    return;
  } else {
    alert('Please answer in (y/n) format.');
  }
}
