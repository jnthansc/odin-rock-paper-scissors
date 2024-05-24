console.log('hello');

const choiceOptions = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choiceOptions.length);

  return choiceOptions[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
  return prompt('Rock, Paper, Scissors?', '');
}

console.log(getHumanChoice());
