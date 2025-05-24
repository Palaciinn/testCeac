const questions = [
    {
        question: "¿Cuál es el capital mínimo necesario para constituir una sociedad anónima?",
        answers: ["30.000 euros", "10.000 euros", "60.000 euros"],
        correct: 2
    },
    {
        question: "¿Cuál es una característica de una sociedad anónima?",
        answers: [
            "Sólo puede operar en mercados irregulares",
            "El capital está dividido en participaciones",
            "El capital está dividido en acciones"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es la principal característica de una empresa pública?",
        answers: [
            "Está controlada por inversores privados",
            "Solo opera en sectores estratégicos",
            "Es propiedad del Estado"
        ],
        correct: 2
    },
    {
        question: "Según su forma jurídica, ¿cuál de las siguientes afirmaciones es correcta sobre una Sociedad de Responsabilidad Limitada (S.L.)?",
        answers: [
            "Tributa través del IRPF, IS, ITP y el IAE",
            "No requiere inscripción en el Registro Mercantil",
            "Puede ser constituida por un único socio y su responsabilidad se limita al capital aportado"
        ],
        correct: 2
    },
    {
        question: "¿Qué características personales debe tener la persona emprendedora?",
        answers: [
            "Nivel formativo y experiencia profesional",
            "Edad y nivel de renta",
            "Autoconfianza y persistencia"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de empresa se caracteriza por tener menos de 50 trabajadores?",
        answers: ["Microempresa", "Pequeña empresa", "Mediana empresa"],
        correct: 1
    },
    {
        question: "¿Cómo se clasifican las empresas según su actividad económica?",
        answers: [
            "Empresas nacionales, internacionales y multinacionales",
            "Empresas productoras, comerciales y de servicios",
            "Empresas del sector primario, secundario, terciario y cuaternario"
        ],
        correct: 2
    },
    {
        question: "¿Qué consecuencia puede tener la llevanza irregular de la contabilidad según normas tributarias?",
        answers: [
            "Multa administrativa sin consecuencias penales",
            "Inhabilitación para ejercer cualquier actividad económica",
            "Delito contra la Hacienda pública"
        ],
        correct: 2
    },
    {
        question: "¿Quién debe conservar los libros contables en caso de cese del empresario en sus actividades?",
        answers: [
            "Los empleados de mayor antigüedad",
            "Los herederos del empresario",
            "La Hacienda pública"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la principal consideración al crear una empresa?",
        answers: [
            "Satisfacer una necesidad demandada por potenciales clientes",
            "Obtener beneficios en el menor tiempo posible",
            "Ser pionero en el mercado sin evaluar la competencia"
        ],
        correct: 0
    },
    {
        question: "¿Qué tipo de cuenta tiene saldo acreedor por naturaleza?",
        answers: ["Cuenta de ingresos", "Cuenta de pasivo", "Cuenta de activo"],
        correct: 1
    },
    {
        question: "¿Qué representa el capital humano en una empresa?",
        answers: [
            "La cantidad de recursos físicos disponibles",
            "La experiencia y habilidades de los empleados",
            "El total de ingresos generados"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la definición de empresa?",
        answers: [
            "Un ente jurídico exclusivamente con ánimo de lucro",
            "Una organización de recursos necesarios",
            "Un conjunto de ideas sin estructura"
        ],
        correct: 1
    },
    {
        question: "¿Cuál de las siguientes opciones define mejor a una empresa multinacional?",
        answers: [
            "Una empresa que opera en diferentes regiones dentro de un país",
            "Una empresa que exporta sus productos pero solo tiene presencia física en un país",
            "Una empresa con filiales de producción o venta en varios países"
        ],
        correct: 2
    },
    {
        question: "Según la clasificación de la Unión Europea, ¿cuál de las siguientes combinaciones de empleados y facturación corresponde a una microempresa?",
        answers: [
            "Menos de 10 empleados y una facturación anual inferior a 2 millones de euros",
            "Menos de 15 empleados y una facturación anual inferior a 4 millones de euros",
            "Menos de 20 empleados y una facturación anual inferior a 5 millones de euros"
        ],
        correct: 0
    },
    {
        question: "¿Qué se entiende por responsabilidad social corporativa?",
        answers: [
            "La contribución voluntaria de la empresa al bienestar social y ambiental",
            "La maximización de beneficios sin considerar su impacto",
            "La obligación de pagar impuestos según sus ingresos"
        ],
        correct: 0
    },
    {
        question: "¿Qué elementos tangibles forman parte de la identidad visual corporativa de una empresa?",
        answers: [
            "Papelería, carteles, uniformes, logotipos y representaciones visuales",
            "Normas y reglas",
            "Elementos materiales e inmateriales"
        ],
        correct: 0
    },
    {
        question: "¿En qué categoría se clasifican las empresas con participación pública y privada?",
        answers: [
            "De titularidad externa",
            "De titularidad mixta",
            "De titularidad compartida"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de empresa está más enfocada en el uso de la tecnología y la innovación?",
        answers: [
            "Empresa del sector cuaternario",
            "Empresa del sector terciario",
            "Empresa del sector primario"
        ],
        correct: 0
    },
    {
        question: "¿Cuáles son los tres momentos fundamentales en todo proceso de cambio?",
        answers: [
            "Invención, innovación y difusión",
            "Creación, adaptación y mejora",
            "Idea, aplicación y resultados"
        ],
        correct: 0
    },
    {
        question: "¿Cuál de estas NO es una forma jurídica de empresa?",
        answers: [
            "Sociedad cooperativa",
            "Empresa autogestionada",
            "Sociedad limitada"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la fórmula para calcular el patrimonio neto?",
        answers: [
            "Patrimonio neto = Activo – Pasivo",
            "Patrimonio neto = Activos - Deudas acumuladas",
            "Patrimonio neto = Capital + Reservas"
        ],
        correct: 0
    },
    {
        question: "¿Qué comprende la función administrativa?",
        answers: [
            "La supervisión operativa del personal",
            "La planificación estratégica y el sistema de organización",
            "Solo la gestión económica"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la función de la empresa relacionada con la transformación de bienes?",
        answers: [
            "Función logística",
            "Función financiera",
            "Función de producción"
        ],
        correct: 2
    },
    {
        question: "¿Qué función empresarial se encarga de gestionar los recursos económicos?",
        answers: [
            "Función de operaciones",
            "Función financiera",
            "Función comercial"
        ],
        correct: 1
    },
    {
        question: "¿Cuáles son las cinco funciones administrativas según Arthur G. Bedeian?",
        answers: [
            "Producción, comercialización, inversión, logística y ventas",
            "Desarrollo, supervisión, comunicación, planificación y liderazgo",
            "Planificación, organización, suministro, guía e influencia interpersonal y control"
        ],
        correct: 2
    },
    {
        question: "¿Cuál de las siguientes NO es una función del empresario?",
        answers: [
            "Solo producir bienes sin venderlos",
            "Tomar decisiones estratégicas",
            "Organizar los recursos de la empresa"
        ],
        correct: 0
    },
    {
        question: "¿Qué tipo de impuestos debe pagar un Autónomo?",
        answers: [
            "Impuesto de Sociedades y el Impuesto sobre Actividades Económicas (IAE)",
            "Impuesto sobre la Renta de las Personas Físicas (IRPF) y el Impuesto sobre el Valor Añadido (IVA)",
            "Impuesto sobre la Renta de las Personas Físicas (IRPF) y el Impuesto sobre Sociedades"
        ],
        correct: 1
    },
    {
        question: "La letra inicial en el NIF de la SRL es:",
        answers: ["P", "A", "B"],
        correct: 2
    },
    {
        question: "¿Cuál es el principal objetivo de una empresa con ánimo de lucro?",
        answers: [
            "Obtener beneficios económicos",
            "Asegurar la permanencia de sus empleados",
            "Promover la estabilidad del mercado"
        ],
        correct: 0
    },
    {
        question: "¿Cuáles son los objetivos secundarios de las empresas?",
        answers: [
            "Expandirse sin considerar la demanda",
            "Reducir la competencia en el sector",
            "Cubrir las necesidades de un mercado"
        ],
        correct: 2
    },
    {
        question: "¿Qué implica el principio de partida doble?",
        answers: [
            "Cada vez que se realiza una operación contable, esta afecta como mínimo en dos cuentas",
            "Las empresas deben destinar los beneficios tanto al Capital social como a las reservas",
            "Las empresas responden ante la Hacienda Pública y ante la SS"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es el plazo para la presentación y legalización de los libros de cuentas en el Registro Mercantil?",
        answers: [
            "Cuatro meses después del cierre del ejercicio",
            "Seis meses después del cierre del ejercicio",
            "Dos meses después del cierre del ejercicio"
        ],
        correct: 0
    },
    {
        question: "¿En qué consisten los procesos administrativos?",
        answers: [
            "Evaluación de la productividad",
            "Todas las respuestas son correctas",
            "Supervisión de la contabilidad interna"
        ],
        correct: 1
    },
    {
        question: "¿Cuál de los siguientes elementos NO es un recurso productivo de una empresa?",
        answers: [
            "El ocio de los empleados",
            "Capital financiero",
            "Herramientas de trabajo"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es la relación entre la misión y la visión en la estrategia empresarial?",
        answers: [
            "La visión establece el mercado objetivo y la misión los recursos",
            "La misión establece los objetivos y la visión los medios para alcanzarlos",
            "La misión define los valores y la visión las acciones"
        ],
        correct: 1
    },
    {
        question: "¿En qué sector se clasificaría una empresa dedicada a la manufactura de productos?",
        answers: [
            "Sector primario",
            "Sector secundario",
            "Sector cuaternario"
        ],
        correct: 1
    },
    {
        question: "¿Qué significa que una empresa tenga personalidad jurídica?",
        answers: [
            "Que no puede contraer deudas",
            "Que solo puede ser creada por una persona",
            "Que tiene derechos y obligaciones propias, independientes de sus socios"
        ],
        correct: 2
    },
    {
        question: "¿Cuánto tiempo debe conservar el empresario los libros contables y documentación relacionada después de la fecha del último asiento?",
        answers: ["10 años", "6 años", "3 años"],
        correct: 1
    },
    {
        question: "¿Qué ventaja tiene una cooperativa frente a una empresa tradicional?",
        answers: [
            "La participación equitativa de sus socios",
            "Mayor capacidad de expansión internacional",
            "Libertad de fijar precios sin regulación"
        ],
        correct: 0
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