let rpsArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let rpsArray = ['rock', 'paper', 'scissors'];

  let result = rpsArray[(Math.random() * rpsArray.length) | 0];

  return result
  
}

const playerSelection = window.prompt('Choose your weapon');

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock')  {
    if (computerSelection === 'rock') {
      return 'Tie try again!';
    } else if (computerSelection === 'paper') {
      return 'Computer wins paper beats rock!';
    } else if (computerSelection === 'scissors') {
      return 'You win rock beats scissors';
    }
    
} 
  else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'rock') {
      return 'You win paper beats rock!';
    } else if (computerSelection === 'paper') {
      return 'Tie try again!';
    } else if (computerSelection === 'scissors') {
      return 'Computer wins scissors beats rock';
    }
    
}
  else if (playerSelection.toLowerCase() === 'scissors') { 
    if (computerSelection === 'rock') {
      return 'Computer wins rock beats scissors!';
    } else if (computerSelection === 'paper') {
      return 'You win scissors beats paper';
    } else if (computerSelection === 'scissors)') {
      return 'Tie try again!';
    }
}
}