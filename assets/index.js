// Array of choices the user and computer can choose from
let playerScore = 0;
let computerScore = 0;
const arr1 = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const results = document.querySelector('.results');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');



function getComputerChoice() {
  // get random index value
  return arr1[Math.floor(Math.random() * arr1.length)];
}

// getComputerChoice passing arr as argument to get random index
const result = getComputerChoice(arr1);

console.log(result);

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'Tie';
  }  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") 
  ) {
    return 'Player';
  }  else {
    return 'Computer';
  }
}

// This function is one round of the game, with different outcomes
function playRound(playerSelection, computerSelection) {
  // function that plays a single round
  const result = checkWinner(playerSelection, computerSelection);
  if(result == "Tie"){
    const p = document.createElement('p');
    p.textContent = "It's a Tie!"
    results.appendChild(p)
  } else if (result === "Player"){
    playerScore++
    const p = document.createElement('p');
    p.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    results.appendChild(p)
  } else {
    const p = document.createElement('p');
    computerScore++
    p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
    results.appendChild(p)
  }
   
}

function getPlayerChoice() {
  let validatedInput = false;
  while(validatedInput == false){
    const choice = prompt("rock paper scissors");
    if(choice == null){
      continue;
    } 
    const choiceInLower = choice.toLowerCase();
    if (arr1.includes(choiceInLower)){
      validatedInput = true;
      return choiceInLower;
    }
  }
}

const checkForWinner = (playerScore, computerScore) => {
  console.log( "1, ", playerScore, "2 ", computerScore)
  if (playerScore === 5) {
    const h2 = document.createElement('h2')
    h2.textContent = `You won! ${playerScore} to ${computerScore}`
    results.append(h2)
  }
  if (computerScore === 5) {
    const h2 = document.createElement('h2')
    h2.textContent = `You lost... ${computerScore} to ${playerScore}`
    results.append(h2)
  }
}
const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player: ${playerScore} `
  computerScoreSpan.innerText = `Computer: ${computerScore}`
}

rockBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'rock';
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore, computerScore)
})

paperBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'paper';
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore, computerScore)
})

scissorsBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'scissors';
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore, computerScore)
})

// //------------------------------Game function here ------------------------------------//
// function game() {
//   // code here
//     for (let i = 0; i < 5; i++) {
//       const playerSelection = getPlayerChoice();
         const computerSelection = getComputerChoice();
//       console.log(playRound(playerSelection, computerSelection));
//       console.log("----------")
//       if(checkWinner(playerSelection, computerSelection) == "Player"){
//         playerScore++
//       } else if(checkWinner(playerSelection, computerSelection) == "Computer"){
//         computerScore++
//       }
//     }
//     console.log("Game Over")
//     if(playerScore > computerScore){
//       console.log("Player is the winner")
//     } else if(playerScore < computerScore){
//       console.log("Computer is the winner")
//     } else {
//       console.log("Tied Game!")
//     }
// }




// The code below was for testing our functions
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(computerSelection)
// console.log(playerSelection)
// console.log(playRound(playerSelection, computerSelection));
// console.log(playerScore, computerScore)


//game();