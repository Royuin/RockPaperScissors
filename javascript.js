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
          return tie;
      } else if (computerSelection === 'paper') {
          let lose = console.log('Computer wins paper beats rock!');
          return lose;
      } else if (computerSelection === 'scissors') {
          let win = console.log('You win rock beats scissors!');
          return win;
      }
    
  } 
    else if (playerSelection.toLowerCase() === 'paper') {
      if (computerSelection === 'rock') {
        let win = console.log('You win paper beats rock!');
        return win;
      } else if (computerSelection === 'paper') {
          let tie = console.log('Tie try again!');
          return tie;
      } else if (computerSelection === 'scissors') {
          let lose = console.log('Computer wins scissors beats rock!');
          return lose;
      }
    
  }
    else if (playerSelection.toLowerCase() === 'scissors') { 
      if (computerSelection === 'rock') {
        let lose = console.log('Computer wins rock beats scissors!');
        return lose;
      } else if (computerSelection === 'paper') {
          let win = console.log('You win scissors beats paper');
          return win;
      } else if (computerSelection === 'scissors)') {
          let tie = console.log('Tie try again!')
          return tie;
      }
  } 
}   

function game() {
  
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt('WEAPON?');
    playRound(playerSelection, computerSelection)

    
  }
  
}

game();