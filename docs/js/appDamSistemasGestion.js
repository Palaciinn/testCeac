const questions = [
    {
        question: "¿Qué tipo de pruebas garantiza que los diversos módulos del sistema interactúan correctamente?",
        answers: ["Pruebas de integración", "Pruebas de rendimiento", "Pruebas de funcionalidad"],
        correct: 0
    },
    {
        question: "¿Qué método de integración utiliza web services para conectar diferentes ERPs y CRMs?",
        answers: ["Transferencia de Datos Manual", "Conexión Nativa", "Conexión Vía Web Services"],
        correct: 2
    },
    {
        question: "¿Qué herramienta permite la automatización de pruebas funcionales y de rendimiento?",
        answers: ["JIRA", "GitHub", "Selenium"],
        correct: 2
    },
    {
        question: "¿Qué es esencial para la correcta implementación de un sistema ERP en una empresa?",
        answers: ["Implementar sin pruebas previas", "Definir un presupuesto claro y detallado", "Evitar la formación del personal"],
        correct: 1
    },
    {
        question: "¿Qué es una API REST y qué métodos HTTP estándar utiliza?",
        answers: [
            "Un sistema de almacenamiento de datos en la nube",
            "Una interfaz que permite la comunicación entre aplicaciones usando GET, POST, PUT, DELETE",
            "Un lenguaje de programación para bases de datos"
        ],
        correct: 1
    },
    {
        question: "¿Qué herramienta de control de versiones es fundamental para el desarrollo de aplicaciones multiplataforma?",
        answers: ["Git", "Docker", "Jenkins"],
        correct: 0
    },
    {
        question: "¿Qué modelo de instalación de ERP es ideal para entornos de desarrollo o aprendizaje?",
        answers: ["Cliente-Servidor Web", "Monopuesto", "Cliente-Servidor"],
        correct: 1
    },
    {
        question: "¿Qué es esencial para la correcta implementación de un ERP en una empresa?",
        answers: [
            "Planificación detallada de la implantación",
            "Capacitación de un solo departamento",
            "Selección del software más caro"
        ],
        correct: 0
    },
    {
        question: "¿Qué es esencial para asegurar la calidad y funcionalidad de los sistemas ERP y CRM?",
        answers: [
            "Evitar la migración de datos",
            "Uso de entornos de integración y pruebas",
            "Implementar sin pruebas exhaustivas"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de servicio en la nube proporciona recursos básicos de computación como máquinas virtuales y almacenamiento?",
        answers: [
            "SaaS (Software como Servicio)",
            "IaaS (Infraestructura como Servicio)",
            "PaaS (Plataforma como Servicio)"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de licencia permite el uso y redistribución del software siempre y cuando se atribuya la autoría original?",
        answers: ["Licencia propietaria", "Licencia Copyleft", "Licencia permisiva"],
        correct: 2
    },
    {
        question: "¿Qué tipo de formulario es esencial para la gestión de recursos humanos?",
        answers: [
            "Formulario de Solicitud de Compras",
            "Formulario de Registro de Empleados",
            "Formulario de Gestión de Inventario"
        ],
        correct: 1
    },
    {
        question: "¿Qué herramienta permite la creación de dashboards interactivos y personalizados en tiempo real?",
        answers: ["Microsoft Excel", "Power BI", "Google Sheets"],
        correct: 1
    },
    {
        question: "¿Qué tipo de pruebas aseguran que los diferentes módulos del sistema ERP se comuniquen y funcionen juntos sin problemas?",
        answers: ["Pruebas de rendimiento", "Pruebas de integración", "Pruebas de migración de datos"],
        correct: 1
    },
    {
        question: "¿Qué es una excepción personalizada en el contexto de manejo de errores?",
        answers: [
            "Ignorar las excepciones no críticas",
            "Creación de excepciones específicas para errores de negocio",
            "Uso de excepciones genéricas para todos los errores"
        ],
        correct: 1
    },
    {
        question: "¿Qué técnica se utiliza para anticipar comportamientos futuros basados en datos históricos?",
        answers: ["Análisis predictivo", "Análisis exploratorio", "Análisis descriptivo"],
        correct: 0
    },
    {
        question: "¿Qué herramienta se utiliza para diseñar informes tradicionales en formatos como PDF o Word?",
        answers: ["SQL Server Data Tools", "Power BI", "Tableau"],
        correct: 0
    },
    {
        question: "¿Cuál es el propósito principal de la normalización en bases de datos?",
        answers: [
            "Eliminar redundancias y asegurar la integridad de los datos",
            "Reducir el tamaño de la base de datos",
            "Aumentar la velocidad de las consultas"
        ],
        correct: 0
    },
    {
        question: "¿Qué KPI es relevante para medir la adopción y uso de una aplicación móvil?",
        answers: [
            "Tasa de conversión de pago",
            "Tasa de rebote",
            "Usuarios Activos Diarios (DAU)"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de CRM se orienta hacia el análisis de datos recopilados para entender mejor las preferencias y comportamientos de los clientes?",
        answers: ["CRM operativo", "CRM analítico", "CRM colaborativo"],
        correct: 1
    },
    {
        question: "¿Qué módulo del ERP es esencial para manejar todas las transacciones monetarias?",
        answers: ["Gestión de Calidad", "Gestión Financiera", "Recursos Humanos"],
        correct: 1
    },
    {
        question: "¿Qué es un informe ad-hoc y cuándo se utiliza?",
        answers: [
            "Un informe generado en respuesta a una necesidad específica y puntual de información en tiempo real",
            "Un informe programado que se produce periódicamente",
            "Un informe que se genera automáticamente sin intervención humana"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es una de las principales ventajas de los ERP en la nube?",
        answers: [
            "Menores costos iniciales y mantenimiento incluido",
            "Mayor control sobre los datos",
            "Personalización ilimitada"
        ],
        correct: 0
    },
    {
        question: "¿Qué modelo de instalación combina elementos de soluciones locales y basadas en la nube?",
        answers: ["Híbrido", "Cliente-Servidor", "Monolítico"],
        correct: 0
    },
    {
        question: "¿Qué tipo de tablas en un ERP-CRM contienen los datos fundamentales y estables?",
        answers: ["Tablas de movimientos", "Tablas de configuración", "Tablas maestras"],
        correct: 2
    },
    {
        question: "¿Qué es un almacén de datos?",
        answers: [
            "Plataforma para la automatización de marketing",
            "Sistema especializado en el almacenamiento y gestión de grandes volúmenes de información",
            "Herramienta para la creación de informes"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de instalación de ERP es ideal para entornos de desarrollo o aprendizaje?",
        answers: ["Instalación monopuesto", "Instalación cliente-servidor web", "Instalación cliente-servidor"],
        correct: 0
    },
    {
        question: "¿Cuál es la ventaja principal de la automatización de procesos en un ERP?",
        answers: [
            "Mayor complejidad en la gestión de datos",
            "Incremento del tamaño de la base de datos",
            "Reducción de errores humanos y aumento de la eficiencia operativa"
        ],
        correct: 2
    },
    {
        question: "¿Qué técnica de manejo de excepciones permite capturar y manejar errores de forma controlada?",
        answers: ["Try-Catch-Finally", "Validaciones Previas", "Personalización de Excepciones"],
        correct: 0
    },
    {
        question: "¿Cuál es el primer paso crucial en la implementación de un sistema ERP-CRM?",
        answers: [
            "Realizar un análisis inicial de los requerimientos empresariales",
            "Capacitar a los empleados",
            "Seleccionar el software adecuado"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es la principal ventaja de utilizar JSON en APIs para ERP-CRM?",
        answers: ["Es más rápido que XML", "Es más ligero y simple que XML", "Es más seguro que XML"],
        correct: 1
    },
    {
        question: "¿Qué herramienta permite a los desarrolladores insertar comentarios en el código Java que se transforman automáticamente en documentación HTML?",
        answers: ["Javadoc", "Doxygen", "Markdown"],
        correct: 0
    },
    {
        question: "¿Qué módulo de un sistema CRM facilita la gestión y ejecución del proceso de preventa?",
        answers: ["Módulo de Servicios", "Módulo de Marketing", "Módulo de Ventas"],
        correct: 2
    },
    {
        question: "¿Qué es la validación de datos y por qué es importante en un ERP?",
        answers: [
            "Verificar que los datos cumplen con ciertos criterios antes de ser utilizados o almacenados",
            "Aumentar la velocidad de las consultas",
            "Reducir el tamaño de la base de datos"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es una característica clave de los sistemas ERP en la nube?",
        answers: [
            "Complejidad en la configuración inicial",
            "Mayor control sobre el hardware",
            "Reducción de costos iniciales"
        ],
        correct: 2
    },
    {
        question: "¿Qué es la monitorización en tiempo real y cuál es su beneficio principal?",
        answers: [
            "Crear gráficos interactivos",
            "Almacenar datos en tiempo real",
            "Obtener una visión instantánea del desempeño de las aplicaciones para identificar y solucionar problemas proactivamente"
        ],
        correct: 2
    },
    {
        question: "¿Qué aspecto es crucial para la correcta implementación de un ERP en una empresa?",
        answers: [
            "Evaluación detallada del hardware necesario",
            "Evitar la formación del personal",
            "Uso exclusivo de software propietario"
        ],
        correct: 0
    },
    {
        question: "¿Qué aspecto es fundamental para asegurar la integración sin fisuras entre sistemas ERP y CRM?",
        answers: ["Compatibilidad técnica", "Facilidad de uso", "Coste de las licencias"],
        correct: 0
    },
    {
        question: "¿Qué tipo de servicio en la nube proporciona un entorno de desarrollo completo?",
        answers: [
            "IaaS (Infraestructura como Servicio)",
            "SaaS (Software como Servicio)",
            "PaaS (Plataforma como Servicio)"
        ],
        correct: 2
    },
    {
        question: "¿Qué es la planificación de recursos (MRP) en un sistema ERP?",
        answers: [
            "Generación de informes financieros",
            "Gestión de materiales y recursos necesarios para la producción",
            "Gestión de relaciones con clientes"
        ],
        correct: 1
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