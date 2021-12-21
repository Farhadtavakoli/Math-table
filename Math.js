// If we click on the start/reset button,
let playing = false;
let score = 0;
let time;
hide("time");
document.getElementById("startReset").onclick = function () {
  hide("gameover");
  time = 10;

  console.log("I do it!");
  if (playing) {
    location.reload();
  } else if (!playing) {
    console.log("Not playing");
    playing = true;
    score = 0;
    document.getElementById("scoreValue").innerHTML = score;
    show("time");

    document.getElementById("remain").innerHTML = time;
    countDown();
    generateQuestionAnswer();
    document.getElementById("startReset").innerHTML = "Reset";
  }
};
function stopCountDown() {
  clearInterval(action);
  show("gameover");
  document.getElementById("gameover").innerHTML =
    "<p>Game Over!</p> <p>Your score is " + score + "</p>";
  hide("time");
  hide("correct");
  hide("wrong");
  playing = false;
  document.getElementById("startReset").innerHTML = "Start Game";
}

function countDown() {
  action = setInterval(function () {
    time -= 1;
    document.getElementById("remain").innerHTML = time;
    if (time == 0) {
      stopCountDown();
    }
  }, 1000);
}
function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}
function generateQuestionAnswer() {}

/*
      if we are playing 
         reload the page 
       if we are not playing 
         set score to zero
         show countdowm box
         reduce time by 1sec ina loop
             time left? 
                yes--> countinue
                else Gameover
         change the button to reset
         generate a new question and multiple answers */

/* If we click on the answer box
      if we are playing
         correct? 
            yes: increase score
                 show correct box
                 generate new question
                    
            no: 
                show try again box for 1 sec*/
