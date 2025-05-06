const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        answers: ["Madrid", "Berlín", "París", "Lisboa"],
        correct: 2 // Índice de la respuesta correcta (París)
    },
    {
        question: "¿Qué es el HTML?",
        answers: ["Lenguaje de programación", "Lenguaje de marcado", "Framework", "Base de datos"],
        correct: 1 // Índice de la respuesta correcta (Lenguaje de marcado)
    },
    // Puedes agregar más preguntas aquí...
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Actualizar la pregunta
    document.getElementById('question').innerText = currentQuestion.question;

    // Desmarcar cualquier opción previamente seleccionada
    const radioButtons = document.querySelectorAll('.answer');
    radioButtons.forEach((radio) => {
        radio.checked = false; // Desmarcar
    });

    // Actualizar las respuestas
    radioButtons.forEach((radio, index) => {
        radio.nextElementSibling.innerText = currentQuestion.answers[index]; // Actualiza las opciones de respuesta
    });

    // Ocultar el botón de "Siguiente" hasta que se seleccione una respuesta
    document.getElementById('next-question-btn').style.display = 'none';
}

function checkAnswer() {
    const radioButtons = document.querySelectorAll('.answer');
    let selectedAnswer = null;

    // Verificar cuál radio button está seleccionado
    radioButtons.forEach((radio, index) => {
        if (radio.checked) {
            selectedAnswer = index;
        }
    });

    const currentQuestion = questions[currentQuestionIndex];

    // Verificar si la respuesta seleccionada es la correcta
    if (selectedAnswer === currentQuestion.correct) {
        score++;
    }

    // Mostrar el botón "Siguiente" solo si una opción fue seleccionada
    if (selectedAnswer !== null) {
        document.getElementById('next-question-btn').style.display = 'inline-block';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();  // Cargar la siguiente pregunta
    } else {
        showResults();  // Mostrar resultados al finalizar el test
    }
}

function showResults() {
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').innerText = `Tu puntaje es: ${score} de ${questions.length}`;
}

// Inicializa el test
loadQuestion();
