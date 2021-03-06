let computerScore = 0;
let playerScore = 0;
let result = document.querySelector('#result');
let computer = document.querySelector('#computerScore');
let player = document.querySelector('#playerScore');

//random computer choice
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    //user choice is rock
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
       return "You win! Rock beats scissors!";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
        return "It's a tie! Try again!";
    } else
    
    //user choice is paper
    if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        return "You win! Paper beats rock!";
     } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
         return "You lose! Scissors beats paper!";
     } else if (playerSelection === "paper" && computerSelection === "Paper") {
         return "It's a tie! Try again!";
     } else

    //user choice is scissors
    if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You win! Scissors beats paper!";
     } else if (playerSelection === "scissors" && computerSelection === "Rock") {
         computerScore++;
         return "You lose! Rock beats scissors!";
     } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
         return "It's a tie! Try again!";
     }
    }

function game() {

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const computerSelection = computerPlay();
      result.textContent = playRound(button.id, computerSelection);
      player.textContent = "Player Score: " + playerScore;
      computer.textContent = "Computer Score: " + computerScore;
      if (playerScore == 5) {
        result.textContent = "You win! Congratulations! You are so talented!";
        computerScore = 0;
        playerScore = 0;
      }
      if (computerScore == 5) {
        result.textContent = "The computer wins! Better luck next time!";
        computerScore = 0;
        playerScore = 0;
      }
    })
  })
}

game();