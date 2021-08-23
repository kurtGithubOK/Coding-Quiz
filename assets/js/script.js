// GLOBAL VARIABLES ...
let globalTimer = 0;

// SHOWS ...
function showStart() {
    // just turn on divs?
}
function showQuestion() {
    // get Q from data.
    // Show q and answers
    // show pass/fail thing.
}
function showDone() {
    // ????
}
function showHighScores() {
    // Get list of scores
    // Display list of <li> tags.
    // Show GOBACK & CLEAR buttons
}

// HANDLERS ...
function startClicked() {
    // chnage view to question
}
function answerClicked() {
    // check answer
    // update score
    // if timer > 0 show next question
    // if wrong, decrement timer
    // showDone()
}
function initialsEntered() {
    // get values
    // save it
    // showHighScores()
}
function goBackClicked() {

}
function clearClicked() {

}
function viewHighScoresClicked() {
    // just showHightscores()
}

// UTILITIES ...
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

