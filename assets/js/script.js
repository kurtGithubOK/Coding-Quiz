// GLOBAL VARIABLES ...
let globalTimer = 0;
let score = 0;
const highScores = document.getElementById('high-scores');
const startButton = document.getElementById('startButton');
const goBackButton = document.getElementById('goBackButton');
const clearButton = document.getElementById('clearButton');
const submitButton = document.getElementById('submit');

highScores.addEventListener('click', viewHighScoresClicked);
startButton.addEventListener('click', startClicked);
goBackButton.addEventListener('click', goBackClicked);
clearButton.addEventListener('click', clearClicked);
submitButton.addEventListener('click', submitClicked);


// SHOWS ... //////////////////////////////////////////////////
function showStartView() {
    // just turn on divs?
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


// HANDLERS ... //////////////////////////////////////////////////
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

// UTILITIES ... //////////////////////////////////////////////////
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

// DATA ...
let data = {
    scores: [
        { initials: "KH", score: 8},
        { initials: "OY", score: 4},
        { initials: "NG", score: 11}
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
    ]
};

