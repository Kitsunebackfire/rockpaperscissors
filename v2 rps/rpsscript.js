/* default scores of zero */
let playerScore = 0;
let computerScore = 0; 
const buttons = document.querySelectorAll('input');


const new_game = document.querySelector('#reset')


 /* function to disable buttons */
 function disableButtons() {
     buttons.forEach(elem=> {
         elem.disabled = true;
     })
 }

 /* function to enable buttons again */
function enableButtons() {
    buttons.forEach(elem => {
        elem.disabled = false;
    })
}


/* computer randomly picks rock, paper, or scissors */
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

/* reset score function */
function reset() {
    playerScore = 0;
    computerScore = 0;
    results = `Player score: ${playerScore} <br>Computer score: ${computerScore}`;
    enableButtons();
    document.getElementById("results").innerHTML = results;
    return
}



function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if ((playerSelection == "rock" && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') 
      || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore++;
        results = `You win! ${playerSelection} beats ${computerSelection}<br>Player score: ${playerScore}<br>Computer score: ${computerScore}`;
        if (playerScore == 5) {    
            results += "<br>You win! you beat the computer, thank you for playing";
            disableButtons();
        }
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors')
      || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        computerScore++;
        results = `You lose! ${computerSelection} beats ${playerSelection} <br>Player score: ${playerScore} <br>Computer score: ${computerScore}`;
        if (computerScore == 5) {
            results += "<br>You lost! The computer beat you, thank you for playing";
            disableButtons();
        }    
    }
    else {
        results = `You tie! <br>Player score: ${playerScore}<br>Computer score: ${computerScore}`;
    }
    document.getElementById("results").innerHTML = results;
    return
    
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
    })
})

/* default game logic and keeps track of player score */

/* old logic */
/*function game() {
    console.log("Welcome to rock, paper, and scissors")
    while ((playerScore < 5) || (computerScore < 5)) {    

        /* takes input to determine player's choice of r,p, or s */
        /*let playerSelection = window.prompt("rock, paper, or scissors?");
            
        /* sets computerSelection to be a randomized choice each time */
        /*const computerSelection = computerPlay();

        playRound(playerSelection,computerSelection);

    console.log(results);
    console.log(playerScore);
    console.log(computerScore);

    if (playerScore == 5) {
                console.log("Player wins")
                break;
            }
            else if (computerScore == 5) {
                console.log("Computer wins")
                break;
            }


    

    }
    playAgain();
}*/