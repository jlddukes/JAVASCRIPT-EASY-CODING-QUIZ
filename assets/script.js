// var score = 0
var timer = document.querySelector(".time")
var secondsLeft = 60;
var timerInterval ;







var topbox = document.querySelector(".topbox")
var questionTitle = document.getElementById("questions")
var startbutton = document.getElementById("startButton")

var questionEl = document.querySelector(".bigbox")
var questionIndex = 0

startbutton.addEventListener("click", startquiz)










var questions = [
    {
        questionText: "Question 1 Text",
        answersText: ["1Answer 1","1Answer 2","1Answer 3","1Answer 4",],
        correctText: "Answer 1"
    },
    {
        questionText: "Question 2 Text",
        answersText: ["2Answer 1","2Answer 2","3Answer 3","4Answer 4",],
        correctText: "Answer 1"
    },
    {
        questionText: "Question 3 Text",
        answersText: ["3Answer 1","3Answer 2","3Answer 3","3Answer 4",],
        correctText: "Answer 1"
    },
    {
        questionText: "Question 4 Text",
        answersText: ["4Answer 1","4Answer 2","4Answer 3","4Answer 4",],
        correctText: "Answer 1"
    },
    {
        questionText: "Question 5 Text",
        answersText: ["5Answer 1","5Answer 2","5Answer 3","5Answer 4",],
        correctText: "Answer 1"
    },
]


function revealQuestion() {
    var currentQuestion= questions[questionIndex]
    questionEl.textContent= currentQuestion.questionText
    for (let i = 0; i < currentQuestion.answersText.length; i++) {
        var options= currentQuestion.answersText[i]
        console.log(options)
        var answerButton= document.createElement("button")  //create element
        answerButton.textContent= options //add to the text
        var questionBox= document.querySelector(".bigbox")
        answerButton.addEventListener("click", revealQuestion)   //this event listener lets me click a choice then reveals next question
        questionBox.appendChild(answerButton) //do not forget this step, APPEND to page
    }

}

function countdown() {
    timerInterval= setInterval(function() {
        secondsLeft--;
        timer.textContent=secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000);

}


function startquiz() {
    countdown()
    topbox.classList.add("bigbox");
    questionEl.classList.remove("topbox");


    revealQuestion()








//calling the function to show the array 
//     questionsTitle.textContent = questions[questionindex].questionText
//     choice1.textContent = questions[questionindex].answersText[0]
//     choice2.textContent = questions[questionindex].answersText[1]
//     choice3.textContent = questions[questionindex].answersText[2]
//     choice4.textContent = questions[questionindex].answersText[3]
// }

// function renderNext(event) {
//      console.log(event.target.textContent) 
//      console.log(event)
//     questionindex++
//     questionsTitle.textContent = questions[questionindex].questionText
//     choice1.textContent = questions[questionindex].answersText[0]
//     choice2.textContent = questions[questionindex].answersText[1]
//     choice3.textContent = questions[questionindex].answersText[2]
//     choice4.textContent = questions[questionindex].answersText[3]
}




//lookup set attribute for javascript
//do a function, that has an event listener. 



//do timer and start screen for the quiz
//google how to cycle through array of question