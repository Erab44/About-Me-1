'use strict'

var confirmed = confirm('Are you ready to rock and roll?');

if (confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they are not ready but we are gonna start anyway');
}
