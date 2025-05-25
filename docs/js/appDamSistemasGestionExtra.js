const questions = [
    {
      question: "¿Cuál es una de las principales ventajas de los sistemas ERP en comparación con otros sistemas de información empresarial?",
      answers: [
        "Se centran exclusivamente en la gestión de relaciones con clientes.",
        "Son específicos para la gestión de inventarios.",
        "Ofrecen una visión integrada de múltiples áreas funcionales."
      ],
      correct: 2
    },
    {
      question: "¿Qué característica distingue a los sistemas CRM de los ERP?",
      answers: [
        "Los CRM se enfocan en la gestión interna de recursos.",
        "Los CRM se centran en la relación con el cliente.",
        "Los CRM no permiten la automatización de procesos."
      ],
      correct: 1
    },
    {
      question: "¿Cuál es un beneficio clave de implementar un sistema ERP en una empresa?",
      answers: [
        "Aumenta la duplicidad de datos.",
        "Mejora la eficiencia operativa y reduce costos.",
        "Limita la integración con otras aplicaciones."
      ],
      correct: 1
    },
    {
      question: "¿Qué tipo de SGBD es más adecuado para manejar grandes volúmenes de datos no estructurados?",
      answers: [
        "SGBD relacionales.",
        "SGBD NoSQL.",
        "SGBD orientados a objetos."
      ],
      correct: 1
    },
    {
      question: "¿Qué factor es crucial al seleccionar un SGBD para un sistema ERP-CRM?",
      answers: [
        "La capacidad de personalización del software.",
        "La compatibilidad con sistemas operativos existentes.",
        "La exclusividad de uso en plataformas móviles."
      ],
      correct: 1
    },
    {
      question: "¿Qué tipo de licencia permite modificar y redistribuir el código fuente de un software ERP-CRM?",
      answers: [
        "Licencia de software propietario.",
        "Licencia de software libre.",
        "Licencia de uso exclusivo."
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una de las funciones principales de un sistema gestor de bases de datos (SGBD)?",
      answers: [
        "Limitar el acceso a los datos a un solo usuario.",
        "Facilitar la creación y mantenimiento de estructuras de almacenamiento.",
        "Prohibir la integración con aplicaciones externas."
      ],
      correct: 1
    },
    {
      question: "¿Qué es esencial para asegurar una correcta implementación de un sistema ERP?",
      answers: [
        "Ignorar la formación del personal.",
        "Definir un presupuesto claro y realista.",
        "Evitar la integración con otros sistemas."
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una de las principales ventajas de la instalación en la nube para sistemas ERP-CRM?",
      answers: [
        "Mayor control sobre el hardware.",
        "Reducción de costos iniciales.",
        "Complejidad en la configuración."
      ],
      correct: 1
    },
    {
      question: "¿Qué tipo de módulos en un sistema ERP son necesarios para su funcionamiento básico?",
      answers: [
        "Módulos adicionales.",
        "Módulos confeccionados a medida.",
        "Módulos básicos o elementales."
      ],
      correct: 2
    },
    {
      question: "¿Qué método de integración permite la comunicación entre un ERP y un CRM mediante protocolos estándar?",
      answers: [
        "Conexión nativa.",
        "Conexión vía web services.",
        "Conexión imposible."
      ],
      correct: 1
    },
    {
      question: "¿Cuál es un paso crucial en el proceso de instalación de un sistema ERP?",
      answers: [
        "Ignorar la configuración inicial.",
        "Realizar pruebas exhaustivas.",
        "Evitar la participación de usuarios finales."
      ],
      correct: 1
    },
    {
      question: "¿Qué tipo de actualización es esencial para el correcto funcionamiento y seguridad de un sistema ERP?",
      answers: [
        "Actualización opcional.",
        "Actualización recomendada.",
        "Actualización importante."
      ],
      correct: 2
    },
    {
      question: "¿Qué herramienta es fundamental para la gestión de versiones en el desarrollo de aplicaciones multiplataforma?",
      answers: [
        "Excel.",
        "Git.",
        "PowerPoint."
      ],
      correct: 1
    },
    {
      question: "¿Qué aspecto es crucial para la seguridad de la información en la configuración de un CRM?",
      answers: [
        "Desactivar la encriptación de datos.",
        "Implementar acceso basado en roles.",
        "Permitir acceso sin autentificación."
      ],
      correct: 1
    },
    {
      question: "¿Qué es esencial para asegurar la correcta operatividad de un sistema ERP-CRM durante su instalación?",
      answers: [
        "Ignorar la compatibilidad del sistema operativo.",
        "Configurar las interfaces de usuario y módulos específicos.",
        "Evitar la integración con otros sistemas."
      ],
      correct: 1
    },
    {
      question: "¿Cuál es el propósito principal de la normalización en bases de datos?",
      answers: [
        "Aumentar la redundancia de datos.",
        "Minimizar la redundancia y mejorar la integridad de los datos.",
        "Facilitar la desnormalización de tablas."
      ],
      correct: 1
    },
    {
      question: "¿Qué técnica se utiliza para anticipar comportamientos futuros en el análisis predictivo?",
      answers: [
        "Análisis descriptivo.",
        "Minería de datos.",
        "Análisis de regresión."
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una ventaja clave de los dashboards interactivos en Business Intelligence?",
      answers: [
        "Permiten la edición de datos en tiempo real.",
        "Facilitan la visualización clara y dinámica de datos.",
        "Requieren conocimientos avanzados de programación."
      ],
      correct: 1
    },
    {
      question: "¿Qué herramienta es esencial para la integración de datos en un proceso ETL?",
      answers: [
        "Un sistema de gestión de inventarios.",
        "Un almacén de datos.",
        "Un sistema de gestión de relaciones con clientes."
      ],
      correct: 1
    },
    {
      question: "¿Qué característica distingue a un informe ad-hoc de otros tipos de informes?",
      answers: [
        "Se genera automáticamente a intervalos regulares.",
        "Se crea bajo demanda para necesidades específicas.",
        "Se utiliza exclusivamente para análisis financieros."
      ],
      correct: 1
    },
    {
      question: "¿Qué componente es fundamental en un sistema de Business Intelligence para el análisis de datos?",
      answers: [
        "Un sistema de gestión de inventarios.",
        "Un Data Warehouse.",
        "Un sistema de gestión de relaciones con clientes."
      ],
      correct: 1
    },
    {
      question: "¿Qué ventaja ofrece la automatización de procesos en un ERP?",
      answers: [
        "Aumenta la carga de trabajo manual.",
        "Mejora la experiencia del cliente mediante personalización.",
        "Reduce la necesidad de integración de sistemas."
      ],
      correct: 2
    },
    {
      question: "¿Qué función principal tiene la minería de datos en el contexto de Business Intelligence?",
      answers: [
        "Almacenar grandes volúmenes de datos.",
        "Descubrir patrones y tendencias en los datos.",
        "Eliminar datos duplicados de las bases de datos."
      ],
      correct: 1
    },
    {
      question: "¿Cuál es el primer paso en la implementación de un sistema ERP-CRM en una empresa?",
      answers: [
        "Realizar pruebas exhaustivas del sistema.",
        "Realizar un análisis inicial de los requerimientos empresariales.",
        "Configurar y personalizar el sistema."
      ],
      correct: 1
    },
    {
      question: "¿Qué aspecto es crucial durante la fase de configuración y personalización del sistema ERP-CRM?",
      answers: [
        "Seleccionar el software más adecuado.",
        "Asegurar la integración con otros sistemas empresariales existentes.",
        "Elaborar un plan de gestión del cambio."
      ],
      correct: 1
    },
    {
      question: "¿Qué herramienta se recomienda para automatizar flujos de datos y minimizar errores?",
      answers: [
        "Herramientas de Business Intelligence.",
        "APIs y conectores.",
        "Plataformas de marketing automatizado."
      ],
      correct: 1
    },
    {
      question: "¿Cuál es un beneficio clave de la automatización de la generación de informes en un ERP?",
      answers: [
        "Incremento en la intervención manual.",
        "Proporcionar datos en tiempo real.",
        "Aumento de errores humanos."
      ],
      correct: 1
    },
    {
      question: "¿Qué se debe considerar al diseñar un panel de control personalizado para aplicaciones multiplataforma?",
      answers: [
        "La personalización del contenido y características visuales.",
        "La capacidad de los usuarios para programar en SQL.",
        "La cantidad de datos que se pueden almacenar."
      ],
      correct: 0
    },
    {
      question: "¿Qué es esencial para asegurar una integración efectiva entre un ERP y un CRM?",
      answers: [
        "Realizar pruebas de usabilidad.",
        "Utilizar herramientas de integración específicas.",
        "Implementar un sistema de gestión de inventarios."
      ],
      correct: 1
    },
    {
      question: "¿Qué se debe hacer durante la fase de despliegue del sistema ERP-CRM?",
      answers: [
        "Configurar los módulos seleccionados.",
        "Monitorizar el desempeño del sistema y realizar ajustes necesarios.",
        "Realizar un análisis inicial de los requerimientos empresariales."
      ],
      correct: 1
    },
    {
      question: "¿Qué es fundamental para la identificación de sistemas de gestión existentes en una empresa?",
      answers: [
        "Documentar las actividades y tareas clave de cada departamento.",
        "Realizar pruebas exhaustivas del sistema.",
        "Configurar y personalizar el sistema."
      ],
      correct: 0
    },
    {
      question: "¿Cuál es la función principal de los tokens de autenticación en las APIs del ERP-CRM?",
      answers: [
        "Verificar la identidad de la aplicación.",
        "Proporcionar acceso a funciones avanzadas.",
        "Verificar la identidad del usuario."
      ],
      correct: 0
    },
    {
      question: "¿Qué técnica se utiliza para combinar filas de dos tablas cuando existe al menos una coincidencia en las columnas relacionadas?",
      answers: [
        "LEFT JOIN",
        "INNER JOIN",
        "FULL OUTER JOIN"
      ],
      correct: 1
    },
    {
      question: "¿Qué herramienta es esencial para detectar cambios no autorizados en archivos importantes del sistema?",
      answers: [
        "Selenium",
        "TripWire",
        "JUnit"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es el propósito principal de la fase de transformación en el proceso ETL?",
      answers: [
        "Modificar y adaptar los datos para su análisis.",
        "Recopilar datos desde múltiples fuentes.",
        "Almacenar datos en un almacén de datos."
      ],
      correct: 0
    },
    {
      question: "¿Qué método de autenticación es más adecuado para verificar la identidad de la aplicación que realiza una solicitud a la API?",
      answers: [
        "Tokens de autenticación",
        "Claves de API",
        "Certificados SSL"
      ],
      correct: 0
    },
    {
      question: "¿Qué tipo de prueba es crucial para evaluar cómo una aplicación maneja volúmenes significativos de datos y usuarios?",
      answers: [
        "Pruebas de funcionalidad",
        "Pruebas de carga y estrés",
        "Pruebas unitarias"
      ],
      correct: 1
    },
    {
      question: "¿Qué herramienta permite la creación de informes interactivos adecuados para dispositivos móviles?",
      answers: [
        "SQL Server Mobile Report",
        "Crystal Reports",
        "SQL Server Data Tools"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es el beneficio principal de utilizar herramientas de Business Intelligence (BI) en una empresa?",
      answers: [
        "Mejorar la comprensión y visualización de datos para la toma de decisiones.",
        "Reducir el tiempo de desarrollo de software.",
        "Aumentar la capacidad de almacenamiento de datos."
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