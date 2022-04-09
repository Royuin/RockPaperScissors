let rpsArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  let rpsArray = ['Rock', 'Paper', 'Scissors'];

  let result = rpsArray[(Math.random() * rpsArray.length) | 0];

  return result
  
}

const playerSelection = window.prompt('Choose your weapon');

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock') {
    console.log('Tie try again!');
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
    console.log('Computer wins!');
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') { console.log('Player wins!');
}
}
