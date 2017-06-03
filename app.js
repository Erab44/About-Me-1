'use strict';

var correct = 0;
var wrong = 0;

// Making the Quiz and Answer Key for Questions 1-5
var myQuizz = [
  ['Are Fantasy books my favorite kind of books to read?', 'yes', 'y', 'That is correct! Nothing like a good fantasy book to get lost in!'],
  ['Are Horror movies my favorite kind of movies?', 'no', 'n', 'That is correct! I am terrified by horror movies!'],
  ['Did I go to state for chess in elementary school?', 'yes', 'y', 'That is correct! I was in chess club growing up!'],
  ['Did I go to state for water polo in high school?', 'no', 'n', 'That is correct! I would drown 10/10 times if I tried to play water polo!'],
  ['Am I a certified scuba diver?', 'yes', 'y', 'That is correct! My first dive ever I saw a shark!'],
  ['You won the number guessing game!', 'You lost the number guessing game :('],
  ['Besides a shark, guesss what other non-fish creatures I\'ve seen while scuba diving? You get six guesses! (use the plural form)', 'turtles', 'eagle rays', 'octopuses', 'eels', 'That is correct! It was pretty awesome!']
];

//Listing the answers to question 7 to make things easier later
var questionSevenAnswers = [];
for(var i = 1; i < 5; i++){
  questionSevenAnswers.push(' ' + myQuizz[6][i]);
}

alert('SURPRISE! POP QUIZ!');
var userName = prompt('Let\'s start off with an easy one. First, what is your name?');
alert('Hello ' + userName + '! Good luck in ths Pop Quiz! Please answer Y/N or Yes/No to questions 1-5! Here we go!');

//Start Looping through the quizz
for (var i = 0; i < myQuizz.length - 2; i++) {
  var guess1 = prompt(myQuizz[i][0]);
  if (guess1.toLowerCase() === myQuizz[i][1] || guess1.toLowerCase() === myQuizz[i][2]) {
    alert(myQuizz[i][3]);
    correct ++;
    console.log('correct= ' + correct);
    myQuizz[i][4] = guess1;
    console.log(myQuizz[i]);
  } else {
    alert('That is incorrect! Better luck next question :)');
    wrong ++;
    console.log('wrong= ' + wrong);
    myQuizz[i][4] = guess1;
    console.log(myQuizz[i]);
  }
}

//Question 6 | The Number Guessing Question
var round = 1;
var question6 = false;
var myNumber = Math.floor((Math.random() * 20) + 1);
console.log(myNumber);
var guess6 = parseInt(prompt('Guess a number between 1 and 20 - I will give you 4 chances.'));
while(round < 4){
  if(guess6 === myNumber){
    alert('You guessed it correctly!');
    question6 = true;
    correct++;
    break;
  }
  else if(guess6 > myNumber){
    alert('Your guess was higher than my number. Try again!');
    round++;
    var guess6 = parseInt(prompt('Guess another number between 1 and 20'));
    continue;
  } else {
    alert('Your guess was lower than my number. Try again!');
    round++;
    var guess6 = parseInt(prompt('Guess another number between 1 and 20'));
    continue;
  }
}
//Telling the user the results
if(question6 === false) {
  alert('You were 0 for 4. Better luck next time pal!');
}

//Question 7
var turns = 1;
var question7 = false;
var guess7 = prompt(myQuizz[6][0]);
while(turns < 6){
  if(guess7.toLowerCase() === myQuizz[6][1] || guess7.toLowerCase() === myQuizz[6][2] || guess7.toLowerCase() === myQuizz[6][3] || guess7.toLowerCase() === myQuizz[6][4]){
    alert(myQuizz[6][5] + 'I have seen the following while diving: ' + questionSevenAnswers + '!');
    question7 = true;
    console.log('correct= ' + correct);
    break;
  } else {
    var guess7 = prompt('Nope haven\'t seen one of those yet. Guess again!');
    turns++;
    console.log('this is turn ' + turns);
    continue;
  }
}
if(question7 === false) {
  alert('You were 0 for 6. I have seen the following while diving: ' + questionSevenAnswers + '!');
}

alert('The quiz is over ' + userName + '! Let\'s see the results!');

//Quiz Results Printed

document.write('<h2>Here are the results to the quiz you took about me ' + userName + '!</h2>');
document.write('<h3>You got ' + correct + '/7 correct!</h3>');
for (var i = 0; i < myQuizz.length - 2; i++) {
  document.write('<h4>Question 1 asked "' + myQuizz[i][0] + '". You guessed "' + myQuizz[i][4] + '" and the answer to that is "' + myQuizz[i][1] + '"! </h4>');
};

if(question6 === true) {
  document.write('<h4>' + myQuizz[5][0] + '</h4>');
} else {
  document.write('<h4>' + myQuizz[5][1] + '</h4>');
}

if(question7 === true) {
  document.write('<h4>You got question 7 correct! Here are the correct answers again: ' + questionSevenAnswers + '. </h4>');
} else {
  document.write('<h4>You got question 7 wrong :( Here are the correct answers again: ' + questionSevenAnswers + '. </h4>');
}
