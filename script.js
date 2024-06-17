function getComputerChoice () {
	let computer = ["rock", "paper", "scissor"];
	let random = computer[Math.floor(Math.random() * computer.length)];
	return random;
}

function getHumanChoice(){
	let selection = prompt("Choose Rock, Paper, or Scissor:");
	let human = selection.toLowerCase();
	return human;
}
function playRound(humanChoice, computerChoice){
	if(humanChoice == computerChoice){
		return "tie";
	}else if(humanChoice == "rock" && computerChoice == "paper"){
		return "You loses! paper beats rock";
	}else if(humanChoice =="scissor" && computerChoice == "paper"){
		return "You win! scissor beats paper";
	}else if(humanChoice =="rock" && computerChoice =="scissor"){
		return "You win! rock beats scissor";
	}else if(humanChoice =="paper" && computerChoice =="rock"){
		return "You win! paper beats rock";
	}else if(humanChoice =="paper" && computerChoice =="scissor"){
		return "You loses! scissor beats paper";
	}else if(humanChoice =="scissor" && computerChoice =="rock"){
		return "You loses! rock beats scissor";
	}
}

function playGame(){;
	let humanScore = 0;
	let computerScore = 0;
  for(let i=0; i<5; i++){
		if(playRound(getHumanChoice(), getComputerChoice()).includes("You loses!")){
			computerScore++;
			console.log('Scores :' + humanScore + ' ' + computerScore  );
		}else if(playRound(getHumanChoice(), getComputerChoice()).includes("You win!")){
			humanScore++;
			console.log('Scores :' + humanScore + ' ' + computerScore);
		}else if(playRound(getHumanChoice(), getComputerChoice()).includes("tie")){
			console.log('Scores :' + humanScore + ' ' + computerScore);
		}
	}
}
playGame();