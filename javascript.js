let rpsArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let rpsArray = ['rock', 'paper', 'scissors'];

  let result = rpsArray[(Math.random() * rpsArray.length) | 0];

  return result
  
}



const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock')  {
      if (computerSelection === 'rock') {
          let tie = console.log('Tie try again!');
          let result = tie;
          return result;
      } else if (computerSelection === 'paper') {
          let lost = console.log('Computer wins paper beats rock!');
          let result = lost;
          return result;
      } else if (computerSelection === 'scissors') {
          let won = console.log('You win rock beats scissors!');
          let result = won;
          return result;
      }
    
  } 
    else if (playerSelection.toLowerCase() === 'paper') {
      if (computerSelection === 'rock') {
        let won = console.log('You win paper beats rock!');
        let result = won;
        return result;
      } else if (computerSelection === 'paper') {
          let tie = console.log('Tie try again!');
          let result = tie;
          return result;
      } else if (computerSelection === 'scissors') {
          let lost = console.log('Computer wins scissors beats rock!');
          let result = lost;
          return result;
      }
    
  }
    else if (playerSelection.toLowerCase() === 'scissors') { 
      if (computerSelection === 'rock') {
        let lost = console.log('Computer wins rock beats scissors!');
        let result = lost;
        return result;
      } else if (computerSelection === 'paper') {
          let win = console.log('You win scissors beats paper');
          let result = win;
          return result;
      } else if (computerSelection === 'scissors)') {
          let tie = console.log('Tie try again!');
          let result = tie;
          return result;
      }
  } 
}   

function game() {
  
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt('Choose your weapon rock, paper, or scissors?');
    playRound(playerSelection, computerSelection)
  }
}

game();