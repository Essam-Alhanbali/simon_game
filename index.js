$(document).keypress(startGame);

let lvl = 1;
let chosenBtns = [];
let clickedBtns = [];

function startGame() {
  let random = Math.floor(Math.random() * 4);
  let btnsArr = $("button");

  chosenBtns.push(btnsArr.eq(random));
  chosenBtns[lvl - 1].animate({ opacity: "0.3" }).animate({ opacity: "1" });

  $(".title").text("level " + lvl);
}

let i = 0;
$("button").on("click", function () {
  clickedBtns.push($(this));

  if (chosenBtns[i] == clickedBtns[i])
  {
    console.log("wow");
  }
  else 
  {
    console.log("not wow");
  }

  i++;
  // for (let i = 0; i < lvl; i++) {
  //   console.log("hi");
  //   if (clickedBtns[i].is(chosenBtns[i])) {
  //     if (i == lvl - 1) {
  //       lvl++;
  //       startGame();
  //     }
  //   } else {
  //     $(".title").text("GAME OVER !!");
  //     break;
  //   }

  // if (chosenBtn.is(clickedBtn)) {
  //   startGame();
  //   console.log("true");
  //   lvlCnt++;
  // } else {
  //   console.log("false");
  // }
});
