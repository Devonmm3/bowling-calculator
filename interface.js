// HOW TO USE THIS CALCULATOR
// Open the index.htm file in this folder in a web browser window.
// You can then input in the text field a valid string of bowls.
// Then hit the generate button to calculate the score.

var genBtn = document.getElementById('generator');
var scoreDisplay = document.getElementById('score-display');
var gameInput = document.getElementById('game-input');

// This calls the bowlScore function from bowling.js and displays it within the text span on the HTML page.
function generate() {
   var score = bowlScore(gameInput.value);
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


gameInput.addEventListener('keydown', function(e) {
   if (!e.key.match(
     /[0-9]|x|X|\/|-|Enter|Backspace|Delete|Control|ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Ctrl|Home|End|Shift|Alt|CapsLock/
   )) {
     e.preventDefault();
     gameInput.className += ' red-bg';
     setTimeout(function() {
       gameInput.classList.remove('red-bg');
     }, 200);
   }
}); // gameInput.eListen
