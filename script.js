const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
const counter = document.getElementById("counter");
const question = document.getElementById("question");
const questionTime = 75;
//time is in seconds

let timer;
let timeLeft = 75;
// time is in seconds
let currentQuestion = 0;
let score = 0;
let stopQuiz = questions.length - 1;

//display the quiz question
function displayQuestion() {
    let quizQuestion = questions[currentQuestion];
    question.innerHTML = quizQuestion.question;
    firstanswer.innerHTML = quizQuestion.firstanswer;
    secondanswer.innerHTML = quizQuestion.secondanswer;
    thirdanswer.innerHTML = quizQuestion.thirdanswer;
    fourthanswer.innerHTML = quizQuestion.fourthanswer;
}
//start the quiz when the "start" button is clicked
start.addEventListener("click", startQuiz);

//startQuiz: invoke displayQuestion hide "start" and "display", show "quiz",
function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    displayQuestion();
    displayTimeLeft();
    timer = setInterval(displayTimeLeft, 1000);
    //time is in milliseconds
}
//invoke displayTimeLeft
function displayTimeLeft() {
    if (timeLeft <= questionTime) {
        counter.innerHTML = timeLeft;
        timeLeft--;
    } 
}
//checkAnswer: increase the score if the answer is correct
function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        score++;
        correctAnswer();
    } else {
        wrongAnswer();
    }
    if (currentQuestion < stopQuiz) {
        currentQuestion++;
        displayQuestion();
    } else {
        clearInterval(timer);//stop timer
        showScore();
    }
}
//add 5 seconds to timer if the answer is correct 
function correctAnswer() {
    timeLeft = timeLeft + 5;
}
//subtract 15 seconds from timer if the answer is wrong
function wrongAnswer() {
    timeLeft = timeLeft - 15;
}
//showScore: hide quiz, show resultZone, display score 
function showScore() {
    console.log(score);
    quiz.style.display = "none";
}