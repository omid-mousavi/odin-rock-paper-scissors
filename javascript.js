function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1; // math random result is between 0 and 1, then multipied by 3, result will be between 0 and 3(exclusive), i used floor method to round it and incrementing it will be between 1 to 3(inclusive)
  switch(randomChoice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function capitilizeFirstLetter(yourWord) {
  return `${yourWord.toUpperCase().at(0)}${yourWord.toLowerCase().slice(1)}`;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitilizeFirstLetter(playerSelection);
  if(playerSelection === computerSelection) {
    return `You tie! ${playerSelection} is same as ${computerSelection}`;
  }
  
  if(playerSelection === "Rock" && computerSelection === "Scissors") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else if(playerSelection === "Rock" && computerSelection === "Paper") {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }

  if(playerSelection === "Paper" && computerSelection === "Rock") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else if(playerSelection === "Paper" && computerSelection === "Scissors") {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }

  if(playerSelection === "Scissors" && computerSelection === "Rock") {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  } else if(playerSelection === "Scissors" && computerSelection === "Paper") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
}

function playGame() {
  let playerResult = 0, computerResult = 0;
  let playerSelection, computerSelection, result;
  for(let counter = 1; counter <= 5; counter++) {
    playerSelection = prompt("Your turn: ");
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    if(result.includes("won!")) {
      playerResult++;
    } else if(result.includes("lost!")) {
      computerResult++;
    }
    console.log(result);
  }
  return (playerResult > computerResult) ? `In total, you won ${playerResult} times while computer won ${computerResult} times! You won the game!` : (computerResult > playerResult) ? `In total, computer won ${computerResult} times while you won ${playerResult} times! You lost the game!` : `In total, you won ${playerResult} times while computer won ${computerResult} times! You both tie!`;
}
console.log(playGame());