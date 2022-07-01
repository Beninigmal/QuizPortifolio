const form = document.querySelector(".quiz-form");
const showScore = document.querySelector(".score");
const scoreSpan = document.createElement("span");

showScore.textContent = "A sua pontuação foi: ";
showScore.appendChild(scoreSpan);

const rightAnswer = ["C", "D", "B", "D"];

const scoreColor = (counter) => {
  if (counter < 50) {
    scoreSpan.setAttribute("class", "yellowScore");
    scoreSpan.textContent = counter;
    return scoreSpan;
  } else {
    if (counter < 50) {
      scoreSpan.classList.add("class", "yellowScore");
    } else {
      scoreSpan.classList.add("class", "greenScore");
      scoreSpan.textContent = counter;
      return scoreSpan;
    }
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  let question = [
    data.inputQuestion1,
    data.inputQuestion2,
    data.inputQuestion3,
    data.inputQuestion4,
  ];

  let score = 0;

  for (let i = 0; i < question.length; i++) {
    if (question[i] === rightAnswer[i]) {
      score += 100 / question.length;
    }
  }
  scrollTo(0, 0);

  let counter = 0;
  if (!score) {
    showScore.classList.remove("d-none");
    scoreColor(counter);
  } else {
    let setScoreIntoContainer = setInterval(() => {
      counter++;
      showScore.classList.remove("d-none");
      scoreColor(counter);
      if (counter === score) {
        clearInterval(setScoreIntoContainer);
      }
    }, 13);
  }
});
