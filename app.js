'use strict';

var correct = 0;
var wrong = 0;

var question1 = 'Are Fantasy books my favorite kind of books to read?';
var answer1 = 'yes';
var answerOne = 'y';

var question2 = 'Are Horror movies my favorite kind of movies?';
var answer2 = 'no';
var answerTwo = 'n';

var question3 = 'Did I go to state for chess in elementary school?';
var answer3 = 'yes';
var answerThree = 'y';

var question4 = 'Did I go to state for water polo in high school?';
var answer4 = 'no';
var answerFour = 'n';

var question5 = 'Am I a certified scuba diver?';
var answer5 = 'yes';
var answerFive = 'y';

var userName = prompt('Hello my name is Ashkaan. What is your name?');
alert('Hello ' + userName + '! Here is a quiz about me! Please answer Y/N or Yes/No to each question! Here we go!');

var guess1 = prompt(question1);
if (guess1.toLowerCase() === answer1 || guess1.toLowerCase() === answerOne) {
  alert('That is correct! Nothing like a good fantasy book to get lost in!');
  correct ++;
  console.log('correct= ' + correct);
} else {
  alert('That is incorrect! Better luck next question :)');
  wrong ++;
  console.log('wrong= ' + wrong);
}

var guess2 = prompt(question2);
if (guess2.toLowerCase() === answer2 || guess2.toLowerCase() === answerTwo) {
  alert('That is correct! I am terrified by horror movies!');
  correct ++;
  console.log('correct= ' + correct);
} else {
  alert('That is incorrect! Better luck next question :)');
  wrong ++;
  console.log('wrong= ' + wrong);
}

var guess3 = prompt(question3);
if (guess3.toLowerCase() === answer3 || guess3.toLowerCase() === answerThree) {
  alert('That is correct! I was in chess club growing up!');
  correct ++;
  console.log('correct= ' + correct);
} else {
  alert('That is incorrect! Better luck next question :)');
  wrong ++;
  console.log('wrong= ' + wrong);
}

var guess4 = prompt(question4);
if (guess4.toLowerCase() === answer4 || guess4.toLowerCase() === answerFour) {
  alert('That is correct! I would drown 10/10 times if I tried to play water polo!');
  correct ++;
  console.log('correct= ' + correct);
} else {
  alert('That is incorrect! Better luck next question :)');
  wrong ++;
  console.log('wrong= ' + wrong);
}

var guess5 = prompt(question5);
if (guess5.toLowerCase() === answer5 || guess5.toLowerCase() === answerFive) {
  alert('That is correct! My first dive ever I saw a shark!');
  correct ++;
  console.log('correct= ' + correct);
} else {
  alert('That is incorrect! Better luck next question :)');
  wrong ++;
  console.log('wrong= ' + wrong);
}

alert('The quiz is over ' + userName + '! Let\'s see the results!');

document.write('<h2>Here are the results to the quiz you took about me!</h2>');
document.write('<h3>You got ' + correct + '/5 correct!</h3>');
document.write('<h4>Question 1 asked "' + question1 + '". You guessed "' + guess1.toLowerCase() + '" and the answer to that is "yes"! </h4>');
document.write('<h4>Question 2 asked "' + question2 + '". You guessed "' + guess2.toLowerCase() + '" and the answer to that is "no"! </h4>');
document.write('<h4>Question 3 asked "' + question3 + '". You guessed "' + guess3.toLowerCase() + '" and the answer to that is "yes"! </h4>');
document.write('<h4>Question 4 asked "' + question4 + '". You guessed "' + guess4.toLowerCase() + '" and the answer to that is "no"! </h4>');
document.write('<h4>Question 5 asked "' + question5 + '". You guessed "' + guess5.toLowerCase() + '" and the answer to that is "yes"! </h4>');
