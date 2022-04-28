// function to calculate the result of the survey
function tabulateAnswers() {
  // initialize variables for each choice's score
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;

  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        c1score = c1score + 1;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 1;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
    }
  }

  var maxscore = Math.max(c1score,c2score,c3score,c4score);

  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  if (c1score == maxscore) { // If user chooses this option more frequently than others, this outcome will be displayed.
    answerbox.innerHTML = "You've barely considered Computer Ethics at all. Not your fault! Very little Academic institutions around Europe cover these topics well enough.";
  }
  if (c2score == maxscore) {
    answerbox.innerHTML = "Well done having at least considered Computer Ethics. Very little Academic institutions around Europe cover these topics well enough.";
  }
  if (c3score == maxscore) {
    answerbox.innerHTML = "Well done having considered Computer Ethics. No doubt the education you recieved on these topics never told you the whole picture. Serious issues remain with the quality of ethical teaching in Academic institutions around Europe.";
  }
  if (c4score == maxscore) {
    answerbox.innerHTML = "Well done having considered Computer Ethics throughout your education and personal projects. Would you belive that puts you into the 99th percentile of Software Developers!";
  }
}
