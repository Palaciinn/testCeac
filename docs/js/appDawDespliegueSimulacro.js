const questions = [
    {
        question: "¿Qué característica de una arquitectura web permite que una aplicación se adapte a distintas arquitecturas físicas?",
        answers: ["Escalabilidad vertical", "Portabilidad", "Componentización"],
        correct: 1
    },
    {
        question: "¿Qué archivo de configuración de Tomcat define la configuración interna del motor?",
        answers: ["catalina.properties", "context.xml", "server.xml"],
        correct: 0
    },
    {
        question: "¿Qué herramienta genera automáticamente documentación de clases en formato HTML en el desarrollo de aplicaciones Java?",
        answers: ["Javadoc", "Doxygen", "Sphinx"],
        correct: 0
    },
    {
        question: "¿Qué es un servidor en preproducción?",
        answers: [
            "Un servidor con varias versiones de la aplicación en desarrollo",
            "Un servidor con la última versión estable de la aplicación",
            "Un servidor con una versión casi estable de la aplicación"
        ],
        correct: 2
    },
    {
        question: "¿Qué organización es responsable de la creación de dominios de primer nivel?",
        answers: [
            "W3C (World Wide Web Consortium)",
            "IANA (Internet Assigned Numbers Authority)",
            "ICANN (Internet Corporation for Assigned Names and Numbers)"
        ],
        correct: 1
    },
    {
        question: "¿Qué protocolo se utiliza para la comunicación entre un servidor web y un servidor de aplicaciones mediante el conector JK2?",
        answers: ["HTTP", "FTP", "AJP/1.3"],
        correct: 2
    },
    {
        question: "¿Qué tipo de archivos se transfieren utilizando el tipo ASCII en FTP?",
        answers: ["Archivos de texto", "Imágenes", "Vídeos"],
        correct: 0
    },
    {
        question: "¿Qué comando FTP se utiliza para descargar un archivo del servidor al cliente?",
        answers: ["LIST", "RETR", "STOR"],
        correct: 1
    },
    {
        question: "¿Qué se debe incluir en la documentación sobre el control de versiones?",
        answers: [
            "Información sobre el salario de los desarrolladores",
            "Información sobre qué partes del programa pueden ser modificadas en futuras actualizaciones",
            "Detalles sobre la ubicación física del servidor"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es el principal inconveniente de los sistemas de nombres planos?",
        answers: [
            "Un nombre solo puede identificar a un recurso en todo el sistema",
            "No permiten la integración de diferentes sistemas informáticos",
            "Consumen muchos recursos"
        ],
        correct: 0
    },
    {
        question: "¿Qué plataforma libre es conocida por ser multiplataforma y basada en Apache, MariaDB/MySQL, Perl y PHP?",
        answers: ["LAMP", "WAMP", "XAMPP"],
        correct: 2
    },
    {
        question: "¿Qué lenguaje se utiliza para definir la estructura y presentación de páginas web estáticas?",
        answers: ["JavaScript", "HTML y CSS", "PHP"],
        correct: 1
    },
    {
        question: "¿Qué es importante documentar para evitar incompatibilidades entre versiones de una aplicación?",
        answers: ["Solo los cambios mayores", "Todos los cambios realizados", "Solo los cambios menores"],
        correct: 1
    },
    {
        question: "¿Qué es MIME?",
        answers: [
            "Especificaciones para el intercambio de archivos a través de Internet",
            "Un lenguaje de programación",
            "Un protocolo de transferencia de archivos"
        ],
        correct: 0
    },
    {
        question: "¿Qué lenguaje derivado de XML se utiliza para describir la interfaz pública de los servicios web?",
        answers: ["UDDI", "SOAP", "WSDL"],
        correct: 2
    },
    {
        question: "¿Qué plataforma libre se basa en la combinación de Apache, MariaDB/MySQL, Perl y PHP?",
        answers: ["XAMPP", "LAMP", "WAMP"],
        correct: 0
    },
    {
        question: "¿Qué es un resolutor de nombres en el contexto de DNS?",
        answers: [
            "Software encargado de localizar un servidor en Internet o en una red local",
            "Un protocolo de red",
            "Un tipo de servidor DNS"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es el servidor de páginas web más utilizado en todo el mundo?",
        answers: ["IIS", "Tomcat", "Apache"],
        correct: 2
    },
    {
        question: "¿Qué es el protocolo HTTPS?",
        answers: [
            "Un tipo de archivo multimedia",
            "Una versión segura de HTTP que utiliza SSL o TLS",
            "Un lenguaje de programación"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la función principal de un servidor web?",
        answers: [
            "Recibir peticiones de páginas web y enviar respuestas",
            "Ejecutar programas de escritorio",
            "Almacenar datos de usuarios"
        ],
        correct: 0
    },
    {
        question: "¿Qué estándar creó la CCITT en 1988 sobre servicios de directorio?",
        answers: ["DNS", "LDAP", "X.500"],
        correct: 2
    },
    {
        question: "¿Qué es la operación unbind en LDAP?",
        answers: [
            "Cierra la conexión con el servidor LDAP",
            "Autentica al cliente con respecto al directorio",
            "Permite indicar al servidor LDAP que el cliente abandona la operación en curso"
        ],
        correct: 0
    },
    {
        question: "¿Qué componente de Tomcat permite a Tomcat funcionar como un servidor web?",
        answers: ["Clustering", "Coyote HTML", "Security Manager"],
        correct: 1
    },
    {
        question: "¿Qué es un cluster de servidores?",
        answers: [
            "Un servidor con múltiples discos duros",
            "Un único servidor con múltiples núcleos",
            "Varias máquinas que funcionan como una sola de forma transparente"
        ],
        correct: 2
    },
    {
        question: "¿Qué componente de Tomcat permite que varios servidores respondan solicitudes dirigidas a la misma URL?",
        answers: ["Coyote HTML", "Clustering", "Security Manager"],
        correct: 1
    },
    {
        question: "¿Qué herramienta se menciona como útil para realizar tareas complicadas en el servidor remoto en modo texto?",
        answers: ["Cliente FTP gráfico", "Interfaz de modo texto", "Navegador web"],
        correct: 1
    },
    {
        question: "¿Qué servidor web es necesario para realizar desarrollos en las plataformas de Microsoft.NET?",
        answers: ["IIS", "Tomcat", "Apache"],
        correct: 0
    },
    {
        question: "¿Qué archivo de configuración de Tomcat define qué parámetros son auditados y dónde se guardan los resultados?",
        answers: ["server.xml", "context.xml", "logging.properties"],
        correct: 2
    },
    {
        question: "¿Cuántos servidores raíz existen en Internet?",
        answers: ["Trece", "Diez", "Quince"],
        correct: 0
    },
    {
        question: "¿Qué comando FTP se utiliza para enviar la contraseña al servidor?",
        answers: ["PASS", "USER", "PORT"],
        correct: 0
    },
    {
        question: "¿Qué ventaja tienen las plataformas propietarias en comparación con las libres?",
        answers: [
            "Mayor flexibilidad en la personalización",
            "Mayor seguridad jurídica",
            "Comunicación fluida con la empresa proveedora"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es la función principal de un servicio de transferencia de archivos FTP?",
        answers: [
            "Proveer servicios de correo electrónico",
            "Gestionar bases de datos",
            "Enviar ficheros desde un ordenador cliente a un servidor y viceversa"
        ],
        correct: 2
    },
    {
        question: "¿Qué se debe hacer en la sección de prueba de programas y sistemas?",
        answers: [
            "Listar todos los desarrolladores del proyecto",
            "Describir el comportamiento del programa y las excepciones posibles",
            "Detallar el presupuesto del proyecto"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es una buena práctica obligatoria para todo desarrollador de aplicaciones web?",
        answers: [
            "Omitir la documentación por falta de presupuesto",
            "Preparar una documentación detallada sobre las especificaciones del programa",
            "Dejar la documentación para el final del proyecto"
        ],
        correct: 1
    },
    {
        question: "¿Qué puerto utiliza el servidor FTP para la sesión de control?",
        answers: ["Puerto 22", "Puerto 21", "Puerto 20"],
        correct: 1
    },
    {
        question: "¿Cuál es el archivo de configuración que describe cómo se combinan los componentes en Tomcat?",
        answers: ["context.xml", "server.xml", "web.xml"],
        correct: 1
    },
    {
        question: "¿Qué es la autenticación por análisis biométrico?",
        answers: [
            "Uso de huellas dactilares, reconocimiento de voz o escáner de retina",
            "Uso de claves firmadas por un tercero",
            "Uso de usuario y contraseña"
        ],
        correct: 0
    },
    {
        question: "¿Qué es el parámetro SOA en un registro DNS?",
        answers: [
            "Asocia un nombre a otro que está asociado a una IP",
            "Servidores de nombres que hay dentro del dominio",
            "Información para recibir datos del DNS principal del espacio de nombres administrado"
        ],
        correct: 2
    },
    {
        question: "¿Qué protocolo se menciona como más seguro que SSH para crear canales seguros?",
        answers: ["FTP", "TLS", "SMB"],
        correct: 1
    },
    {
        question: "¿Qué es una página web dinámica?",
        answers: [
            "Una página que no puede ser generada de manera dinámica",
            "Una página escrita solo en HTML",
            "Una página que incorpora algún tipo de programación"
        ],
        correct: 2
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