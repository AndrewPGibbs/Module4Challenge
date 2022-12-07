var time = 60;
var questionsElement = document.getElementById("questions");
var beginning = document.getElementById("first-part");
var ending = document.getElementById("end-part");
var questionsTitle = document.getElementById("questions-title");
var buttonChoices = document.getElementById("choices");
var choiceReturn = document.getElementById('choice-return')
var clock = document.getElementById("clock");
let questionArray, questionIndex;
var score = '10';
console.log(questionsEl)

function startQuiz() {
beginning.classList.add('hide');
questionsElement.classList.remove('hide');
questionsArray = questions.sort(() => Math.random() - .5);
questionIndex = 0;
clockTimer();
questQuestions();
};

function resetState() {
while (buttonChoices.firstChild) {
    buttonChoices.removeChild(buttonChoices.firstChild)
}
};

function quizQuestions() {
resetState();
displayQuestion(questionArray[questionIndex]);
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
            button.dataset.correct.add('thats right!')
        }
        button.addEventListener('click', selectAnswer);
        buttonChoices.appendChild(button);
    })
};



function selectAnswer(e) {

};

function choiceResults() {

};

function clockTimer() {

};
