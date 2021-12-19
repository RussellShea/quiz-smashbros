var startBtn = document.querySelector("#start-button");
console.log(startBtn);
var questions = [
    {
        text: "When did the first smash bros game come out (in the US)?",
        choices: ["a: January 21, 1999","b: October 8, 1998","c: July 1, 1999","d: December 2, 1998"],
        answer: "a: January 21, 1999"
    },
    {
        text: "In smash melee, how many clone characters are there?",
        choices: ["a: 2","b: 8","c: 7","d: 6"],
        answer: "d: 6"
    },
    {
        text: "Who develops smash bros.?",
        choices: ["a: Microsoft","b: Sony","c: Nintendo","d: Kraft"],
        answer: "c: Nintendo"
    },
    {
        text: "Which smash bros brawl character was overpowered in competitive smash bros.?",
        choices: ["a: Metaknight","b: Marth","c: Mario","d: Yoshi"],
        answer: "a: Metaknight"
    },
    {
        text: "Which smash bros. melee player mains Captain Falcon?",
        choices: ["a: Hungrybox","b: Wizzrobe","c: Mew2king","d: Armada"],
        answer: "b: Wizzrobe"
    }

];
var highScrores = [

]

var qI = 0
var quizEl = document.querySelector(".quiz");

function startGame() {
    var startEl = document.querySelector(".start");
    startEl.classList.add("hide")

    quizEl.classList.remove("hide")
    callQuestion()
}

function callQuestion() {
    var questionText = document.getElementById("question-text");
    questionText.textContent = questions[qI].text
    var choiceBox = document.querySelector(".choice-box")
    choiceBox.innerHTML = ""
    questions[qI].choices.forEach(choice => {
    
        var button = document.createElement("button")
        button.textContent = choice
        button.setAttribute("value", choice)
        button.onclick = evalAnswer;
        choiceBox.appendChild(button)

    });
}

function evalAnswer() {
    console.log(this.value)
    
    if (this.value !== questions[qI].answer) {
        console.log("wrong")
    }
    else {
        console.log("correct")
    }
    qI++;
    if (qI === questions.length) {
        endGame()
    }
    else {
        callQuestion()

    }
}

function endGame() {
    quizEl.classList.add("hide")
}











startBtn.addEventListener("click", startGame);