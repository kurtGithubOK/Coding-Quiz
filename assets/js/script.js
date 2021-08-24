/*
    Note:  There are 4 views (start, question, done & highscores)
    For each view, divs wrap elements that make up the view.
    Nav consists of turning those divs on & off, then populating 
    any parts with data. 
    Started at bottom once above has been loaded.
    */
// GLOBAL VARIABLES ...
let globalTimer = 0;
let score = 0;

// Variables for buttons.
const highScoresButton = document.getElementById('high-scores');
const startButton = document.getElementById('startButton');
const goBackButton = document.getElementById('goBackButton');
const clearButton = document.getElementById('clearButton');
const submitButton = document.getElementById('submit');
const nextQuestionButton = document.getElementById('nextQuestion');

// Variables for views that get turned on/off.
const mainDivs = document.querySelector('main').children;
const mainTextDiv = document.getElementById('main-text');
const subTextDiv = document.getElementById('sub-text');
const startButtonDiv = document.getElementById('start-button');
const questionDiv = document.getElementById('question');
const answersDiv = document.getElementById('answers');
const rightWrongDiv = document.getElementById('right-wrong');
const emailFormDiv = document.getElementById('email-form');
const highScoreListDiv = document.getElementById('high-score-list');
const goBackClearDiv = document.getElementById('go-back-clear');


// Adding event listeners.
highScoresButton.addEventListener('click', viewHighScoresClicked);
startButton.addEventListener('click', startClicked);
submitButton.addEventListener('click', submitClicked);
nextQuestionButton.addEventListener('click', nextQuestionClicked);
goBackButton.addEventListener('click', goBackClicked);
clearButton.addEventListener('click', clearClicked);

// DATA //////////////////////////////////////////////////////////////////
let data = {
    scores: [
        { initials: "KH", score: 8 },
        { initials: "OY", score: 4 },
        { initials: "NG", score: 11 }
    ],
    questions: [
        {
            question: "this is a question from data?",
            answers: [
                "yes!",
                "no?",
                "how the hell should I know?"
            ],
            correctAnswer: 1
        },
    ],
    views: {
        start: [mainTextDiv, subTextDiv, startButtonDiv],
        question: [questionDiv, answersDiv, rightWrongDiv],
        done: [mainTextDiv, subTextDiv, emailFormDiv],
        highscores: [mainTextDiv, subTextDiv, highScoreListDiv, goBackClearDiv]
    }
};


// FUNCTIONS THAT SHOW VIEWS //////////////////////////////////////////////////
function showStartView() {
    // Turn on divs in view.
    updateView('start');
    mainTextDiv.textContent = 'Coding Quiz Challenge';
    subTextDiv.textContent = 'Try to answer the following code-related question within the time limit.' +
    'Keep in mind that incorrect answers will penalize you score/time by ten seconds!';
}
function showQuestionView() {
    updateView('question');
    // get Q from data.
    // Show q and answers
    // show pass/fail thing.
}
function showDoneView() {
    updateView('done');
    // Update text content.
    mainTextDiv.textContent = 'All Done!';
    subTextDiv.textContent = 'Your score is XXX'
}
function showHighScoresView() {
    console.log('now in showHighScores()')
    updateView('highscores');
    mainTextDiv.textContent = 'Highscores';
    // Get list of scores
    // Display list of <li> tags.
}


// EVENT HANDLERS //////////////////////////////////////////////////
function startClicked() {
    console.log('now in startClicked()')
    showQuestionView();

    // chnage view to question
}
function answerClicked() {
    console.log('now in answerClicked()')
    // check answer
    // update score
    // if timer > 0 show next question
    // if wrong, decrement timer
    // showDone()
}
function nextQuestionClicked() {
    console.log('now in nextQuestionClicked')
    showDoneView();
}
function submitClicked() { // rename?
    console.log('now in submitClicked()')
    // get values
    // save it
    showHighScoresView();
}
function goBackClicked() {
    console.log('now in goBackClicked()')
    showStartView();
}
function clearClicked() {
    console.log('now in clearClicked()')

}
function viewHighScoresClicked() {
    console.log('now in viewHighScores()')
    // just showHightscores()
}

// UTILITY FUNCTIONS //////////////////////////////////////////////////
function init() {
    showStartView();
}
function updateView(targetView) {
    // Turn all divs off.
    for (let mainDiv of mainDivs) {
        mainDiv.style.display = 'none';
    }
    // Turn on divs in target view.
    const viewDivs = data.views[targetView];
    for (let div of viewDivs) {
        div.style.display = 'block';
    }
}
function startTimer() {
    // set global timer.
    // setTimeout()
    // if global < 0, then clearTimeout & endGame()
    return;
}
function decrementTime(howMuch) {
    // reduce global
}
function endGame() {
    // 
}

// Start the app.
init();
