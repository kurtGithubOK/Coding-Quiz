/*
    Note:  There are 4 views (start, question, done & highscores)
    For each view, divs wrap elements that make up the view.
    Nav consists of turning those divs on & off, then populating 
    any parts with data. 
    Started at bottom once above has been loaded.
    */
// GLOBAL VARIABLES ...
let globalTimer = null;
let timeInterval = null;
let rightWrongTimeout = null; 
let userScore = 0;
let currentQuestionIndex = 0;

// Variables for buttons.
const highScoresButton = document.getElementById('high-scores');
const startButton = document.getElementById('startButton');
const goBackButton = document.getElementById('goBackButton');
const clearButton = document.getElementById('clearButton');
const submitButton = document.getElementById('submit');

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
const timeDiv = document.getElementById('time');

// Adding event listeners.
highScoresButton.addEventListener('click', viewHighScoresClicked);
startButton.addEventListener('click', startClicked);
submitButton.addEventListener('click', submitClicked);
goBackButton.addEventListener('click', goBackClicked);
clearButton.addEventListener('click', clearClicked);

// DATA //////////////////////////////////////////////////////////////////
let data = {
    // scores: [
    //     { initials: "KH", score: 8 },
    //     { initials: "OY", score: 4 },
    //     { initials: "NG", score: 11 }
    // ],

    questions: [
        {
            question: "Which of the following is NOT a JS data type?",
            answers: [
                "string",
                "number",
                "boolean",
                "apple"
            ],
            correctAnswer: 3
        },
        {
            question: "Which of the following is a NOT a type of JS loop?",
            answers: [
                "loop:",
                "For",
                "While",
                "Do while"
            ],
            correctAnswer: 0
        },
        {
            question: "Which is true about JS?",
            answers: [
                "Its multi-threaded",
                "Its only used on the client",
                "It's amazing",
                "It is compiled"
            ],
            correctAnswer: 2
        },
        {
            question: "Javscript was developed by ...",
            answers: [
                "Microsoft",
                "Netscape",
                "Google",
                "Apple"
            ],
            correctAnswer: 1
        }
    ],
    views: {
        start: [mainTextDiv, subTextDiv, startButtonDiv],
        question: [questionDiv, answersDiv, rightWrongDiv],
        done: [mainTextDiv, subTextDiv, emailFormDiv],
        highscores: [mainTextDiv, highScoreListDiv, goBackClearDiv]
    }
};


// FUNCTIONS THAT SHOW VIEWS //////////////////////////////////////////////////
function showStartView() {
    // Reset score & timer for next game.
    userScore = 0;
    currentQuestionIndex = 0;
    // Show divs that make up this div and populate their text.
    updateView('start');
    mainTextDiv.textContent = 'Coding Quiz Challenge';
    subTextDiv.textContent = 'Try to answer the following code-related question within the time limit.' +
        'Keep in mind that incorrect answers will penalize you score/time by ten seconds!';
}
function showQuestionView() {
    updateView('question');
    // Get Q&A from data.
    const questionData = data.questions[currentQuestionIndex];
    // Show Q&A.
    questionDiv.textContent = questionData.question;

    // Write list of answers to DOM.
    const answers = questionData.answers;
    // If there's a 'ul' from previous question, remove it.
    if (answersDiv.hasChildNodes()) {
        answersDiv.removeChild(answersDiv.childNodes[0])
    }
    rightWrongDiv.style.display = 'none';

    answersUl = document.createElement('ul');
    answersUl.setAttribute('id', 'answer-list');
    answersUl.setAttribute('class', 'answers');
    answersDiv.append(answersUl);
    for (let i = 0; i < answers.length; i++) {
        const li = document.createElement('li');
        const button = document.createElement("button");
        button.innerHTML = answers[i];
        // Add custom data attribute to be picked up by listener later.
        button.setAttribute('data-answer-index', i);
        button.setAttribute('class', 'answer-button');
        li.appendChild(button);
        answersUl.appendChild(li);
    }
    answersUl.addEventListener('click', answerClicked);
}
function showDoneView() {
    updateView('done');
    // Update text content.
    mainTextDiv.textContent = 'All Done!';
    subTextDiv.textContent = 'Your score is:' + userScore;
    document.getElementById('initialsTextfield').textContent = '';
}
function showHighScoresView() {
    updateView('highscores');
    mainTextDiv.textContent = 'Highscores';

    // Get list of scores
    const highscores = getScores();
    // Clear out any existing <li> tags.
    if (highScoreListDiv.hasChildNodes()) {
        highScoreListDiv.removeChild(highScoreListDiv.childNodes[0]);
    }
    // Display list of <li> tags.
    highscoresUl = document.createElement('ul');
    highscoresUl.setAttribute('id', 'highscores-ul');
    highScoreListDiv.append(highscoresUl);
    for (let i = 0; i < highscores.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = (i + 1) + '. ' + highscores[i].initials + " - " + highscores[i].score;
        highscoresUl.append(li);
    }
}
function showRightWrongMessage(isCorrectAnswer) {
    const result = isCorrectAnswer ? "Right!" : "Wrong :(";
    rightWrongDiv.style.display = 'block';
    rightWrongDiv.textContent = result;
}
function updateTimeDisplay() {
    timeDiv.textContent = globalTimer;
}

// EVENT HANDLERS //////////////////////////////////////////////////
function startClicked() {
    startTimer();
    showQuestionView();
}
function answerClicked(event) {
    const target = event.target;
    // Only interested in clicked elements if they are a button.
    if (!target.matches('button')) return;

    // Check answer
    const userAnswerId = target.attributes.getNamedItem('data-answer-index').value;
    const correctAnswerId = data.questions[currentQuestionIndex].correctAnswer;
    const isCorrectAnswer = parseInt(userAnswerId) === correctAnswerId;
    if (isCorrectAnswer) {
        userScore++;
    } else {
        globalTimer -= 10;
        if (globalTimer <= 0) {
            endGame();
        }
    }
    showRightWrongMessage(isCorrectAnswer);

    // Display right/wrong for n seconds before proceeding.
    rightWrongTimeout = setTimeout(() => {
        // Are we out of questions?
        if (currentQuestionIndex === data.questions.length - 1) {
            showDoneView();
        } else {
            currentQuestionIndex++;
            showQuestionView();
        }
    }, 1250);
}
function submitClicked() {
    // get values
    const initials = document.getElementById('initialsTextfield').value;
    // save it
    const scoreObject = {
        initials: initials,
        score: userScore
    };
    updateScores(scoreObject);
    showHighScoresView();
}
function goBackClicked() {
    showStartView();
}
function clearClicked() {
    updateScores(null);
    showHighScoresView();
}
function viewHighScoresClicked() {
    showHighScoresView();
}

// UTILITY FUNCTIONS //////////////////////////////////////////////////
function init() {
    showStartView();
    //    localStorage.setItem('code-quiz-scores', JSON.stringify(data.scores))
}
function getScores() {
    // Get scores from local storage or empty array if undefined.
    const scores = localStorage.getItem('code-quiz-scores');
    if (!scores) return [];
    return JSON.parse(scores);
}
function updateScores(score) {
    let updatedScores = [];
    // If arg is empty object, must want to clear high scores.
    if (score) {
        // Append new score to existing array.
        const scores = getScores();
        scores.push(score);
        // Sort it by score.
        updatedScores = scores.sort((element1, element2) => {
            return element2.score - element1.score;
        });
    }
    // Set value in local storage.
    localStorage.setItem('code-quiz-scores', JSON.stringify(updatedScores))
}

function updateView(targetView) {
    // Turn all divs off.
    for (let mainDiv of mainDivs) {
        mainDiv.style.display = 'none';
    }

    // Don't display header if in highscores view.
    const headerDiv = document.querySelector('header')
    if (targetView === "highscores") {
        headerDiv.style.display = 'none';
    } else {
        headerDiv.style = 'header';
    }

    // Turn on divs in target view.
    const viewDivs = data.views[targetView];
    for (let div of viewDivs) {
        div.style.display = 'block';
    }
}
function startTimer() {
    globalTimer = 100;

    timeInterval = setInterval(() => {
        // decrement global time
        globalTimer--;
        // if global < 0, then clearTimeout & endGame()
        if (globalTimer <= 0) {
            endGame();
        }
        updateTimeDisplay();
    }, 1000);
}
function endGame() {
    clearTimeout(rightWrongTimeout);
    clearInterval(timeInterval);
    showDoneView();
}

// Start the app.
init();
