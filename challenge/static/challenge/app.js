function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pergunta " + currentQuestionNumber + " de " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>";
    gameOverHTML += "<h2 id='score'> Parabéns! Recebe(s) " + quiz.score + " pérola(s). </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions

//3 random numbers
var i=0
var randomNumbers =[];
while (randomNumbers.length < 3){
    var number=Math.floor(Math.random()*allQuestions.length)
    if(!randomNumbers.includes(number)){
        randomNumbers[i]=number
        i++
    }
    
}

var questions=randomNumbers.map(e =>allQuestions[e])
console.log(questions)
// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





