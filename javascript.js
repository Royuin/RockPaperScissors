let rpsArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let rpsArray = ['rock', 'paper', 'scissors'];

  let result = rpsArray[(Math.random() * rpsArray.length) | 0];

  return result
  
}

const playerSelection = window.prompt('Choose your weapon');

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
    console.log('Tie try again!');
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
    console.log('Computer wins!');
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { console.log('Player wins!');
}
}
