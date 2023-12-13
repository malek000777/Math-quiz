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