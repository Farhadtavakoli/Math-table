// If we click on the start/reset button,
let playing = false;
let score = 0;
let time = 61;
document.getElementById("time").hidden = true;
function newGame() {
  if (playing) {
    location.reload();
  } else if (!playing) {
    playing = true;
    score = 0;
    document.getElementById("scoreValue").innerHTML = score;
    document.getElementById("time").hidden = false;
    document.getElementById("startReset").innerHTML = "Reset";
    while (time != 0) {
      time = time - 1;
      document.getElementById("remain").innerHTML = time;
    }
  }
}

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
