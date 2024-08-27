function generateComputerChoice() {
  let computerChoice;
  let randomNumber = Math.floor((Math.random() * 3) + 1);
  switch(randomNumber) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    default:
      computerChoice = "Scissors";
  }
  return computerChoice;
}

function getUserChoice() {
  let userChoice = prompt("Enter either \"Rock\", \"Paper\", or \"Scissors\"").toLowerCase();
  formattedUserChoice = userChoice.substring(0, 1).toUpperCase() + userChoice.substring(1);
  return formattedUserChoice;
}

function playRound(userScore, computerScore) {
  let userChoice = getUserChoice();
  let computerChoice = generateComputerChoice();
  if (userChoice !== "Rock" && userChoice !== "Paper" && userChoice !== "Scissors") {
    console.log("Enter a valid choice!");
  }
  else if (userChoice === "Rock" && computerChoice === "Rock" || 
    userChoice === "Paper" && computerChoice === "Paper" || 
    userChoice === "Scissors" && computerChoice === "Scissors") {
      console.log("It's a tie!")
    }
  else if (userChoice === "Rock" && computerChoice === "Scissors" || 
    userChoice === "Paper" && computerChoice === "Rock" || 
    userChoice === "Scissors" && computerChoice === "paper") {
      console.log(`You won! ${userChoice} beats ${computerChoice}`);
      userScore++;
    }
  else {
    console.log(`You lost! ${computerChoice} beats ${userChoice}`)
    computerScore++;
  }
}

playRound();