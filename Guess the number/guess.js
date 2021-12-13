let randomNr = null;
let userName;
let guess;

while (userName === undefined || userName === null || userName.length === 0) {
  userName = prompt("Welcome! What is your name?");
}

alert("Hey " + userName + " !");

randomNr = Math.floor(Math.random() * (25) + 1);

while (guess !== randomNr) {
  guess = parseInt(prompt("Enter a number between 0 and 25 to start guessing..."));
  alert("You guessed:" + guess);
  if (guess != randomNr) {
    alert("Unfortunately, that is not correct!");
  } else {
    alert("Congratulations, you have won the game!");
    alert("Bye " + userName + " see you!");
  }
}