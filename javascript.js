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
      console.log('Tie try again!');
    } else if (computerSelection === 'paper') {
      console.log('Computer wins paper beats rock!');
    } else if (computerSelection === 'scissors') {
      console.log('You win rock beats scissors');
    }
    
} 
  else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'rock') {
      console.log('You win paper beats rock!');
    } else if (computerSelection === 'paper') {
      console.log('Tie try again!');
    } else if (computerSelection === 'scissors') {
      console.log('Computer wins scissors beats rock');
    }
    
}
  else if (playerSelection.toLowerCase() === 'scissors') { 
    if (computerSelection === 'rock') {
      console.log('Computer wins rock beats scissors!');
    } else if (computerSelection === 'paper') {
      console.log('You win scissors beats paper');
    } else if (computerSelection === 'scissors)') {
      console.log('Tie try again!');
    }
}
}