import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

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

  const titleEl = document.getElementById("test-title");
  if (titleEl && testTitle) {
    titleEl.innerText = `Test: ${testTitle}`;
  }

  const { data: userData } = await supabase.auth.getUser();
  if (!userData?.user) {
    alert("Debes iniciar sesión para jugar el test.");
    return;
  }

  const { data, error } = await supabase
    .from("user_tests_questions")
    .select("*")
    .eq("user_id", userData.user.id)
    .eq("test_title", testTitle)
    .order("created_at", { ascending: true });

  if (error || !data.length) {
    alert("No se pudieron cargar las preguntas.");
    console.error(error);
    return;
  }

  questions = data.map(q => ({
    ...q,
    answers: typeof q.answers === "string" ? JSON.parse(q.answers) : q.answers,
    correct: typeof q.correct === "string" ? parseInt(q.correct) : q.correct
  }));

  console.log("Preguntas cargadas:", questions);

  userAnswers = Array(questions.length).fill(null);
  loadQuestion();

  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('main').classList.remove('hidden');
  }, 1000);
}

function loadQuestion() {
  const current = questions[currentQuestionIndex];
  console.log(`Cargando pregunta ${currentQuestionIndex + 1}:`, current);

  document.getElementById("question-number").innerText = `Pregunta ${currentQuestionIndex + 1} / ${questions.length}`;
  document.getElementById("question").innerText = current.question;

  const answerContainer = document.getElementById("answer-container");
  answerContainer.innerHTML = "";

  current.answers.forEach((answer, i) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="answer" class="answer" onclick="checkAnswer()"> ${answer}`;
    answerContainer.appendChild(label);
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
  radios.forEach((radio, i) => {
    if (radio.checked) {
      userAnswers[currentQuestionIndex] = i;
      console.log(`Respuesta seleccionada para la pregunta ${currentQuestionIndex + 1}: opción ${i}`);
      document.getElementById("next-question-btn").style.display = "inline-block";
    }
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  console.log("Avanzando a pregunta:", currentQuestionIndex);

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    console.log("Final del test alcanzado. Calculando puntuación...");
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
  score = 0;
  questions.forEach((q, i) => {
    console.log(`Pregunta ${i + 1}: usuario eligió ${userAnswers[i]}, correcta es ${q.correct}`);
    if (userAnswers[i] === q.correct) score++;
  });
}

function showResults() {
  console.log("Mostrando resultados...");

  document.querySelector("main").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("score").innerText = `Tu puntaje es: ${score} de ${questions.length}`;

  const resultContainer = document.getElementById("detailed-results");
  resultContainer.innerHTML = "";

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("question-result");
    div.innerHTML = `<p><strong>Pregunta ${i + 1}:</strong> ${q.question}</p>`;
    q.answers.forEach((a, j) => {
      const p = document.createElement("p");
      if (j === q.correct) p.classList.add("correct-answer");
      if (j === userAnswers[i] && j !== q.correct) p.classList.add("user-answer");
      if (j !== userAnswers[i] && j !== q.correct) p.classList.add("neutral-answer");
      p.innerText = a;
      div.appendChild(p);
    });
    resultContainer.appendChild(div);
  });
}

function restartTest() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = Array(questions.length).fill(null);
  document.getElementById("result-container").style.display = "none";
  document.querySelector("main").style.display = "block";
  loadQuestion();
}

document.addEventListener("DOMContentLoaded", fetchQuestions);
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.restartTest = restartTest;
window.checkAnswer = checkAnswer;