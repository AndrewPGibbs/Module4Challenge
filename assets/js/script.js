let startBtn = document.getElementById("start-button");
let nextBtn = document.getElementById("next-button");
let firstPage = document.getElementById("page-1");
let secondPage = document.getElementById("page-2");
let thirdPage = document.getElementById("page-3");
let questionsDiv = document.getElementById("questions")
let questionsTitle = document.getElementById("questions-title");
let allPages = [firstPage, secondPage, thirdPage];
let questionArray, questionIndex;
let i = 0;
let time = 60;

function pageChange() {
 
  allPages[i].classList.add("hide");
  i++;
  allPages[i].classList.remove("hide");
  console.log(i);
}

function startQuiz() {
  pageChange();
}

function displayQuestions(questions) {
    if (questionIndex > 3) {
        thirdPage.classList.add('stop-time')
        questionsEl.classList.add('hide');
        thirdPage.classList.remove('hide');
        document.getElementById('score').textContent = score;
    }

    questionsTitle.textContent = questions.title;
    questions.choices.forEach((choices) => {
      const button = document.createElement("button");
      button.innerText = choices.text;
      button.classList.add("button-style", "answer-button");
      if (choices.correct === true) {
        button.classList.add("correct");
      }
      button.addEventListener("click", selectAnswer);
      buttonChoices.appendChild(button);
    });
};

function quizQuestions() {
    resetState();
    displayQuestions(questionsArray[questionIndex]);
    };


startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", pageChange);