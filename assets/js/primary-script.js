var time = 60;
var questionsEl = document.getElementById("questions");
var beginning = document.getElementById("first-part");
var ending = document.getElementById("end-part");
var questionsTitle = document.getElementById("questions-title");
var buttonChoices = document.getElementById("choices");
var choiceReturn = document.getElementById('choice-return')
var clock = document.getElementById("clock");
let questionArray, questionIndex;
console.log(questionsEl)
// document.getElementById('submit-button').addEventListener('click', saveHighscore)
document.getElementById('start-button').addEventListener('click',quiz);
// starts quiz
function quiz() {
 beginning.classList.add('hide');
 questionsEl.classList.remove('hide');
 questionArray = questions.sort(() => Math.random() - .5)
 questionIndex = 0;
  clockTimer();
  quizQuestions();
}
// Function responsible for the questions
function quizQuestions () {
    resetState();
    displayQuestion(questionArray[questionIndex]);
};
// showing questions
function displayQuestion(questions) {
    if (questionIndex > 3) {
        ending.classList.add('stop-time')
        questionsEl.classList.add('hide');
        ending.classList.remove('hide');
        document.getElementById('score').innerHTML = counter.innerHTML;
    };
    questionsTitle.innerText = questions.title;
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


function resetState() {
    while (buttonChoices.firstChild) {
        buttonChoices.removeChild(buttonChoices.firstChild)
    }
}


function selectAnswer(e) {
    const targetedButton = e.target
    const correct = targetedButton.dataset.correct;
    choiceResult(document.body, correct)
    Array.from(buttonChoices.children).forEach(button => {
        choiceResult(button, button.dataset.correct)
    })
    questionIndex++
    quizQuestions()
}


function choiceResult(correct) {
    if (correct) {
        choiceReturn.classList.remove('hide')
        choiceReturn.innerHTML = 'Correct'
    } else {
        seconds--
        choiceReturn.classList.remove('hide')
        choiceReturn.innerHTML = 'Wrong'
    }
}





function clockTimer() {
  time--;
  clock.innerHTML = (time < 10 ? "0" : "") + String(time);
  if (ending.classList.contains("stop-time")) {
    clock.innerHTML = document.getElementById("score").innerHTML
  } else if (time > 0) {
    setTimeout(clockTimer, 1000);
  } else {
    clock.innerHTML = "00";
    questionsEl.classList.add("hide");
    ending.classList.remove("hide");
    document.getElementById("score").innerHTML = counter.innerHTML;
  }
}
