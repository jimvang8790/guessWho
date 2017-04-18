var podArray = [
  'Jim', 'Abby', 'Tessa', 'Amal'
];

//making global but not setting them equal to anything inorder to call them later
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
 compareUserGuess();
}

//this generates a random number - used in appendName
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//we are appending names to the div
function appendName() {
  var ourNumber = randomNumber(0, podArray.length-1);//making a random number between our podArray
  randomPerson = podArray[ourNumber];//giving the person a random number
  $('.name-guess').text(randomPerson);//appending to the DOM
}

//this compares the users guess to the correct answer
function compareUserGuess() {
  if (name === randomPerson) {
    $('.results').text("You got it dude!").fadeIn('slow').fadeOut('slow');
    appendName(); // calling this again will restart the game after guessing correctly
  } else { // other wise guess again until guess correctly
    $('.results').text("Wrong!!! Try again").fadeIn('slow').fadeOut('slow');
  }
}
