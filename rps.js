
function computerPlay() {
    const randomNumber = Math.floor(Math.random()*3) + 1;
    switch (randomNumber) {
        case 1: 
            return 'rock';
            break;
        case 2: 
            return 'paper';
            break;
        case 3: 
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper.';
    } else {
        return "It's a tie!";
    }
}
/*playerSelection = prompt('Enter your choice: ');
playerSelection = playerSelection.toLowerCase();
console.log(`You choose ${playerSelection}.`);
computerSelection = computerPlay();
console.log(`The computer choose ${computerSelection}.`);
console.log(playRound(playerSelection, computerSelection));


let userWin = 0, computerWin = 0;
function game(numberOfRound) {
    let nextRound = numberOfRound - 1;
    playerSelection = prompt('Enter your choice: ');
    computerSelection = computerPlay();
    winnerLoser = playRound(playerSelection, computerSelection).slice(0,8);
    if (nextRound >= 0) {
        if (winnerLoser === 'You Lose') {
            computerWin += 1;
        } else if (winnerLoser === 'You Win!') {
            userWin += 1;
        }
        console.log('Round number =', nextRound);
        console.log('Computer wins =', computerWin);
        console.log('User wins =', userWin);
        game(nextRound);
    }
    if (userWin < computerWin) {
        return 'Game Over';
    } else if (userWin > computerWin) {
        return 'Congratulations. You Win!';
    } else {
        return "Unfortunately, it's a tie";
    }
}
console.log(game(5));*/