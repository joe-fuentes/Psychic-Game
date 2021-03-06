  <script type="text/javascript">    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
      // Reworked our code from last step to use "else if" instead of lots of if statements.
      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if (userGuess === computerGuess) {
          wins++;
        }
      if (userGuess != computerGuess) {
          losses++;
          guessesLeft--;
        }
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p><h1><strong>The Psychic Game</strong></h1></p>" + 
          "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p> Your Guesses so far: " + userGuess + "</p>" +
          "<p> Computer picked revealed: " + computerGuess + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
    };
  </script>