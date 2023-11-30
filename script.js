const choices = ["Rock", "Paper", "Scissor"];
const buttons = document.querySelectorAll(".button");
const resultLabel = document.querySelector(".result-label");
const playerScoreLabel = document.querySelector(".player-score");
const computerScoreLabel = document.querySelector(".computer-score");
let playerScore = 0;
let computerScore = 0;

const playRound = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        resultLabel.textContent = "Its a draw!!"
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissor") {
        resultLabel.textContent = "You win! Rock defeats Scissor.";
        playerScore++;
        playerScoreLabel.innerHTML = `Your score:<br>${playerScore}`;
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        resultLabel.textContent = "You win! Paper defeats Rock.";
        playerScore++;
        playerScoreLabel.innerHTML = `Your score:<br>${playerScore}`;
    }
    else if (playerChoice === "Scissor" && computerChoice === "Paper") {
        resultLabel.textContent = "You win! Scissor defeats Paper.";
        playerScore++;
        playerScoreLabel.innerHTML = `Your score:<br>${playerScore}`;
    }
    else {
        resultLabel.textContent = `You lose! ${computerChoice} defeats ${playerChoice}.`;
        computerScore++;
        computerScoreLabel.innerHTML = `Computer score:<br>${computerScore}`
    }
};


buttons.forEach(btn => {
    btn.addEventListener(
        "click", (e) => {
            e.preventDefault()
            playRound(btn.textContent);
        }
    )
});