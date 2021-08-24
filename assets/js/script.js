/*
    Note:  There are 4 views (start, question, done & highscores)
    For each view, divs wrap elements that make up the view.
    Nav consists of turning those divs on & off, then populating 
    any parts with data. 
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
const mainDivs = document.querySelector('main').children;

// Variables for views.
const mainTextDiv = document.getElementById('main-text');
const subTextDiv = document.getElementById('sub-text');
const startButtonDiv = document.getElementById('start-button');
const questionDiv = document.getElementById('question');
const answersDiv = document.getElementById('answers');
const emailFormDiv = document.getElementById('email-form');
const highScoreListDiv = document.getElementById('high-score-list');
const goBackClearDiv = document.getElementById('go-back-clear');


// Adding event listeners.
highScoresButton.addEventListener('click', viewHighScoresClicked);
startButton.addEventListener('click', startClicked);
goBackButton.addEventListener('click', goBackClicked);
clearButton.addEventListener('click', clearClicked);
submitButton.addEventListener('click', submitClicked);

// DATA ...
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
        question: [questionDiv, answersDiv],
        done: [emailFormDiv],
        highscores: [highScoreListDiv, goBackClearDiv]
    }
};


// FUNCTIONS THAT SHOW VIEWS //////////////////////////////////////////////////
function showStartView() {
    // Turn on divs in view.
    updateView('start');
}
function showQuestionView() {
    // get Q from data.
    // Show q and answers
    // show pass/fail thing.
}
function showDoneView() {
    // ????
}
function showHighScoresView() {
    console.log('now in showHighScores()')
    // Get list of scores
    // Display list of <li> tags.
    // Show GOBACK & CLEAR buttons
}


// EVENT HANDLERS //////////////////////////////////////////////////
function startClicked() {
    console.log('now in startClicked()')

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
function submitClicked() {
    console.log('now in submitClicked()')
    // get values
    // save it
    // showHighScores()
}
function goBackClicked() {
    console.log('now in goBackClicked()')

}
function clearClicked() {
    console.log('now in clearClicked()')

}
function viewHighScoresClicked() {
    console.log('now in viewHighScores()')
    // just showHightscores()
}

// UTILITY FUNCTIONS //////////////////////////////////////////////////
function updateView(targetView) {
    // Turn all divs off.
    for(let mainDiv of mainDivs) {
        mainDiv.style.display = 'none';
    }
    // Turn on divs in target view.
    const viewDivs = data.views[targetView];
    for(let div of viewDivs) {
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

// Display home page view.
showStartView();
// mainDivs[0].style.display = 'none';
// mainTextDiv.style.display = 'block';
// console.log('mainDivs', mainDivs)
