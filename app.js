'use strict';

var correct = 0;
var wrong = 0;

var myQuizz = [
  ['Are Fantasy books my favorite kind of books to read?', 'yes', 'y'],
  ['Are Horror movies my favorite kind of movies?', 'no', 'n'],
  ['Did I go to state for chess in elementary school?', 'yes', 'y'],
  ['Did I go to state for water polo in high school?', 'no', 'n'],
  ['Am I a certified scuba diver?', 'yes', 'y']
];

var userName = prompt('Hello my name is Ashkaan. What is your name?');
alert('Hello ' + userName + '! Here is a quiz about me! Please answer Y/N or Yes/No to each question! Here we go!');

var guess1 = prompt(myQuizz[0][0]);
if (guess1.toLowerCase() === myQuizz[0][1] || guess1.toLowerCase() === myQuizz[0][2]) {
  alert('That is correct! Nothing like a good fantasy book to get lost in!');
  correct ++;
  console.log('correct= ' + correct);
  myQuizz[0][3] = guess1;
  console.log(myQuizz[0]);
} else {
  alert('That is incorrect! Better luck next question :)');
  wrong ++;
  console.log('wrong= ' + wrong);
  myQuizz[0][3] = guess1;
  console.log(myQuizz[0]);
}

var guess2 = prompt(myQuizz[1][0]);
if (guess2.toLowerCase() === myQuizz[1][1] || guess2.toLowerCase() === myQuizz[1][2]) {
  alert('That is correct! I am terrified by horror movies!');
  correct ++;
  console.log('correct= ' + correct);
  myQuizz[1][3] = guess2;
  console.log(myQuizz[1]);
} else {
  alert('That is incorrect! Better luck next question :)');
  wrong ++;
  console.log('wrong= ' + wrong);
  myQuizz[1][3] = guess2;
  console.log(myQuizz[1]);
}

var guess3 = prompt(myQuizz[2][0]);
if (guess3.toLowerCase() === myQuizz[2][1] || guess3.toLowerCase() === myQuizz[2][2]) {
  alert('That is correct! I was in chess club growing up!');
  correct ++;
  console.log('correct= ' + correct);
  myQuizz[2][3] = guess3;
  console.log(myQuizz[2]);
} else {
  alert('That is incorrect! Better luck next question :)');
  wrong ++;
  console.log('wrong= ' + wrong);
  myQuizz[2][3] = guess3;
  console.log(myQuizz[2]);
}

var guess4 = prompt(myQuizz[3][0]);
if (guess4.toLowerCase() === myQuizz[3][1] || guess4.toLowerCase() === myQuizz[3][2]) {
  alert('That is correct! I would drown 10/10 times if I tried to play water polo!');
  correct ++;
  console.log('correct= ' + correct);
  myQuizz[3][3] = guess4;
  console.log(myQuizz[3]);
} else {
  alert('That is incorrect! Better luck next question :)');
  wrong ++;
  console.log('wrong= ' + wrong);
  myQuizz[3][3] = guess4;
  console.log(myQuizz[3]);
}

var guess5 = prompt(myQuizz[4][0]);
if (guess5.toLowerCase() === myQuizz[4][1] || guess5.toLowerCase() === myQuizz[4][2]) {
  alert('That is correct! My first dive ever I saw a shark!');
  correct ++;
  console.log('correct= ' + correct);
  myQuizz[4][3] = guess5;
  console.log(myQuizz[4]);
} else {
  alert('That is incorrect! Better luck next question :)');
  wrong ++;
  console.log('wrong= ' + wrong);
  myQuizz[4][3] = guess5;
  console.log(myQuizz[4]);
}

alert('The quiz is over ' + userName + '! Let\'s see the results!');

document.write('<h2>Here are the results to the quiz you took about me ' + userName + '!</h2>');
document.write('<h3>You got ' + correct + '/5 correct!</h3>');
document.write('<h4>Question 1 asked "' + myQuizz[0][0] + '". You guessed "' + myQuizz[0][3] + '" and the answer to that is "' + myQuizz[0][1] + '"! </h4>');
document.write('<h4>Question 2 asked "' + myQuizz[1][0] + '". You guessed "' + myQuizz[1][3] + '" and the answer to that is "' + myQuizz[1][1] + '"! </h4>');
document.write('<h4>Question 3 asked "' + myQuizz[2][0] + '". You guessed "' + myQuizz[2][3] + '" and the answer to that is "' + myQuizz[2][1] + '"! </h4>');
document.write('<h4>Question 4 asked "' + myQuizz[3][0] + '". You guessed "' + myQuizz[3][3] + '" and the answer to that is "' + myQuizz[3][1] + '"! </h4>');
document.write('<h4>Question 5 asked "' + myQuizz[4][0] + '". You guessed "' + myQuizz[4][3] + '" and the answer to that is "' + myQuizz[4][1] + '"! </h4>');
