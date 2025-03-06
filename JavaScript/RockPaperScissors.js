// Initialize scores from localStorage or set to 0 if not present
let humanScore = parseInt(localStorage.getItem('humanScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

/**
 * Generates a random choice for the computer player
 * @returns {string} The computer's choice: 'rock', 'paper', or 'scissors'
 */
function getComputerChoice() {
    let computerInput = Math.random();
    let choice;
    if (computerInput < 0.33) {
        choice = 'rock';
    } else if (computerInput < 0.66) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }

    return choice;
}

/**
 * Prompts the human player for their choice and validates the input
 * @returns {string} The human player's validated choice: 'rock', 'paper', or 'scissors'
 */
function getHumanChoice() {
    let choice = prompt("Enter your choice (rock/paper/scissors):").toLowerCase().trim();

    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase().trim();
    }

    return choice;
}

/**
 * Compares the choices of the human and computer players to determine the winner
 * @param {string} humanChoice - The human player's choice
 * @param {string} computerChoice - The computer's choice
 * @returns {string} The result of the round
 */
function compareChoices(humanChoice, computerChoice) {
    let result;
    
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        humanScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }
    
    // Save updated scores to localStorage
    localStorage.setItem('humanScore', humanScore);
    localStorage.setItem('computerScore', computerScore);
    
    console.log(`Result: ${result}`);
    
    return result;
}

/**
 * Plays a full game of Rock Paper Scissors (5 rounds)
 * Updates and displays scores after each round
 * Resets scores and localStorage after the game
 */
function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        let humanChoice = getHumanChoice();
        console.log("You chose: " + humanChoice);
        let computerChoice = getComputerChoice();
        console.log("Computer chose: " + computerChoice);
        compareChoices(humanChoice, computerChoice);
        console.log("The score is Human: " + humanScore + " Computer: " + computerScore);
    }
    
    // Determine the winner
    let winner = humanScore === 5 ? "Human" : "Computer";
    console.log(`Game over! ${winner} wins!`);
    console.log(`Final score - Human: ${humanScore} Computer: ${computerScore}`);
    
    // Reset scores and clear localStorage
    humanScore = 0;
    computerScore = 0;
    localStorage.removeItem('humanScore');
    localStorage.removeItem('computerScore');
    console.log("Scores have been reset for the next game.");
}


// Start the game
playGame();
