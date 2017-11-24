// HOW TO USE THIS CALCULATOR
// Open the index.htm file in this folder in a web browser window.
// You can then input in the text field a valid string of bowls.
// Then hit the generate button to calculate the score.


// This function accepts a string of characters that can include 1-9, -, /, or X.
// It then splits them apart to represent each roll
// and calculates the final score of the game.
function bowlScore(game) {
   game = game.toUpperCase();
   // Splits up the string and stores every character as a roll in an array.
   var rolls = game.split('');

   console.log('All rolls: ' + rolls);

   // Finds out the number of extra rolls awarded after the final frame of the game.
   // This is needed so they can be counted out once the game is calculating the score.
   var bonusBalls;
   if (game.charAt(game.length - 3) === 'X') {
      bonusBalls = 2;
   } else if (game.charAt(game.length - 2) === '/') {
      bonusBalls = 1;
   } else {
      bonusBalls = 0;
   }

   // Pushes the number of pins that were successful after every roll into an array,
   // but parses them as integers so they can be added up to obtain the final score.
   var pins = [];
   for (i=0; i < rolls.length; i++) {
      if (rolls[i] === 'X') {
         pins.push(10);
      } else if (rolls[i] === '/') {
         pins.push(10 - rolls[i-1]);
      } else if (rolls[i] === '-') {
         pins.push(0);
      } else { pins.push( parseInt(rolls[i]) ); }
   }

   // Lastly, once all strings and arrays have been generated,
   // the score is calculated by looping through each roll
   // and adding the pins followed by a strike or spare.
   var score = 0;
   for (i=0; i < rolls.length - bonusBalls; i++) {
      // First, the base score is obtained by grabbing all numbers in the array.
      score += pins[i];
      // Then the bonuses for spares.
      if (rolls[i] === '/') {
         score += pins[i+1];
      }
      // Then the bonuses for strikes.
      if (rolls[i] === 'X') {
         score += pins[i+1] + pins[i+2];
      }
   }
   // Score is returned for outputting to the page.
   console.log('Final score: ' + score);
   if (score.toString() === 'NaN') {
     return 'Invalid game!';
   } else {
     return score;
   }
}
