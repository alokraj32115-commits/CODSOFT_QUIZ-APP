// ========================================
// QUIZ DATA
// ========================================

const quizzes = [

    {
        id: "html",
        title: "HTML Basics",
        icon: "🌐",
        description: "Test your knowledge of HTML tags and structure.",
        questions: [

            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Text Machine Language",
                    "Hyperlinks Text Mark Language",
                    "Home Tool Markup Language"
                ],
                answer: 0
            },

            {
                question: "Which tag is used to create a paragraph?",
                options: [
                    "<para>",
                    "<p>",
                    "<paragraph>",
                    "<text>"
                ],
                answer: 1
            },

            {
                question: "Which tag is used to create a hyperlink?",
                options: [
                    "<link>",
                    "<href>",
                    "<a>",
                    "<url>"
                ],
                answer: 2
            },

            {
                question: "Which HTML tag is used for the largest heading?",
                options: [
                    "<h6>",
                    "<heading>",
                    "<h1>",
                    "<head>"
                ],
                answer: 2
            },

            {
                question: "Which attribute is used to provide an image path?",
                options: [
                    "href",
                    "src",
                    "link",
                    "path"
                ],
                answer: 1
            },

            {
                question: "Which tag is used to insert an image?",
                options: [
                    "<image>",
                    "<img>",
                    "<pic>",
                    "<src>"
                ],
                answer: 1
            },

            {
                question: "Which tag creates an unordered list?",
                options: [
                    "<ol>",
                    "<ul>",
                    "<li>",
                    "<list>"
                ],
                answer: 1
            },

            {
                question: "Which tag creates a line break?",
                options: [
                    "<break>",
                    "<lb>",
                    "<br>",
                    "<line>"
                ],
                answer: 2
            },

            {
                question: "Which HTML element contains the visible page content?",
                options: [
                    "<head>",
                    "<body>",
                    "<title>",
                    "<meta>"
                ],
                answer: 1
            },

            {
                question: "Which declaration defines an HTML5 document?",
                options: [
                    "<html5>",
                    "<doctype>",
                    "<!DOCTYPE html>",
                    "<HTML5>"
                ],
                answer: 2
            }

        ]
    },


    {
        id: "css",
        title: "CSS Basics",
        icon: "🎨",
        description: "Challenge yourself with CSS styling questions.",
        questions: [

            {
                question: "What does CSS stand for?",
                options: [
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Colorful Style Sheets"
                ],
                answer: 1
            },

            {
                question: "Which property changes text color?",
                options: [
                    "font-color",
                    "text-color",
                    "color",
                    "foreground"
                ],
                answer: 2
            },

            {
                question: "Which property changes the background color?",
                options: [
                    "bgcolor",
                    "background-color",
                    "background-style",
                    "color-background"
                ],
                answer: 1
            },

            {
                question: "Which symbol is used for an ID selector?",
                options: [
                    ".",
                    "#",
                    "*",
                    "@"
                ],
                answer: 1
            },

            {
                question: "Which symbol is used for a class selector?",
                options: [
                    "#",
                    ".",
                    "*",
                    "$"
                ],
                answer: 1
            },

            {
                question: "Which property changes font size?",
                options: [
                    "text-size",
                    "font-size",
                    "size",
                    "font-height"
                ],
                answer: 1
            },

            {
                question: "Which property makes text bold?",
                options: [
                    "font-weight",
                    "font-bold",
                    "text-bold",
                    "weight"
                ],
                answer: 0
            },

            {
                question: "Which CSS property adds space inside an element?",
                options: [
                    "margin",
                    "padding",
                    "spacing",
                    "border"
                ],
                answer: 1
            },

            {
                question: "Which property rounds corners?",
                options: [
                    "corner-radius",
                    "border-radius",
                    "radius",
                    "round-border"
                ],
                answer: 1
            },

            {
                question: "Which display value is commonly used for flexible layouts?",
                options: [
                    "block",
                    "inline",
                    "flex",
                    "table"
                ],
                answer: 2
            }

        ]
    },


    {
        id: "javascript",
        title: "JavaScript",
        icon: "⚡",
        description: "Check your JavaScript programming knowledge.",
        questions: [

            {
                question: "Which keyword declares a variable?",
                options: [
                    "var",
                    "variable",
                    "let",
                    "Both A and C"
                ],
                answer: 3
            },

            {
                question: "Which method prints output to the console?",
                options: [
                    "print()",
                    "console.log()",
                    "write()",
                    "display()"
                ],
                answer: 1
            },

            {
                question: "Which symbol is used for strict equality?",
                options: [
                    "==",
                    "=",
                    "===",
                    "!="
                ],
                answer: 2
            },

            {
                question: "Which method adds an element to the end of an array?",
                options: [
                    "push()",
                    "add()",
                    "append()",
                    "insert()"
                ],
                answer: 0
            },

            {
                question: "Which method removes the last array element?",
                options: [
                    "delete()",
                    "remove()",
                    "pop()",
                    "last()"
                ],
                answer: 2
            },

            {
                question: "Which keyword creates a function?",
                options: [
                    "function",
                    "func",
                    "create",
                    "method"
                ],
                answer: 0
            },

            {
                question: "Which object represents the HTML document?",
                options: [
                    "window",
                    "document",
                    "html",
                    "page"
                ],
                answer: 1
            },

            {
                question: "Which method selects an element by ID?",
                options: [
                    "getElementById()",
                    "getById()",
                    "selectId()",
                    "queryId()"
                ],
                answer: 0
            },

            {
                question: "What is the result of 2 + 2?",
                options: [
                    "3",
                    "4",
                    "5",
                    "22"
                ],
                answer: 1
            },

            {
                question: "Which keyword is used to create a constant?",
                options: [
                    "constant",
                    "fixed",
                    "const",
                    "static"
                ],
                answer: 2
            }

        ]
    }

];


// ========================================
// DOM ELEMENTS
// ========================================

const homeScreen =
    document.getElementById("homeScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const quizCards =
    document.getElementById("quizCards");

const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("optionsContainer");

const feedback =
    document.getElementById("feedback");

const nextBtn =
    document.getElementById("nextBtn");

const currentQuestion =
    document.getElementById("currentQuestion");

const totalQuestions =
    document.getElementById("totalQuestions");

const progressBar =
    document.getElementById("progressBar");

const liveScore =
    document.getElementById("liveScore");

const categoryBadge =
    document.getElementById("categoryBadge");


// ========================================
// QUIZ STATE
// ========================================

let currentQuiz = null;

let questionIndex = 0;

let score = 0;

let selectedAnswer = null;

let answered = false;

let userAnswers = [];


// ========================================
// SHOW HOME
// ========================================

function showHome() {

    homeScreen.classList.add("active");

    quizScreen.classList.remove("active");

    resultScreen.classList.remove("active");
}


// ========================================
// SHOW QUIZ
// ========================================

function showQuiz() {

    homeScreen.classList.remove("active");

    quizScreen.classList.add("active");

    resultScreen.classList.remove("active");
}


// ========================================
// SHOW RESULT
// ========================================

function showResult() {

    homeScreen.classList.remove("active");

    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");
}


// ========================================
// CREATE QUIZ CARDS
// ========================================

function renderQuizCards() {

    quizCards.innerHTML = "";

    quizzes.forEach(quiz => {

        const card =
            document.createElement("div");

        card.className = "quiz-card";

        card.innerHTML = `

            <div class="quiz-card-icon">
                ${quiz.icon}
            </div>

            <h3>
                ${quiz.title}
            </h3>

            <p>
                ${quiz.description}
            </p>

            <div class="quiz-info">

                <span>
                    ❓ ${quiz.questions.length} Questions
                </span>

                <span>
                    Start →
                </span>

            </div>

        `;

        card.addEventListener(
            "click",
            () => startQuiz(quiz)
        );

        quizCards.appendChild(card);

    });
}


// ========================================
// START QUIZ
// ========================================

function startQuiz(quiz) {

    currentQuiz = quiz;

    questionIndex = 0;

    score = 0;

    selectedAnswer = null;

    answered = false;

    userAnswers = [];

    liveScore.textContent = "0";

    totalQuestions.textContent =
        quiz.questions.length;

    categoryBadge.textContent =
        quiz.title;

    showQuiz();

    loadQuestion();
}


// ========================================
// RANDOM QUIZ
// ========================================

document
    .getElementById("randomQuizBtn")
    .addEventListener("click", () => {

        const randomQuiz =
            quizzes[
                Math.floor(
                    Math.random() * quizzes.length
                )
            ];

        startQuiz(randomQuiz);

    });


// ========================================
// LOAD QUESTION
// ========================================

function loadQuestion() {

    const question =
        currentQuiz.questions[questionIndex];

    selectedAnswer = null;

    answered = false;

    currentQuestion.textContent =
        questionIndex + 1;

    questionText.textContent =
        question.question;

    feedback.textContent = "";

    feedback.className = "feedback";

    nextBtn.disabled = true;

    nextBtn.textContent =
        questionIndex ===
        currentQuiz.questions.length - 1
            ? "Finish Quiz 🏆"
            : "Submit Answer →";


    const progress =
        (
            questionIndex /
            currentQuiz.questions.length
        ) * 100;

    progressBar.style.width =
        `${progress}%`;


    optionsContainer.innerHTML = "";


    const letters = [
        "A",
        "B",
        "C",
        "D"
    ];


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className = "option";

            button.innerHTML = `

                <span class="option-letter">
                    ${letters[index]}
                </span>

                <span>
                    ${option}
                </span>

            `;

            button.addEventListener(
                "click",
                () => selectAnswer(
                    index,
                    button
                )
            );

            optionsContainer.appendChild(
                button
            );

        }
    );
}


// ========================================
// SELECT ANSWER
// ========================================

function selectAnswer(index, button) {

    if (answered) return;

    selectedAnswer = index;

    document
        .querySelectorAll(".option")
        .forEach(option => {

            option.classList.remove(
                "selected"
            );

        });

    button.classList.add("selected");

    nextBtn.disabled = false;

    nextBtn.textContent =
        "Submit Answer ✓";
}


// ========================================
// SUBMIT ANSWER
// ========================================

nextBtn.addEventListener(
    "click",
    () => {

        if (selectedAnswer === null)
            return;


        if (!answered) {

            submitAnswer();

        } else {

            nextQuestion();

        }

    }
);


// ========================================
// ANSWER CHECK
// ========================================

function submitAnswer() {

    answered = true;

    const question =
        currentQuiz.questions[questionIndex];

    const options =
        document.querySelectorAll(".option");


    options.forEach(
        (option, index) => {

            option.disabled = true;


            if (
                index === question.answer
            ) {

                option.classList.add(
                    "correct"
                );

            }


            if (
                index === selectedAnswer &&
                index !== question.answer
            ) {

                option.classList.add(
                    "wrong"
                );

            }

        }
    );


    const isCorrect =
        selectedAnswer === question.answer;


    if (isCorrect) {

        score++;

        liveScore.textContent =
            score;

        feedback.textContent =
            "🎉 Correct! Excellent answer.";

        feedback.classList.add(
            "correct-text"
        );

    } else {

        feedback.textContent =
            `❌ Incorrect! Correct answer: ${
                question.options[
                    question.answer
                ]
            }`;

        feedback.classList.add(
            "wrong-text"
        );

    }


    userAnswers.push({

        question:
            question.question,

        selected:
            question.options[
                selectedAnswer
            ],

        correct:
            question.options[
                question.answer
            ],

        isCorrect:
            isCorrect

    });


    nextBtn.textContent =
        questionIndex ===
        currentQuiz.questions.length - 1
            ? "View Result 🏆"
            : "Next Question →";
}


// ========================================
// NEXT QUESTION
// ========================================

function nextQuestion() {

    questionIndex++;

    if (
        questionIndex >=
        currentQuiz.questions.length
    ) {

        finishQuiz();

        return;

    }

    loadQuestion();
}


// ========================================
// FINISH QUIZ
// ========================================

function finishQuiz() {

    progressBar.style.width =
        "100%";

    showResult();

    displayResult();
}


// ========================================
// DISPLAY RESULT
// ========================================

function displayResult() {

    const total =
        currentQuiz.questions.length;

    const correct =
        score;

    const wrong =
        total - correct;

    const percentage =
        Math.round(
            (correct / total) * 100
        );


    document.getElementById(
        "finalScore"
    ).textContent = correct;


    document.getElementById(
        "correctAnswers"
    ).textContent = correct;


    document.getElementById(
        "wrongAnswers"
    ).textContent = wrong;


    document.getElementById(
        "accuracy"
    ).textContent =
        `${percentage}%`;


    const message =
        document.querySelector(
            ".result-message"
        );


    if (percentage >= 80) {

        message.textContent =
            "🔥 Outstanding! You really know your stuff.";

    } else if (percentage >= 60) {

        message.textContent =
            "👏 Great job! Keep learning and improving.";

    } else if (percentage >= 40) {

        message.textContent =
            "👍 Good effort! A little more practice will help.";

    } else {

        message.textContent =
            "💪 Don't give up! Keep practicing and try again.";

    }


    renderReview();

}


// ========================================
// ANSWER REVIEW
// ========================================

function renderReview() {

    const reviewList =
        document.getElementById(
            "reviewList"
        );

    reviewList.innerHTML = "";


    userAnswers.forEach(
        (answer, index) => {

            const item =
                document.createElement("div");


            item.className =
                `review-item ${