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

console.log(getUserChoice());