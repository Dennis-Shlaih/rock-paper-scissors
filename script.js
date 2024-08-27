function generateComputerChoice() {
  let choice;
  let randomNumber = Math.floor((Math.random() * 3) + 1);
  switch(randomNumber) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    default:
      choice = "Scissors";
  }
  console.log(randomNumber);
  console.log(choice);
  return choice;
}
generateComputerChoice();