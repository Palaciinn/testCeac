// Conexión con Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ttmzucvzmbuahakmauvz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXp1Y3Z6bWJ1YWhha21hdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzE3MjIsImV4cCI6MjA2Mzc0NzcyMn0.Npeft23fnGss2PTDbWd2CkdCRFFBhc_1TtZqb1N7JVI';
const supabase = createClient(supabaseUrl, supabaseKey);


// Variables globales
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// Cargar preguntas desde Supabase
async function fetchAndStart() {
  const { data, error } = await supabase
    .from('entornoServidor')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error("Error cargando preguntas:", error);
    alert("No se pudieron cargar las preguntas");
    return;
  }

  questions = data;
  userAnswers = Array(questions.length).fill(null);

shuffleQuestions(questions);
loadQuestion();

// Mostrar test después de 1.5s mínimo
setTimeout(() => {
  document.getElementById('loader').style.display = 'none';
  document.querySelector('main').classList.remove('hidden');
  document.getElementById('test-container').style.display = 'block';
}, 2000);



}

document.addEventListener('DOMContentLoaded', fetchAndStart);

// Cargar pregunta actual
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // Mostrar número de pregunta
  document.getElementById('question-number').innerText = `Pregunta ${currentQuestionIndex + 1} / ${questions.length}`;

  // Mostrar texto de la pregunta
  document.getElementById('question').innerText = currentQuestion.question;

  // Mostrar respuestas dinámicamente
  const answerContainer = document.getElementById('answer-container');
  answerContainer.innerHTML = ''; // Limpiar respuestas anteriores

  currentQuestion.answers.forEach((answer, index) => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="radio" name="answer" class="answer" onclick="checkAnswer()"> ${answer}`;
    answerContainer.appendChild(label);
  });

  // Restaurar respuesta seleccionada (si existe)
  const selected = userAnswers[currentQuestionIndex];
  if (selected !== null) {
    const radios = document.querySelectorAll('.answer');
    if (radios[selected]) {
      radios[selected].checked = true;
    }
    document.getElementById('next-question-btn').style.display = 'inline-block';
  } else {
    document.getElementById('next-question-btn').style.display = 'none';
  }

  // Mostrar botón anterior si no es la primera
  document.getElementById('prev-question-btn').style.display =
    currentQuestionIndex > 0 ? 'inline-block' : 'none';
}

// Guardar respuesta del usuario
function checkAnswer() {
  const radioButtons = document.querySelectorAll('.answer');
  let selectedAnswer = null;

  radioButtons.forEach((radio, index) => {
    if (radio.checked) {
      selectedAnswer = index;
    }
  });

  if (selectedAnswer !== null) {
    userAnswers[currentQuestionIndex] = selectedAnswer;
    document.getElementById('next-question-btn').style.display = 'inline-block';
  }
}

// Ir a la siguiente pregunta
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    calculateScore();
    showResults();
  }
}

// Volver a la pregunta anterior
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

// Calcular puntuación final
function calculateScore() {
  score = 0;
  questions.forEach((q, index) => {
    if (userAnswers[index] === q.correct) {
      score++;
    }
  });
}

// Mostrar resultados
function showResults() {
  document.getElementById('test-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  document.getElementById('score').innerText = `Tu puntaje es: ${score} de ${questions.length}`;

  const resultContainer = document.getElementById('detailed-results');
  resultContainer.innerHTML = '';

  questions.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = q.correct;

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question-result');

    const questionText = document.createElement('p');
    questionText.innerHTML = `<strong>Pregunta ${index + 1}:</strong> ${q.question}`;
    questionDiv.appendChild(questionText);

    q.answers.forEach((answer, i) => {
      const answerP = document.createElement('p');

      if (i === correctAnswer) answerP.classList.add('correct-answer');
      if (i === userAnswer && i !== correctAnswer) answerP.classList.add('user-answer');
      if (i !== correctAnswer && i !== userAnswer) answerP.classList.add('neutral-answer');

      answerP.innerText = answer;
      questionDiv.appendChild(answerP);
    });

    const resultMsg = document.createElement('p');
    resultMsg.classList.add('final-feedback');
    resultMsg.innerText = userAnswer !== correctAnswer ? 'Incorrecto :(' : 'Correcta :)';
    if (userAnswer !== correctAnswer) resultMsg.classList.add('incorrect');

    questionDiv.appendChild(resultMsg);
    resultContainer.appendChild(questionDiv);
  });
}

// Reiniciar test
function restartTest() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = Array(questions.length).fill(null);

  document.getElementById('result-container').style.display = 'none';
  document.getElementById('test-container').style.display = 'block';

  loadQuestion();
}

// Mezclar preguntas al inicio
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Atajos de teclado: 1-3 para seleccionar / Enter para avanzar / Esc para retroceder
document.addEventListener('keydown', (event) => {
  const key = event.key;
  const radios = document.querySelectorAll('.answer');

  // Selección con teclas 1, 2, 3
  if (['1', '2', '3'].includes(key)) {
    const index = parseInt(key) - 1;
    if (radios[index]) {
      radios[index].checked = true;
      checkAnswer();
    }
  }

  // Avanzar con Enter (si ya hay respuesta)
  if (key === 'Enter') {
    const currentAnswer = userAnswers[currentQuestionIndex];
    if (currentAnswer !== null) {
      nextQuestion();
    }
  }

  // Retroceder con Escape (si no estás en la primera)
  if (key === 'Escape' && currentQuestionIndex > 0) {
    prevQuestion();
  }
});


// Al final del archivo:
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.restartTest = restartTest;
window.checkAnswer = checkAnswer;