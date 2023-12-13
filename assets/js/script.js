/* 10 questions and correct answer */
const quizData = [{
    question: '100 + 60?',
    options: ['187', '160', '190', '178'],
    answer: '160',
}, {
    question: '7 + 7?',
    options: ['16', '17', '19', '14'],
    answer: '14',
}, {
    question: '8 + 8?',
    options: ['16', '20', '14', '24'],
    answer: '16',
}, {
    question: '9 + 9?',
    options: ['17', '16', '25', '18'],
    answer: '18',
}, {
    question: '5 + 5?',
    options: ['20', '15', '10', '25',],
    answer: '10',
}, {
    question: '61 + 9?',
    options: ['70', '71', '69', '78'],
    answer: '70',
}, {
    question: '2+8?',
    options: ['10', '9', '7', '6',],
    answer: '10',
}, {
    question: '25 + 25?',
    options: ['75', '50', '45', '67'],
    answer: '50',
}, {
    question: '8 + 8?',
    options: ['17', '19', '18', '16',],
    answer: '16',
}, {
    question: '2 + 100?',
    options: ['120', '210', '102', '103'],
    answer: '102',
},];
/* fixed variable to game*/
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
/* question with options to submit*/
function displayQuestion() {
    const questionData = quizData[currentQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);

    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement('label');
        option.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz';
        radio.value = shuffledOptions[i];

        const optionText = document.createTextNode(shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}
/* check Answer show all incorrect Answer with correct answer*/
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestion].answer) {
            score++;
        } else {
            incorrectAnswers.push({
                question: quizData[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer: quizData[currentQuestion].answer,
            });
        }
        currentQuestion++;
        selectedOption.checked = false;
        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}
/*get score end of game 0-10*/
function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}
/*retryquiz button end of the game to start over quiz*/
function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
}
