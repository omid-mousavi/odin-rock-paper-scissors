function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1; // math random result is between 0 and 1, then multipied by 3, result will be between 0 and 3(exclusive), i used floor method to round it and incrementing it will be between 1 to 3(inclusive)
  switch(randomChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}