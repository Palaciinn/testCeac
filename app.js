const questions = [
    {
        question: "¿Qué representan los inputs de una empresa?",
        answers: ["Autocontrol", "Influencia", "Producción", "Personal"],
        correct: 3
    },
    {
        question: "¿Cuándo es fuerte la cultura empresarial?",
        answers: [
            "Cuando se aceptan y siguen firmemente en la toma de decisiones.",
            "Cuando no se asumen valores, se ven como impuestos.",
            "Cuando los clientes cumplen con los objetivos.",
            "Cuando son impuestos por las AAPP y llevan sanciones."
        ],
        correct: 0
    },
    {
        question: "¿Cuál es el perfil de la persona emprendedora que se basa en características personales?",
        answers: ["Psicológico", "Técnico", "Demográfico", "Sociológico"],
        correct: 0
    },
    {
        question: "¿Qué aspectos determinan la oferta?",
        answers: ["Amplitud y profundidad", "Creación y finalización", "Investigación e iniciativa", "Necesidad y desarrollo"],
        correct: 0
    },
    {
        question: "¿Qué implica la función de producción?",
        answers: [
            "Obtener recursos económicos para mantener la empresa.",
            "Contratar recursos humanos para ocultar la falta de bienes.",
            "Obtener bienes y servicios para satisfacer necesidades.",
            "Obtener beneficios para mantener la empresa"
        ],
        correct: 2
    },
    {
        question: "¿Cómo se denomina la acción de presentar una idea de manera clara y concisa a posibles inversores en un tiempo máximo de treinta segundos a un minuto?",
        answers: ["Elevator pitch", "Plataforma elevadora", "Plataforma simple", "Plataforma logística"],
        correct: 0
    },
    {
        question: "¿Qué se debe hacer en relación con los planes de control?",
        answers: ["Pagar un salario digno", "Gestionar los resultados", "Establecer mecanismos de control", "Requerir recursos económicos"],
        correct: 2
    },
    {
        question: "¿Cuáles pueden ser los modelos de organización de una empresa?",
        answers: ["Simples y complejos", "Necesarios e innecesarios", "Privados y públicos", "Presentes o futuros"],
        correct: 0
    },
    {
        question: "¿Cuál es uno de los principales objetivos de la acción de la persona emprendedora?",
        answers: [
            "La creación de nuevas actividades económicas renovables cada cinco años.",
            "La involución y degeneración de las nuevas necesidades de la población.",
            "La evolución y generación de nuevas necesidades en la población.",
            "La creación de empleo en las Administraciones Públicas para generar riqueza."
        ],
        correct: 2
    },
    {
        question: "¿Cuál es la motivación de la persona emprendedora que busca mejorar las condiciones de vida de los demás?",
        answers: ["Económica", "Tecnológica", "Social", "Política"],
        correct: 2
    },
    {
        question: "¿Cómo se llaman las representaciones de estructuras que muestran la totalidad de la misma?",
        answers: ["Analíticas", "Generales", "Suplementarias", "Informativas"],
        correct: 1
    },
    {
        question: "¿Qué papel desempeña la persona emprendedora?",
        answers: [
            "No es importante en ningún caso; lo importante son las personas que invierten en la empresa.",
            "La figura central de la creación de nuevas unidades de producción que satisfacen necesidades emergentes.",
            "Es la figura estratégica de cualquier entidad sin ánimo de lucro para alcanzar sus metas a largo plazo.",
            "La figura secundaria de la creación de nuevas unidades de venta que satisfagan las necesidades existentes."
        ],
        correct: 1
    },
    {
        question: "¿Cómo se realiza el estudio del microentorno para identificar las ventajas competitivas de una empresa?",
        answers: ["Riqueza intrínseca de Smith", "Automóvil de Ford", "Topacio de Marx", "Diamante de Porter"],
        correct: 3
    },
    {
        question: "¿Qué tipo de innovación proporciona a los especialistas de diversos campos de conocimiento más herramientas para desarrollarse y alcanzar el bienestar deseado?",
        answers: ["Secundaria", "Fundamental", "Tecnológica", "Ideológica"],
        correct: 2
    },
    {
        question: "¿Qué factores se deben tener en cuenta con respecto a los emprendedores?",
        answers: ["Creatividad", "Accionistas", "Participantes", "Socios"],
        correct: 0
    },
    {
        question: "¿Qué se incluye en el plan de empresa?",
        answers: [
            "Se incluye la idea de negocio que se va a desarrollar.",
            "Se realiza un borrador de la idea de la empresa.",
            "De forma esquemática, las ideas de los inversores.",
            "Las necesidades de personal de la empresa."
        ],
        correct: 0
    },
    {
        question: "¿Qué estudia las conductas habituales de los profesionales en cuanto a su integridad?",
        answers: ["Responsabilidad económica", "Moral social", "Ética empresarial", "Balance social"],
        correct: 2
    },
    {
        question: "¿Cuál de las siguientes NO es una función de la empresa?",
        answers: ["Intervención social", "Investigación, desarrollo e innovación", "Generar riqueza", "Organizar factores de producción"],
        correct: 0
    },
    {
        question: "¿Cuáles son los límites de la responsabilidad social empresarial?",
        answers: ["Obligatorio y voluntario", "Mínimo y máximo", "Económico y social", "Presente y futuro"],
        correct: 1
    },
    {
        question: "¿Qué característica personal se refiere a la persistencia en la persona emprendedora?",
        answers: ["Reconocer los errores", "Honradez", "Interacción social", "Persistencia"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = Array(questions.length).fill(null);

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Mostrar número de pregunta
    document.getElementById('question-number').innerText = `Pregunta ${currentQuestionIndex + 1} / ${questions.length}`;

    // Mostrar texto de la pregunta
    document.getElementById('question').innerText = currentQuestion.question;

    // Actualizar respuestas
    const labels = document.querySelectorAll('#answer-container label');
    labels.forEach((label, index) => {
        label.innerHTML = `<input type="radio" name="answer" class="answer" onclick="checkAnswer()"> ${currentQuestion.answers[index]}`;
    });

    // Restaurar respuesta seleccionada (si existe)
    const selected = userAnswers[currentQuestionIndex];
    if (selected !== null) {
        const radios = document.querySelectorAll('.answer');
        radios[selected].checked = true;
        document.getElementById('next-question-btn').style.display = 'inline-block';
    } else {
        document.getElementById('next-question-btn').style.display = 'none';
    }

    // Mostrar/ocultar botón Anterior
    document.getElementById('prev-question-btn').style.display =
        currentQuestionIndex > 0 ? 'inline-block' : 'none';
}

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
    score = 0;
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            score++;
        }
    });
}

function showResults() {
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').innerText = `Tu puntaje es: ${score} de ${questions.length}`;

    const resultContainer = document.getElementById('detailed-results');
    resultContainer.innerHTML = ''; // Limpiar resultados previos

    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.correct;

        // Crear contenedor para la pregunta
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-result');

        // Título de la pregunta
        const questionText = document.createElement('p');
        questionText.innerHTML = `<strong>Pregunta ${index + 1}:</strong> ${q.question}`;
        questionDiv.appendChild(questionText);

        // Opciones de respuesta
        q.answers.forEach((answer, i) => {
            const answerP = document.createElement('p');

            if (i === correctAnswer) {
                answerP.classList.add('correct-answer');
            }
            if (i === userAnswer && i !== correctAnswer) {
                answerP.classList.add('user-answer');
            }
            if (i !== correctAnswer && i !== userAnswer) {
                answerP.classList.add('neutral-answer');
            }

            answerP.innerText = answer;
            questionDiv.appendChild(answerP);
        });

        // Mensaje final de correcta/incorrecta
        const resultMsg = document.createElement('p');
        resultMsg.classList.add('final-feedback');
        if (userAnswer !== correctAnswer) {
            resultMsg.classList.add('incorrect');
            resultMsg.innerText = 'Incorrecto :(';
        } else {
            resultMsg.innerText = 'Correcta :)';
        }

        questionDiv.appendChild(resultMsg);
        resultContainer.appendChild(questionDiv);
    });
}


function restartTest() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = Array(questions.length).fill(null);

    document.getElementById('result-container').style.display = 'none';
    document.getElementById('test-container').style.display = 'block';

    loadQuestion();
}

// Mezclar preguntas al iniciar el test (algoritmo de Fisher-Yates)
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Inicializar el test
shuffleQuestions(questions);
loadQuestion();