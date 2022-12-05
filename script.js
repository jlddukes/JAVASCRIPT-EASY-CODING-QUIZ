// var score = 0
var timer = document.querySelector(".time")
var secondsLeft = 60;
var timerInterval ;











var questionEl = document.getElementById("question")
var questionIndex = 0












var questions = [
    {
        questionText: "Question 1 Text",
        answersText: ["Answer 1","Answer 2","Answer 3","Answer 4",],
        correctText: "Answer 1"
    },
    {
        questionText: "Question 2 Text",
        answersText: ["Answer 1","Answer 2","Answer 3","Answer 4",],
        correctText: "Answer 1"
    },
    {
        questionText: "Question 3 Text",
        answersText: ["Answer 1","Answer 2","Answer 3","Answer 4",],
        correctText: "Answer 1"
    },
    {
        questionText: "Question 4 Text",
        answersText: ["Answer 1","Answer 2","Answer 3","Answer 4",],
        correctText: "Answer 1"
    },
    {
        questionText: "Question 5 Text",
        answersText: ["Answer 1","Answer 2","Answer 3","Answer 4",],
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
        questionBox.appendChild(answerButton) //do not forget this step, APPEND to page
    }

}

function countdown() {
    timerInterval= setInterval(function() {
        secondsLeft--;
        timer.textContent=secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInverval)
        }
    },1000);

}


function startquiz() {
    countdown()
    container.classList.add("bigbox");
    questionEl.classList.remove("bigbox");
//calling the function to show the array 
    questionsTitle.textContent = questions[questionindex].questionText
    choice1.textContent = questions[questionindex].answersText[0]
    choice2.textContent = questions[questionindex].answersText[1]
    choice3.textContent = questions[questionindex].answersText[2]
    choice4.textContent = questions[questionindex].answersText[3]
}

function renderNext(event) {
     console.log(event.target.textContent) 
     console.log(event)
    questionindex++
    questionsTitle.textContent = questions[questionindex].questionText
    choice1.textContent = questions[questionindex].answersText[0]
    choice2.textContent = questions[questionindex].answersText[1]
    choice3.textContent = questions[questionindex].answersText[2]
    choice4.textContent = questions[questionindex].answersText[3]
}




//lookup set attribute for javascript
//do a function, that has an event listener. 
revealQuestion()


//do timer and start screen for the quiz
//google how to cycle through array of question