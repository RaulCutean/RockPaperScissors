let userScore = 0;

let computerScore = 0;

const user = document.querySelector("#user-label");

const computer = document.querySelector("#computer-label");

const userScore_span = document.querySelector("#user-score");

const computerScore_span = document.querySelector("#computer-score");

const rock_div = document.querySelector("#r");

const paper_div = document.querySelector("#p");

const scissors_div = document.querySelector("#s");

const action = document.querySelector("#action-message");

const scoreBoard_div = document.querySelector(".score-board");

const result_p = document.querySelector(".result > p");

//Computer choice
function getComputerChoice() {
  const choices = ["r", "p", "s"];

  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
}
function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}
//case win
function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "comp".fontsize(3).sup();

  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(
    computerChoice
  )}${smallComputerWord} .You win!`;

  userChoice_div.classList.add("green");
  setTimeout(() => {
    userChoice_div.classList.remove("green");
  }, 900);
}
//case lose
function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convert(
    userChoice
  )}${smallUserWord} loses to ${convert(
    computerChoice
  )}${smallComputerWord} .You lost!`;
  userChoice_div.classList.add("red");
  setTimeout(() => {
    userChoice_div.classList.remove("red");
  }, 900);
}

//case draw
function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convert(userChoice)}${smallUserWord} equals ${convert(
    computerChoice
  )}${smallComputerWord} .It's a draw`;
  userChoice_div.classList.add("gray");
  setTimeout(() => {
    userChoice_div.classList.remove("gray");
  }, 900);
}

//Logic of game
function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  //HTML implementation
  rock_div.addEventListener("click", () => {
    game("r");
  });
  paper_div.addEventListener("click", () => {
    game("p");
  });
  scissors_div.addEventListener("click", () => {
    game("s");
  });
}

main();
