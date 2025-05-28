import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ttmzucvzmbuahakmauvz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXp1Y3Z6bWJ1YWhha21hdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzE3MjIsImV4cCI6MjA2Mzc0NzcyMn0.Npeft23fnGss2PTDbWd2CkdCRFFBhc_1TtZqb1N7JVI'
);

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

async function fetchQuestions() {
  const params = new URLSearchParams(window.location.search);
  const testTitle = params.get("test");
  if (!testTitle) return alert("Test no especificado en la URL.");

  document.getElementById("test-title").innerText = `Test: ${testTitle}`;

  const { data, error } = await supabase
    .from("user_tests_questions")
    .select("*")
    .eq("test_title", testTitle)
    .order("created_at", { ascending: true });

  if (error || !data.length) {
    alert("No se encontraron preguntas para este test.");
    console.error(error);
    return;
  }

  questions = data.map(q => ({
    ...q,
    answers: q.answers,
    correct: Number(q.correct)
  }));

  userAnswers = Array(questions.length).fill(null);
  loadQuestion();

  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('main').classList.remove('hidden');
  }, 1000);
}

function loadQuestion() {
  const q = questions[currentQuestionIndex];

  document.getElementById("question-number").innerText = `Pregunta ${currentQuestionIndex + 1} / ${questions.length}`;
  document.getElementById("question").innerText = q.question;

  const container = document.getElementById("answer-container");
  container.innerHTML = "";
  q.answers.forEach((answer, i) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="answer" class="answer" onclick="checkAnswer()"> ${answer}`;
    container.appendChild(label);
  });

  const selected = userAnswers[currentQuestionIndex];
  if (selected !== null) {
    document.querySelectorAll(".answer")[selected].checked = true;
    document.getElementById("next-question-btn").style.display = "inline-block";
  } else {
    document.getElementById("next-question-btn").style.display = "none";
  }

  document.getElementById("prev-question-btn").style.display =
    currentQuestionIndex > 0 ? "inline-block" : "none";
}

function checkAnswer() {
  const radios = document.querySelectorAll(".answer");
  radios.forEach((r, i) => {
    if (r.checked) {
      userAnswers[currentQuestionIndex] = i;
      document.getElementById("next-question-btn").style.display = "inline-block";
    }
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    calculateScore();
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function calculateScore() {
  score = questions.reduce((acc, q, i) =>
    userAnswers[i] === q.correct ? acc + 1 : acc, 0);
}

function showResults() {
  document.getElementById("test-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("score").innerText = `Tu puntaje es: ${score} de ${questions.length}`;

  const container = document.getElementById("detailed-results");
  container.innerHTML = "";

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("question-result");

    // Pregunta como título
    const title = document.createElement("p");
    title.classList.add("question-title");
    title.innerHTML = `<strong>Pregunta ${i + 1}:</strong> ${q.question}`;
    div.appendChild(title);

    // Respuestas
    q.answers.forEach((a, j) => {
    const p = document.createElement("p");
    p.innerText = a;

    if (j === q.correct) p.classList.add("correct-answer");
    if (j === userAnswers[i] && j !== q.correct) p.classList.add("user-answer");

    div.appendChild(p);
  });

  // Resultado final de esa pregunta
  const feedback = document.createElement("p");
  feedback.innerText = userAnswers[i] === q.correct ? "¡Correcto!" : "Incorrecto :(";
  // feedback.style.fontWeight = "bold";
  feedback.style.marginTop = "10px";
  feedback.style.color = userAnswers[i] === q.correct ? "#2e7d32" : "#c62828";

  div.appendChild(feedback);
  container.appendChild(div);
  });

}

function restartTest() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = Array(questions.length).fill(null);
  document.getElementById("result-container").style.display = "none";
  document.getElementById("test-container").style.display = "block";
  loadQuestion();
}

document.addEventListener("DOMContentLoaded", fetchQuestions);
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.restartTest = restartTest;
window.checkAnswer = checkAnswer;