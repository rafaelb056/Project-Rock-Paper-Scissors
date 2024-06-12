function getComputerChoice () {
	let computer = ["rock", "paper", "scissor"];
	let random = computer[Math.floor(Math.random() * computer.length)];
	return random;
}

function getHumanChoice(){
	let selection = prompt("Choose Rock, Paper, or Scissor:")
	let human = selection.toLowerCase();
	return human
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
	if(humanChoice == computerChoice){
		return "tie";
	}else if(humanChoice == "rock" && computerChoice == "paper"){
		computerScore ++;
		return "You loses! paper beats rock";
	}else if(humanChoice =="scissor" && computerChoice == "paper"){
		humanScore++;
		return "You win! scissor beats paper";
	}else if(humanChoice =="rock" && computerChoice =="scissor"){
		humanScore++;
		return "You win! rock beats scissor";
	}else if(humanChoice =="paper" && computerChoice =="rock"){
		humanScore ++;
		return "You win! paper beats rock";
	}else if(humanChoice =="paper" && computerChoice =="scissor"){
		computerScore ++;
		return "You loses! scissor beats paper";
	}else if(humanChoice =="scissor" && computerChoice =="rock"){
		computerScore ++;
		return "You loses! rock beats scissor";
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
	playRound(humanChoice, computerChoice);
}
