// HOW TO USE THIS CALCULATOR
// Open the index.htm file in this folder in a web browser window.
// You can then input in the text field a valid string of bowls.
// Then hit the generate button to calculate the score.

var genBtn = document.getElementById('generator');
var scoreDisplay = document.getElementById('score-display');

// This calls the bowlScore function from bowling.js and displays it within the text span on the HTML page.
function generate() {
   var gameInput = document.getElementById('game-input').value;
   var score = bowlScore(gameInput);
   scoreDisplay.textContent = score;
}

// Functionality for clicking the gen button.
genBtn.addEventListener('click', generate);

// Functionality for enter button to execute score calculator.
document.addEventListener('keydown', function(e) {
   if (e.keyCode === 13) {
      generate();
   }
});
