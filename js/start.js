//GLOBAL VARIABLES

var decTimer;
var secondsLeft = 20;
var count = 0;
var clickableImages = document.getElementsByClassName("count-click");
// is it ok to use a variable name that is the same name as the id? Ask Shamoon.
var startButton = document.getElementById("startButton");

// TIMER FUNCTIONS

// Sets countdown to decrease by 1 every second
function startTimer(){
  decTimer = setInterval(timer, 1000);
  for (var i = 0; i < clickableImages.length; i++) {
    clickableImages[i].setAttribute("data-clickable", "true");
    startButton.setAttribute("class", "btn btn-danger btn-block center-block");
  }
};

// Anonymous Function/Event Listener - Start countdown by clicking on start button:
startButton.addEventListener("click", startTimer);

// Shows the countdown on the page. When countdown ends it initiates game over sequence
function timer() {
  if(secondsLeft > 0) {
    document.getElementById("time").innerHTML = secondsLeft-=1;`
  } else {
      gameOver();
      location.reload();
  }
};

// Game over sequence
function gameOver() {
  alert("Your time is up!");
  if (count === 0) {
    alert("You didn't click any characters. You needed to click on all 20 characters. You lose!")
  } else if (count === 1) {
    alert("You clicked " + count + " character. You need 19 more. You lose!")
  } else {
    alert("You clicked on " + count + " characters. You need " + (20 - count) + " more. You lose!")
  }
  clearInterval(decTimer);
};