let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scoreU = document.querySelector("#user-score");
const scoreC = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(typeof userChoice);
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranidx = Math.floor(Math.random() * 3);
  return options[ranidx];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice == "rock" && compChoice == "scissors") {
    msg.innerText = "You win!! play again";
    userScore++;
    scoreU.innerText = userScore;
  } else if (userChoice == "scissors" && compChoice == "paper") {
    msg.innerText = "You win!! play again";
    userScore++;
    scoreU.innerText = userScore;
  } else if (userChoice == "paper" && compChoice == "rock") {
    msg.innerText = "You win!! play again";
    userScore++;
    scoreU.innerText = userScore;
  } else if (userChoice == "scissors" && compChoice == "rock") {
    msg.innerText = "Computer wins!! try again";
    compScore++;
    scoreC.innerText = compScore;
  } else if (userChoice == "paper" && compChoice == "scissors") {
    msg.innerText = "Computer wins!! try again";
    compScore++;
    scoreC.innerText = compScore;
  } else if (userChoice == "rock" && compChoice == "paper") {
    msg.innerText = "Computer wins!! try again";
    compScore++;
    scoreC.innerText = compScore;
  } else {
    msg.innerText = "It's a draw!! Try again";
  }
};
