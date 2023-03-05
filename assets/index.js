// Array of choices the user and computer can choose from
const arr1 = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // get random index value
  return arr1[Math.floor(Math.random() * arr1.length)];
}

// getComputerChoice passing arr as argument to get random index
const result = getComputerChoice(arr1);

//console.log(result);

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'Tie';
  }  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") 
  ) {
    return 'Player';
  }  else {index.html
    return 'Computer';
  }
}

// This function is one round of the game, with different outcomes
function playRound(playerSelection, computerSelection) {
  // function that plays a single round
  const result = checkWinner(playerSelection, computerSelection);
  if(result == "Tie"){
    return "It's a Tie!"
  } else if (result == "Player"){
    return `You Win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
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

//------------------------------Game function here ------------------------------------//
function game() {
  // code here
    for (let i = 0; i < 5; i++) {
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
      console.log("----------")
      if(checkWinner(playerSelection, computerSelection) == "Player"){
        playerScore++
      } else if(checkWinner(playerSelection, computerSelection) == "Computer"){
        computerScore++
      }
    }
    console.log("Game Over")
    if(playerScore > computerScore){
      console.log("Player is the winner")
    } else if(playerScore < computerScore){
      console.log("Computer is the winner")
    } else {
      console.log("Tied Game!")
    }
}


 let playerScore = 0;
 let computerScore = 0;

// The code below was for testing our functions
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(computerSelection)
// console.log(playerSelection)
// console.log(playRound(playerSelection, computerSelection));
// console.log(playerScore, computerScore)

game();