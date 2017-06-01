'use strict';

var correct = 0;
var wrong = 0;

// Making the Quiz and Answer Key
var myQuizz = [
  ['Are Fantasy books my favorite kind of books to read?', 'yes', 'y', 'That is correct! Nothing like a good fantasy book to get lost in!'],
  ['Are Horror movies my favorite kind of movies?', 'no', 'n', 'That is correct! I am terrified by horror movies!'],
  ['Did I go to state for chess in elementary school?', 'yes', 'y', 'That is correct! I was in chess club growing up!'],
  ['Did I go to state for water polo in high school?', 'no', 'n', 'That is correct! I would drown 10/10 times if I tried to play water polo!'],
  ['Am I a certified scuba diver?', 'yes', 'y', 'That is correct! My first dive ever I saw a shark!']
];

var userName = prompt('Hello my name is Ashkaan. What is your name?');
alert('Hello ' + userName + '! Here is a quiz about me! Please answer Y/N or Yes/No to each question! Here we go!');

//Start Looping through the quizz
for (var i = 0; i < myQuizz.length; i++) {
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

alert('The quiz is over ' + userName + '! Let\'s see the results!');

//Quiz Results Printed
document.write('<h2>Here are the results to the quiz you took about me ' + userName + '!</h2>');
document.write('<h3>You got ' + correct + '/5 correct!</h3>');
for (var i = 0; i < myQuizz.length; i++) {
  document.write('<h4>Question 1 asked "' + myQuizz[i][0] + '". You guessed "' + myQuizz[i][4] + '" and the answer to that is "' + myQuizz[i][1] + '"! </h4>');
};
