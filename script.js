function getComputerChoice () {
	let computer = ["rock", "paper", "scissors"];
	let random = computer[Math.floor(Math.random() * computer.length)];
	return random;
}

function getHumanChoice(){
	let selection = prompt("Choose Rock, Paper, or Scissor:")
	let human = selection;
	if(human == getComputerChoice){
		return "tie";
	}else if(human == "rock" && getComputerChoice == "paper"){
		return "You loses! paper beats rock";
	}else if(human =="scissor"&& getComputerChoice== "paper"){
		return "You win! scissor beats paper";
	}else if(human =="rock"&& getComputerChoice=="scissor"){
		return "You win! rock beats scissor";
	}else if(human=="paper" && getComputerChoice=="rock"){
		return "You win! paper beats rock";
	}else if(human=="paper"&& getComputerChoice=="scissor"){
		return "You loses! scissor beats paper";
	}else if(human=="scissor" && getComputerChoice=="rock"){
		return "You loses! rock beats scissor";
	}
	return human
}
let playerWins = 0;
let computerWins = 0 ;
function playGame(){
	let playerSelection = getHumanChoice();
	let computerSelection = getComputerChoice();
	let 

	if (result.includes("win")) {
		playerWins++;
	} else if (result.includes("loses")) {
		computerWins++;
	}

  console.log("Player Wins: " + playerWins + " | Computer Wins: " + computerWins);
	if (playerWins === 3) {
		return "¡Congratulations! You have won the game! PlayerPoint: " + playerWins + ", ComputerPoints: " + computerWins + ".";
	} else if (computerWins === 3) {
		return "The computer has won the game sorry! PlayerPoint: " + playerWins + ", ComputerPoints: " + computerWins + ".";
	} else {
		return result;
	}
}

for(let i = 0; i <= 15; i++){
	let gameResult = playGame();
  console.log(gameResult);
	if (gameResult.includes("Congratulations") || gameResult.includes("sorry")) {
	break;
	}
}
console.log(playGame())

