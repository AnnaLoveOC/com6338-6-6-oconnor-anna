// Your code here

// VARIABLES: QUIZ + START BUTTON
var startQuizBtn = document.createElement("button")
startQuizBtn.textContent = "Start Quiz!"
startQuizBtn.id = "start-quiz"

var quizDiv = document.querySelector("div#quiz")


// ARRAY OF QUESTION OBJECTS
var questionsArr = [

    {
        // Question 1
        question: "Who built the Ark?",
        answer: "Noah",
        options: [
            "Noah",
            "Abraham",
            "Moses",
            "David"
        ]
    },

    {
        // Question 2
        question: "Who led the Israelites out of Egypt?",
        answer: "Moses",
        options: [
            "Joshua",
            "Aaron",
            "Moses",
            "Samuel"
        ]
    },

    {
        // Question 3
        question: "Who defeated Goliath?",
        answer: "David",
        options: [
            "Saul",
            "David",
            "Solomon",
            "Jonathan"
        ]
    },

    {
        // Question 4
        question: "Where was Jesus born?",
        answer: "Bethlehem",
        options: [
            "Nazareth",
            "Jerusalem",
            "Bethlehem",
            "Jericho"
        ]
    },

    {
        // Question 5
        question: "Who betrayed Jesus?",
        answer: "Judas",
        options: [
            "Peter",
            "John",
            "Thomas",
            "Judas"
        ]
    }

]


// VARIABLE TRACKING CURRENT QUESTION
var i = 0

// VARIABLE TRACKING CORRECT ANSWERS
var correctAnswers = 0

// TIMER VARIABLES
var timerId
var secondsRemaining = 30

// GET PREVIOUS SCORE FROM LOCAL STORAGE
var previousScore = localStorage.getItem("previous-score")


// DISPLAY PREVIOUS SCORE IF ONE EXISTS
if (previousScore) {
    var previousScoreDisplay = document.createElement("p")
    previousScoreDisplay.textContent = "Previous Score: " + previousScore + "%"
    quizDiv.appendChild(previousScoreDisplay)
}


// ADD START QUIZ BUTTON
quizDiv.appendChild(startQuizBtn)


// START GAME WHEN START BUTTON IS CLICKED
startQuizBtn.onclick = function(event) {
    startQuiz()
}


// FUNCTION: START GAME
function startQuiz() {

    // Reset quiz
    i = 0
    correctAnswers = 0

    // Clear Start button or previous score
    quizDiv.textContent = ""

    // Display first question
    displayQuestion()
}


// FUNCTION: DISPLAY CURRENT QUESTION + OPTIONS
function displayQuestion() {

    // Reset timer for each question
    secondsRemaining = 30

    // Create and display current question
    var questionText = document.createElement("p")
    questionText.textContent = questionsArr[i].question
    quizDiv.appendChild(questionText)

    // Create div for option buttons
    var optionsDiv = document.createElement("div")
    quizDiv.appendChild(optionsDiv)

    // Loop through current question's options
    for (var j = 0; j < questionsArr[i].options.length; j++) {

        // Create option button
        var optionBtn = document.createElement("button")

        // Add option text to button
        optionBtn.textContent = questionsArr[i].options[j]

        // Add option button to options div
        optionsDiv.appendChild(optionBtn)

        // When an option is clicked
        optionBtn.onclick = function(event) {
            optionClicked(event)
        }
    }

    // Create and display timer
    var timerDisplay = document.createElement("p")
    timerDisplay.textContent = secondsRemaining
    quizDiv.appendChild(timerDisplay)

    // Start timer
    timerId = setInterval(function() {

        secondsRemaining--
        timerDisplay.textContent = secondsRemaining

        // Move to next question if time runs out
        if (secondsRemaining <= 0) {
            nextQuestion()
        }

    }, 1000)
}


// FUNCTION: MOVE TO NEXT QUESTION
function nextQuestion() {

    // Stop current timer
    clearInterval(timerId)

    // Clear current question + options
    quizDiv.textContent = ""

    // Move to next question
    i++

    // Display next question if one exists
    if (i < questionsArr.length) {

        displayQuestion()

    } else {

        // Calculate percentage score
        var score = Math.round(
            (correctAnswers / questionsArr.length) * 100
        )

        // Display final score
        var scoreDisplay = document.createElement("p")
        scoreDisplay.textContent = "Previous Score: " + score + "%"
        quizDiv.appendChild(scoreDisplay)

        // Display Start Quiz button again
        quizDiv.appendChild(startQuizBtn)

        // Save score to local storage
        localStorage.setItem("previous-score", score)
    }
}


// FUNCTION: OPTION BUTTON CLICKED
function optionClicked(event) {

    // Check if clicked answer is correct
    if (event.target.textContent === questionsArr[i].answer) {
        correctAnswers++
    }

    // Move to next question
    nextQuestion()
}