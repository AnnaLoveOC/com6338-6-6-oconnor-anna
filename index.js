// Your code here

//creating the button variable and the quiz itself's variable
var startQuizBtn = document.createElement("button")
startQuizBtn.textContent = "Start Quiz!"

var quizDiv = document.querySelector("div#quiz")

//adding the button to the div :)))))
quizDiv.appendChild(startQuizBtn)

// variable containing the array of question objects
var questionsArr = [

    {
        //Question 1
        question: "Who built the Ark?",
        answer: "Noah",
        options: [
            'Noah',
            'Abraham',
            'Moses',
            'David',
        ]
    },

    {
        //Question 2
        question: "Who led the Israelites out of Egypt?",
        answer: "Moses",
        options: [
            'Joshua',
            'Aaron',
            'Moses',
            'Samuel',
        ]
    },

    {
        //Question 3
        question: "Who defeated Goliath?",
        answer: "David",
        options: [
            'Saul',
            'David',
            'Solomon',
            'Jonathan',
        ]
    },

    {
        //Question 4
        question: "Where was Jesus born?",
        answer: "Bethlehem",
        options: [
            'Nazareth',
            'Jerusalem',
            'Bethlehem',
            'Jericho',
        ]
    },

    {
        //Question 5
        question: "Who betrayed Jesus?",
        answer: "Judas",
        options: [
            'Peter',
            'John',
            'Thomas',
            'Judas',
        ]
    },

]


// FUNCTION: START GAME WHEN THE BUTTON CLICKED
startQuizBtn.onclick = function(event) {
    startQuiz()
}


// FUNCTION: GAME ITSELF
function startQuiz() {

    console.log("crashing out!!!")

    //remove the button
    quizDiv.removeChild(startQuizBtn)

    //add the 1st question text itself
    var questionText = document.createElement("p")
    questionText.textContent = questionsArr[0].question
    quizDiv.appendChild(questionText)

    console.log(questionsArr[0])
    console.log(questionsArr[0].options)

    //for loop displaying option buttons
    for (var j = 0; j < questionsArr[0].options.length; j++) {

        var optionBtn = document.createElement("button")
        optionBtn.textContent = questionsArr[0].options[j]
        quizDiv.appendChild(optionBtn)


    }


 






}


