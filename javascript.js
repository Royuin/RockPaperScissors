let rpsArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let rpsArray = ['rock', 'paper', 'scissors'];

   let result = rpsArray[(Math.random() * rpsArray.length) | 0];

  return result
  
}


let computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if (playerSelection.toLowerCase() === 'rock')  {
      if (computerSelection === 'rock') {
           tie = console.log('Tie try again!');
          return tie;
      } else if (computerSelection === 'paper') {
           lose = console.log('Computer wins paper beats rock!');
          return lose;
      } else if (computerSelection === 'scissors') {
           win = console.log('You win rock beats scissors!');
          return win;
      }
    
  } 
    else if (playerSelection.toLowerCase() === 'paper') {
      if (computerSelection === 'rock') {
         win = console.log('You win paper beats rock!');
        return win;
      } else if (computerSelection === 'paper') {
           tie = console.log('Tie try again!');
          return tie;
      } else if (computerSelection === 'scissors') {
           lose = console.log('Computer wins scissors beats rock!');
          return lose;
      }
    
  }
    else if (playerSelection.toLowerCase() === 'scissors') { 
      if (computerSelection === 'rock') {
         lose = console.log('Computer wins rock beats scissors!');
        return lose;
      } else if (computerSelection === 'paper') {
           win = console.log('You win scissors beats paper');
          return win;
      } else if (computerSelection === 'scissors)') {
           tie = console.log('Tie try again!')
          return tie;
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