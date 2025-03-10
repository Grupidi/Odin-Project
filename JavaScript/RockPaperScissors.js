// Initialize scores from localStorage or set to 0 if not present
let humanScore = parseInt(localStorage.getItem('humanScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

/**
 * Generates a random choice for the computer player
 * @returns {string} The computer's choice: 'rock', 'paper', or 'scissors'
 */
function getComputerChoice() {
    const computerInput = Math.random();
    if (computerInput < 0.33) return 'rock';
    else if (computerInput < 0.66) return 'paper';
    else return 'scissors';
}

/**
 * Compares player choices and updates scores
 * @param {string} humanChoice 
 * @param {string} computerChoice 
 * @returns {string} Result message
 */
function compareChoices(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        localStorage.setItem('humanScore', humanScore);
        return "You win this round!";
    } else {
        computerScore++;
        localStorage.setItem('computerScore', computerScore);
        return "Computer wins this round!";
    }
}

/**
 * Updates the score display using YOUR existing #score div
 */
function updateScoreBoard() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

/**
 * Plays a round and checks for a winner
 * @param {string} playerSelection 
 */
function playRound(playerSelection) {
    if (humanScore >= 5 || computerScore >= 5) return;

    const computerChoice = getComputerChoice();
    const result = compareChoices(playerSelection, computerChoice);
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        You chose: ${playerSelection}<br>
        Computer chose: ${computerChoice}<br>
        ${result}
    `;

    updateScoreBoard();

    // Check for game winner
    if (humanScore >= 5) {
        resultDiv.innerHTML += `<br><strong>GAME OVER! You win!</strong>`;
    } else if (computerScore >= 5) {
        resultDiv.innerHTML += `<br><strong>GAME OVER! Computer wins!</strong>`;
    }
}

/**
 * Resets the game
 */
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    localStorage.setItem('humanScore', humanScore);
    localStorage.setItem('computerScore', computerScore);
    updateScoreBoard();
    document.getElementById('result').textContent = "Game ready - make your first choice!";
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to buttons
    document.getElementById('rock').addEventListener('click', () => playRound('rock'));
    document.getElementById('paper').addEventListener('click', () => playRound('paper'));
    document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

    // Add reset button (matches your existing style)
    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Reset Game";
    resetBtn.style.marginTop = "20px";
    resetBtn.addEventListener('click', resetGame);
    document.body.appendChild(resetBtn);

    // Initialize score display
    updateScoreBoard();
});
