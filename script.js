const questions = [
    {
        question: "What is 1 + 1?",
        options: ["2", "200", "2000", "-2"],
        answer: "2"
    },
    {
        question: "What is 2 + 2?",
        options: ["4", "40", "400", "-4"],
        answer: "4"
    },
    {
        question: "What is 4 + 4",
        options: ["8", "80", "800", "-8"],
        answer: "8"
    }
];

let currentQuestionIndex = 0;
let answeredQuestions = [];
let countDown;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");

function setupGame() {
    const time = document.querySelector('h1');
    let timeSecond = 60;

    time.innerHTML = `Time Remaining:  ${timeSecond}`;

    // Countdown + consistent decrement interval
    const countDown = setInterval(() => {
        timeSecond--;
        time.innerHTML = `Time Remaining:  ${timeSecond}`;
        if (timeSecond <= 0 || timeSecond < 1) {
            clearInterval(countDown);
            const start = document.getElementById(`start-game`);
            //causes button to reappear after countdown has concluded
            start.style.display = `block`;
        }
    }, 1000)
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    if (answeredQuestions.includes(currentQuestionIndex)) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
        return;
    }

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(function(option) {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", function() {
            if (option === currentQuestion.answer) {
                feedbackElement.textContent = "Correct!";
                answeredQuestions.push(currentQuestionIndex);
            } else {
                feedbackElement.textContent = "Wrong!";
                timeSecond -= 10; // fix error here
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        });
        optionsElement.appendChild(button);
    });
}




    function endQuiz() {
        clearInterval(countDown);
    
        // check if all questions have been answered
        if (answeredQuestions.length === questions.length) {
            feedbackElement.textContent = "Quiz ended. All questions answered!";
        } else {
            feedbackElement.textContent = "Quiz ended. Time's up!";
        }
    
        // clear the options and question elements
        optionsElement.innerHTML = "";
        questionElement.textContent = "";
    
        // show the start button again
        const start = document.getElementById("start-game");
        start.style.display = "block";
}

const startButton = document.getElementById("start-game");
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    setupGame();
    showQuestion();
});
