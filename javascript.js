let computerScore = 0; 
let playerScore = 0;

const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');
const results = document.querySelector('.results');
const playerScoreText = document.querySelector('.playerScore');
const computerScoreText = document.querySelector('.computerScore');
const gameWinner = document.querySelector('.gameWinner');


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
          tie = results.textContent = 'Tie try again!';
          result = tie;
          return tie;
      } else if (computerSelection === 'paper') {
           lose = results.textContent = 'Computer wins paper beats rock!';
          result = lose;
          computerScore++;
          return result;
      } else if (computerSelection === 'scissors') {
          win = results.textContent = 'You win rock beats scissors!';
          result = win;
          playerScore++;
          return win;
      }
    
  } 
    else if (playerSelection.toLowerCase() === 'paper') {
      if (computerSelection === 'rock') {
         win = results.textContent = 'You win paper beats rock!';
        result = win;
        playerScore++;
        return win;
      } else if (computerSelection === 'paper') {
           tie = results.textContent = 'Tie try again!';
            result = tie          
           return result;
      } else if (computerSelection === 'scissors') {
           lose = results.textContent = 'Computer wins scissors beats rock!';
          result = lose;
          computerScore++;
          return lose;
      }
    
  }
    else if (playerSelection.toLowerCase() === 'scissors') { 
      if (computerSelection === 'rock') {
         lose = results.textContent = 'Computer wins rock beats scissors!';
        result = lose;
        computerScore++;
        return lose
      } else if (computerSelection === 'paper') {
           win = results.textContent = 'You win scissors beats paper';
          result = win;
          playerScore++;
          return win;
      } else if (computerSelection === 'scissors)') {
           tie = results.textContent = 'Tie try again!';
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


rockButton.addEventListener('click', (e) => {
  playRound('rock', computerSelection);
  playerScoreText.textContent = `Players score: ${playerScore}`;
computerScoreText.textContent = `Computers score: ${computerScore}`;
});

paperButton.addEventListener('click', (e) => {
  playRound('paper', computerSelection);
  playerScoreText.textContent = `Players score: ${playerScore}`;
computerScoreText.textContent = `Computers score: ${computerScore}`;
});

scissorsButton.addEventListener('click', (e) => {
  playRound('scissors', computerSelection);
  playerScoreText.textContent = `Players score: ${playerScore}`;
computerScoreText.textContent = `Computers score: ${computerScore}`;
});


