const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

const result = document.getElementById("result");
const reset = document.getElementById("reset");

let computerChoice;
let playerChoice;
rock.addEventListener("click", () => playerChoice = "rock");
paper.addEventListener("click", () => playerChoice = "paper");
scissors.addEventListener("click", () => playerChoice = "scissors");
reset.addEventListener("click", function(){
    playerScore.innerHTML = "0";
    computerScore.innerHTML = "0";
    result.innerHTML = "Click on Rock, Paper or Scissors to start";
})

const getComputerChoice = () => {
    randomize = Math.floor(Math.random() * 3);;
    if (randomize === 0) {
        computerChoice = "rock";
    } else if (randomize === 1) {
        computerChoice = "paper";
    } else if (randomize === 2) {
        computerChoice = "scissors";
    }
}

const computerResult = () => {
    if (computerChoice === "rock") {
        computerRock.classList.remove("visible");
        computerScissors.classList.add("visible");
        computerPaper.classList.add("visible");
    } else if (computerChoice === "paper") {
        computerPaper.classList.remove("visible");
        computerRock.classList.add("visible");
        computerScissors.classList.add("visible");
    } else if (computerChoice === "scissors") {
        computerScissors.classList.remove("visible");
        computerPaper.classList.add("visible");
        computerRock.classList.add("visible");
    }
    if (playerChoice === "rock") {
        playerRock.classList.remove("visible");
        playerScissors.classList.add("visible");
        playerPaper.classList.add("visible");
    } else if (playerChoice === "paper") {
        playerPaper.classList.remove("visible");
        playerRock.classList.add("visible");
        playerScissors.classList.add("visible");
    } else if (playerChoice === "scissors") {
        playerScissors.classList.remove("visible");
        playerPaper.classList.add("visible");
        playerRock.classList.add("visible");
    }
}

const getWinner = () => {
    let valuePlayer = parseInt(playerScore.innerHTML);
    let valueComputer = parseInt(computerScore.innerHTML);
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            result.innerHTML = "It's a Draw"
        } else if (computerChoice === "paper") {
            result.innerHTML = "You Lose"
            computerScore.innerHTML = valueComputer + 1;
        } else if (computerChoice === "scissors") {
            result.innerHTML = "You Win"
            playerScore.innerHTML = valuePlayer + 1;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            result.innerHTML = "It's a Draw"
        } else if (computerChoice === "scissors") {
            result.innerHTML = "You Lose"
            computerScore.innerHTML = valueComputer + 1;
        } else if (computerChoice === "rock") {
            result.innerHTML = "You Win"
            playerScore.innerHTML = valuePlayer + 1;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "scissors") {
            result.innerHTML = "It's a Draw"
        } else if (computerChoice === "rock") {
            result.innerHTML = "You Lose"
            computerScore.innerHTML = valueComputer + 1;
        } else if (computerChoice === "paper") {
            result.innerHTML = "You Win"
            playerScore.innerHTML = valuePlayer + 1;
        }
    }
}


rock.addEventListener("click", getComputerChoice);
rock.addEventListener("click", computerResult);
rock.addEventListener("click", getWinner);

paper.addEventListener("click", getComputerChoice);
paper.addEventListener("click", computerResult);
paper.addEventListener("click", getWinner);

scissors.addEventListener("click", getComputerChoice);
scissors.addEventListener("click", computerResult);
scissors.addEventListener("click", getWinner);