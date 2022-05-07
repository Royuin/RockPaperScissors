let computerScore = 0; 
let playerScore = 0;

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
          result = tie;
          return tie;
      } else if (computerSelection === 'paper') {
           lose = console.log('Computer wins paper beats rock!');
          result = lose;
          computerScore++;
          return result;
      } else if (computerSelection === 'scissors') {
           win = console.log('You win rock beats scissors!');
          result = win;
          playerScore++;
          return win;
      }
    
  } 
    else if (playerSelection.toLowerCase() === 'paper') {
      if (computerSelection === 'rock') {
         win = console.log('You win paper beats rock!');
        result = win;
        playerScore++;
        return win;
      } else if (computerSelection === 'paper') {
           tie = console.log('Tie try again!');
            result = tie          
           return result;
      } else if (computerSelection === 'scissors') {
           lose = console.log('Computer wins scissors beats rock!');
          result = lose;
          computerScore++;
          return lose;
      }
    
  }
    else if (playerSelection.toLowerCase() === 'scissors') { 
      if (computerSelection === 'rock') {
         lose = console.log('Computer wins rock beats scissors!');
        result = lose;
        computerScore++;
        return lose
      } else if (computerSelection === 'paper') {
           win = console.log('You win scissors beats paper');
          result = win;
          playerScore++;
          return win;
      } else if (computerSelection === 'scissors)') {
           tie = console.log('Tie try again!')
          result = tie;
          return tie;
      }
  } 
  
}   



function game() {
  computerScore = 0;
  playerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    if (playerScore >= 3) break;
    else if (computerScore >= 3) break;
   
    let playerSelection = prompt('Choose your weapon rock, paper, or scissors?');
    playRound(playerSelection, computerSelection)
     
    }
  while (playerScore < 3 && computerScore < 3) {
      let playerSelection = prompt('Choose your weapon rock, paper, or scissors?');
      playRound(playerSelection, computerSelection)
    }
    if (playerScore >= 3) {
      alert('Player wins the game!');
  
    } else if (computerScore >= 3) {
        alert('Computer wins the game!');
      }
    
}

const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');
const results = document.querySelector('.results');

rockButton.addEventListener('click', (e) => {
  playRound('rock', computerSelection);
});

paperButton.addEventListener('click', (e) => {
  playRound('paper', computerSelection);
});

scissorsButton.addEventListener('click', (e) => {
  playRound('scissors', computerSelection);
});


                                     
