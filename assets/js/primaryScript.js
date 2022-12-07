var time = 60;
var questionsElement = document.getElementById("questions");
var wordBlank = document.getElementById('winLoss');
var beginning = document.getElementById("first-part");
var ending = document.getElementById("end-part");
var questionsTitle = document.getElementById("questions-title");
var buttonChoices = document.querySelector(".choices");
var choiceReturn = document.getElementById('choice-return')
var clock = document.getElementById("clock");
let questionArray, questionIndex;
var score = '';
console.log(questionsElement)
// document.getElementById('submit-button').addEventListener('click', wee)
document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
beginning.classList.add('hide');
questionsElement.classList.remove('hide');
questionsArray = questions.sort(() => Math.random() - .5);
questionIndex = 0;
clockTimer();
quizQuestions();
};

function resetState() {
while (buttonChoices.firstChild) {
    buttonChoices.removeChild(buttonChoices.firstChild)
}
};

function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    startButton.disabled = false;
  }

  function loseGame() {
    wordBlank.textContent = "You lose!";
    startButton.disabled = false;
  }

  function checkWin() {
    if (time <= 0) {
        loseGame()
    } else {
        if (ending.classList.contains("stop-time")) {
             winGame();
        }
    }
  };
function displayQuestions(questions) {
    if (questionIndex > 3) {
        ending.classList.add('stop-time')
        questionsEl.classList.add('hide');
        ending.classList.remove('hide');
        document.getElementById('score').textContent = score;
    };


    questionsTitle.textContent = questions.title;
    questions.choices.forEach(choices => {
        const button = document.createElement('button');
        button.innerText = choices.text;
        button.classList.add('button-style', 'answer-button');
        if (choices.correct === true) {
            button.classList.add('correct')
        }
        button.addEventListener('click', selectAnswer);
        buttonChoices.appendChild(button);
    })
};

function quizQuestions() {
resetState();
displayQuestions(questionsArray[questionIndex]);
};





function selectAnswer(e) {
    const targetedButton = e.target
    if (targetedButton.classList.contains('correct')) {
choiceReturn.classList.remove('hide')
choiceReturn.innerHTML = 'Good Job!'
    }
    else {
        time -= 10
        choiceReturn.classList.remove('hide')
        choiceReturn.innerHTML = 'Incorrect'
        setTimeout(function () {
            choiceReturn.innerHTML = '';
        }, 1500)
    };
    questionIndex++
    quizQuestions()
};


function clockTimer() {
    time--;
    clock.innerHTML = (time < 10 ? "0" : "") + String(time);
    if (ending.classList.contains("stop-time")) {
      clock.innerHTML = document.getElementById("score").innerHTML + checkWin()
    } else if (time > 0) { 
      setTimeout(clockTimer, 1000)+checkWin();
    } else {
        checkWin();
      clock.innerHTML = "00";
      questionsElement.classList.add("hide");
      ending.classList.remove("hide");
      document.getElementById("score").innerHTML = score;
    }


    // window.location.href = "./highscores.html";
};
