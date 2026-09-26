// Your code here

// VARIABLES: QUIZ + START BUTTON
var startQuizBtn = document.createElement("button")
startQuizBtn.textContent = "Start Quiz!"

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

//variable for previous score
var previousScore = localStorage.getItem("previous-score")

if (previousScore) {
    var previousScoreDisplay = document.createElement("p")
    previousScoreDisplay.textContent = "Previous score: " + previousScore + " out of " + questionsArr.length
    quizDiv.appendChild(previousScoreDisplay)
}


// Add Start Quiz button to the quiz div
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

    // Create and display current question
    var questionText = document.createElement("p")
    questionText.textContent = questionsArr[i].question
    quizDiv.appendChild(questionText)

    // Loop through current question's options
    for (var j = 0; j < questionsArr[i].options.length; j++) {

        // Create option button
        var optionBtn = document.createElement("button")

        // Add option text to button
        optionBtn.textContent = questionsArr[i].options[j]

        // Add option button to quiz
        quizDiv.appendChild(optionBtn)

        // When an option is clicked
        optionBtn.onclick = function(event) {
            optionClicked(event)
        }
    }
}


// FUNCTION: OPTION BUTTON CLICKED
function optionClicked(event) {

    // Check if clicked answer is correct
    if (event.target.textContent === questionsArr[i].answer) {
        correctAnswers++
    }

    // Clear current question + options
    quizDiv.textContent = ""

    // Move to next question
    i++

    // Display next question if one exists
    if (i < questionsArr.length) {
        displayQuestion()
    } else {
        var scoreDisplay = document.createElement("p")
        scoreDisplay.textContent = "You got " + correctAnswers + " out of " + questionsArr.length + " correct!"
        quizDiv.appendChild(scoreDisplay)
        quizDiv.appendChild(startQuizBtn)

        localStorage.setItem("previous-score", correctAnswers)


    }

    // Temporary testing
    console.log(correctAnswers)

}
