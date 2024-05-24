console.log('hello');

const choiceOptions = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choiceOptions.length);

  return choiceOptions[randomIndex];
}

function getHumanChoice() {
  return prompt('Rock, Paper, Scissors?', '');
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  alert(
    humanScore > computerScore
      ? 'You won against the computer'
      : 'You lost against the computer'
  );

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let winnerAnnouncement = '';

    if (humanChoice === computerChoice) {
      winnerAnnouncement = "It's a tie! Try again.";
    } else if (
      (humanChoice === 'rock' && computerChoice == 'scissors') ||
      (humanChoice === 'paper' && computerChoice == 'rock') ||
      (humanChoice === 'scissors' && computerChoice == 'paper')
    ) {
      humanScore += 1;
      winnerAnnouncement = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore += 1;
      winnerAnnouncement = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    console.log(winnerAnnouncement);
  }
}

playGame();
