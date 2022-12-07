var time = 60;
var questionsElement = document.getElementById("questions");
var beginning = document.getElementById("first-part");
var ending = document.getElementById("end-part");
var questionsTitle = document.getElementById("questions-title");
var buttonChoices = document.getElementById("choices");
var choiceReturn = document.getElementById('choice-return')
var clock = document.getElementById("clock");
let questionArray, questionIndex;
console.log(questionsEl)

function startQuiz() {
beginning.classList.add('hide');
questionsElement.classList.remove('hide');
questionsArray = questions.sort(() => Math.random() - .5);
questionIndex = 0;
clockTimer();
questQuestions();
};
function quizQuestions() {

};

function displayQuestions() {

};

function resetState() {

};

function selectAnswer(e) {

};

function choiceResults() {

};

function clockTimer() {

};
