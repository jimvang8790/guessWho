var podArray = [
  'Jim', 'Abby', 'Tessa', 'Amal'
];

//making global
var name;
var randomPerson;
// getting document ready
$(document).ready(onReady);

function onReady() {
  appendName();
  // event listener
  $('.pod-picture').on('click', guessPicture);
}

// turning img to a click event
function guessPicture() {
 console.log('testing guessPicture'); // checking if guessPicture is working
name = $(this).data('name');
 console.log(name);
 compareUserGuess();
}

//we are appending names
function appendName() {
  var ourNumber = randomNumber(0, podArray.length-1);//making a random number between our podArray
  randomPerson = podArray[ourNumber];//giving the person a random number
  $('.name-guess').text(randomPerson);//appending to the DOM
}

//this generates a random number - used in appendName
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//this compares the guess to the correct answer
function compareUserGuess() {
  if (name === randomPerson) {
    $('.results').text("You got it dude!");
  } else {
    $('.results').text("WRONG!");
  }
}
