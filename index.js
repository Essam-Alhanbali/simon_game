let btnColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
let index = 0;

// starting the game on pressing a key
$(document).keypress(function startGame() {
  if (!started){
    nextSequence();
    started = true;
  }
});

// handling user guess when he clicks a button
$("button").on("click", function savingUserClick() {
  let chosenBtn = $(this);
  let userChosenColor = chosenBtn.attr("id");

  userClickedPattern.push(userChosenColor);

  if(checkUserChoice(userClickedPattern, gamePattern)){
    animatePress(userChosenColor);
    playSound(userChosenColor);
    index++;

    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(nextSequence, 1000);
      index = 0;
    }

    console.log('yes');
    
  } else {
    console.log("no");
    gameOver();
    playSound("wrong");
  }
});

// getting the next color randomly
function nextSequence() {
  userClickedPattern = [];
  level++;

  $("h1").text("level " + level);
  
  let randomNum = Math.floor(Math.random() * 4);
  
  let randomChosenColor = btnColors[randomNum];
  gamePattern.push(randomChosenColor);
  
  chosenBtn = $("#" + randomChosenColor);
  animatePress(randomChosenColor);
  playSound(randomChosenColor);

  
}

function playSound(name) {
  let sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(currentColor) {
  btnWithColor = $("#" + currentColor);
  
  btnWithColor.addClass("pressed");

  setTimeout(function removePress() {
    btnWithColor.removeClass("pressed");
  }, 100);
}

function checkUserChoice(userClickedPattern, gamePattern) {
  console.log(gamePattern);
  console.log(userClickedPattern);
  console.log(index);

  if (userClickedPattern[index] == gamePattern[index]){
    return true;
  } 

  return false;
}

function gameOver() {
  let body = $("body").css("background-color", "red");
  setTimeout(() => {
    body.css("background-color", "#011F3F");
  }, 200);

  $("h1").text("GAME OVER your score:" + (level-1) + " press a key to restart");
  
  level = 0;
  index =0;
  gamePattern = [];

  started = false;
}