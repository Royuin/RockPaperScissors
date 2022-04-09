let rpsArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  let rpsArray = ['Rock', 'Paper', 'Scissors'];

  let result = rpsArray[(Math.random() * rpsArray.length) | 0];

  return result
  
}

const playerSelection = window.prompt('Choose your weapon');

const computerSelection = computerPlay();
