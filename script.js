const resultDiv = document.querySelector('.results');
const scoreboard = document.querySelector('.scoreboard');

const choiceOptions = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function resetScores() {
  humanScore = 0;
  computerScore = 0;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choiceOptions.length);

  return choiceOptions[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  let roundResultAnnouncement = '';

  if (humanChoice === computerChoice) {
    roundResultAnnouncement = "It's a tie! Try again.";
  } else if (
    (humanChoice === 'rock' && computerChoice == 'scissors') ||
    (humanChoice === 'paper' && computerChoice == 'rock') ||
    (humanChoice === 'scissors' && computerChoice == 'paper')
  ) {
    humanScore += 1;
    roundResultAnnouncement = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore += 1;
    roundResultAnnouncement = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  const roundResultParagaph = document.createElement('p');
  roundResultParagaph.textContent = roundResultAnnouncement;

  resultDiv.appendChild(roundResultParagaph);

  let scoreboardContent = '';

  if (computerScore >= 5) {
    scoreboardContent = 'Computer won! You have been defeated!';
    resetScores();
  } else if (humanScore >= 5) {
    scoreboardContent = 'You won! Congratulations!';
    resetScores();
  } else {
    scoreboardContent = `You: ${humanScore} | Computer: ${computerScore}`;
  }

  scoreboard.innerHTML = scoreboardContent;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const id = button.id;
    const computerChoice = getComputerChoice();

    playRound(id, computerChoice);
  });
});
