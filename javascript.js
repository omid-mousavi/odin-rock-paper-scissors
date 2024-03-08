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

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
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

function playAgain(event) {
  globalComputerResult = 0, globalPlayerResult = 0;
  headerTwo.remove();
  currentResult.textContent = '';
  yourScore.textContent = '0', computerScore.textContent = '0';
  event.target.remove();
}

let globalPlayerResult = 0, globalComputerResult = 0; // global variables in order to access them everywhere

function getFullResult(result) {
  const resetGame = document.createElement('button');
  resetGame.textContent = 'Play Again!';
  resetGame.addEventListener('click', playAgain);
  resetGame.id = 'playAgainExist';

  yourScore.textContent = globalPlayerResult;
  computerScore.textContent = globalComputerResult;

  currentResult.textContent = result;


  if(globalPlayerResult >= 5) {
    headerTwo.style.color = '#00ff00';
    headerTwo.textContent = `In total, you won ${globalPlayerResult} times while computer won ${globalComputerResult} times! You won the game!`;
    if(document.getElementById('playAgainExist') === null) {
      resultDiv.appendChild(headerTwo);
      resultDiv.appendChild(resetGame);
    }
  } else if(globalComputerResult >= 5) {
    headerTwo.style.color = '#ff0000';
    headerTwo.textContent = `In total, computer won ${globalComputerResult} times while you won ${globalPlayerResult} times! You lost the game!`
    if(document.getElementById('playAgainExist') === null) {
      resultDiv.appendChild(headerTwo);
      resultDiv.appendChild(resetGame);
    }
  }
}

function playGame(event) {
  let playerSelection, result;

  playerSelection = event.target.textContent; // get the button inner text

  result = playRound(playerSelection);

  if(result.includes("won!")) {
    globalPlayerResult++;
  } else if(result.includes("lost!")) {
    globalComputerResult++;
  }

  getFullResult(result);
}

const resultDiv = document.querySelector('.result-div');
const headerTwo = document.createElement('h2');
const currentResult = document.querySelector('.current-result');
const yourScore = document.querySelector('.your-score');
const computerScore = document.querySelector('.computer-score');
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');

rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);