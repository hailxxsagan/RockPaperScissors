const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', handleEvent)
})

let choices = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

let computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
//rock
if (playerSelection === "rock" && computerSelection === "Scissors") {
    playerScore++;
   return "You win! Rock beats scissors!";
} else if (playerSelection === "rock" && computerSelection === "Paper") {
    computerScore++;
    return "You lose! Paper beats rock!";
} else if (playerSelection === "rock" && computerSelection === "Rock") {
    return "It's a tie!";
} else

//paper
if (playerSelection === "paper" && computerSelection === "Rock") {
    playerScore++;
    return "You win! Paper beats rock!";
 } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    computerScore++;
     return "You lose! Scissors beats paper!";
 } else if (playerSelection === "paper" && computerSelection === "Paper") {
     return "It's a tie!";
 } else
//scissors
if (playerSelection === "scissors" && computerSelection === "Paper") {
    playerScore++;
    return "You win! Scissors beats paper!";
 } else if (playerSelection === "scissors" && computerSelection === "Rock") {
     computerScore++;
     return "You lose! Rock beats scissors!";
 } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
     return "It's a tie!";
 } else {
     return "Something went wrong!";
 }
}

//play 5 times
function game() {
for(var i=0;i<5;i++){

    let playerSelection = prompt("Pick a move! Rock, paper, or scissors!").toLowerCase();
    const computerSelection = computerPlay()
    console.log("Player chooses: " + playerSelection);
    console.log("Computer chooses: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score = " + playerScore, "Computer's score = " + computerScore);
  }
}


function endGame() {
    if (playerScore > computerScore) {
        return "You are the winner! Congratulations!";
    } else if (playerScore < computerScore) {
        return "The computer wins! You lose!";
    } else if (playerScore === computerScore) {
        return "It's a tie!";
    }
  }
endGame(game());
console.log(endGame());

