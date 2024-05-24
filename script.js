console.log('hello');

function getComputerChoice() {
  const choiceOptions = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choiceOptions.length);

  return choiceOptions[randomIndex];
}

console.log(getComputerChoice());
