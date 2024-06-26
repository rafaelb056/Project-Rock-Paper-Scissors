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
		let  resultRound =  playRound(getHumanChoice(), getComputerChoice());
		if(resultRound.includes("You loses!")){
			computerScore++;
			console.log('You lose! Scores:'+ ' human  ' + humanScore + '  computer ' + computerScore  );
		}else if(resultRound.includes("You win!")){
			humanScore++;
			console.log('You win! Scores:' + ' human ' + humanScore + '  computer ' + computerScore);
		}else{
			console.log('You tie! Scores:' + ' human ' + humanScore + '  computer ' + computerScore);
		}
	}

	if(humanScore > computerScore ){
		alert("Congratulations you have won Scores: human " + humanScore + " computer " + computerScore);
	}else if(humanScore < computerScore){
		alert("I'm sorry but you lost Scores: human " + humanScore + " computer " + computerScore);
	}else{
		alert("It's a draw Scores: human " + humanScore + " computer " + computerScore );
	}
}
playGame();