const questions = [
    {
        question: "¿Qué tipo de clave es proporcionada por los proveedores de servicios para controlar a los desarrolladores que emplearán sus mashups?",
        answers: ["API KEY", "Session ID", "OAuth Token"],
        correct: 0
    },
    {
        question: "¿Cuál es el principal formato de datos utilizado por las aplicaciones mashup para recibir registros?",
        answers: ["XML", "CSV", "JSON"],
        correct: 2
    },
    {
        question: "¿Qué método HTTP se recomienda utilizar para enviar datos sensibles como contraseñas?",
        answers: ["GET", "POST", "PUT"],
        correct: 1
    },
    {
        question: "¿Qué protocolo de comunicación es fundamental para el funcionamiento de Internet y la comunicación entre componentes?",
        answers: ["HTTP", "AJP", "TCP/IP"],
        correct: 2
    },
    {
        question: "¿Qué atributo del tag input type=\"text\" define la cantidad máxima de caracteres que se pueden introducir?",
        answers: ["size", "maxlength", "value"],
        correct: 1
    },
    {
        question: "¿Qué tipo de variable es $_SESSION en PHP?",
        answers: ["Global", "Local", "Superglobal"],
        correct: 2
    },
    {
        question: "¿Qué función en PHP se utiliza para crear un directorio?",
        answers: ["mkdir", "makedir", "createdir"],
        correct: 0
    },
    {
        question: "¿Qué tipo de servidor es responsable de ejecutar la capa de reglas de negocio en un modelo de programación en tres capas?",
        answers: ["Servidor de aplicaciones", "Servidor de base de datos", "Servidor web"],
        correct: 0
    },
    {
        question: "¿Qué función en PHP se utiliza para recuperar información de una sesión?",
        answers: ["Session(\"nombre_de_la_variable \");", "session.getAtribute(\"nombre_de_la_variable\");", "$_SESSION[\"nombre_de_la_variable\"];"],
        correct: 2
    },
    {
        question: "¿Qué función en PHP se utiliza para cerrar un archivo abierto previamente?",
        answers: ["fendfile", "fclose", "fterminate"],
        correct: 1
    },
    {
        question: "¿Qué lenguaje embebido en HTML es conocido por su integración natural con bases de datos MySQL, PostgreSQL o SQLite?",
        answers: ["PHP", "ASP", "JSP"],
        correct: 0
    },
    {
        question: "¿Qué tecnología permite la ejecución de scripts en el cliente para interactuar con el usuario?",
        answers: ["JavaScript", "ASP.NET", "PHP"],
        correct: 0
    },
    {
        question: "¿Qué función tiene la vista en el patrón MVC?",
        answers: ["Procesar peticiones", "Interactuar con la base de datos", "Mostrar la interfaz de usuario"],
        correct: 2
    },
    {
        question: "¿Qué función en PHP se utiliza para escribir una cadena dentro de un archivo?",
        answers: ["fstring", "fput", "fwrite"],
        correct: 2
    },
    {
        question: "¿Qué servidor de aplicaciones se puede utilizar para ejecutar Servlets?",
        answers: ["Apache Tomcat", "Nginx", "Microsoft IIS"],
        correct: 0
    },
    {
        question: "¿Qué tipo de dato compuesto se utiliza para almacenar una lista de elementos en PHP?",
        answers: ["object", "array", "class"],
        correct: 1
    },
    {
        question: "¿Qué función en PHP se utiliza para crear una cookie?",
        answers: ["setcookie()", "createcookie()", "newcookie()"],
        correct: 0
    },
    {
        question: "¿Qué modelo de programación se basa en la separación de funciones en capas de presentación, reglas de negocio y datos?",
        answers: ["Modelo en tres capas", "Modelo cliente/servidor", "Modelo de ejecución remota"],
        correct: 0
    },
    {
        question: "¿Qué tipo de contenido proporciona un servidor web sin modificarlo?",
        answers: ["Contenido estático", "Contenido embebido", "Contenido dinámico"],
        correct: 0
    },
    {
        question: "¿Qué palabra clave se utiliza en JavaScript para definir una variable?",
        answers: ["var", "let", "const"],
        correct: 0
    },
    {
        question: "¿Qué tipo de aplicaciones pueden incorporar funcionalidades específicas utilizando mashups?",
        answers: ["Aplicaciones de escritorio", "Juegos en línea", "Sitios web de empresas u organizaciones"],
        correct: 2
    },
    {
        question: "¿Qué clase debe extender un Servlet en Java?",
        answers: ["HttpServlet", "Servlet", "HttpRequest"],
        correct: 0
    },
    {
        question: "¿Qué método PHP devuelve true si una variable contiene un valor en un formulario?",
        answers: ["get", "post", "isset"],
        correct: 2
    },
    {
        question: "¿Qué protocolo de comunicación es comúnmente utilizado para el acceso a objetos en la comunicación entre servidores web y servidores de aplicaciones?",
        answers: ["ODBC", "SOAP", "HTTP"],
        correct: 1
    },
    {
        question: "¿Qué herramienta de programación permite traducir el código fuente de un programa a código ejecutable?",
        answers: ["Editor de texto", "Depurador de código (Debugger)", "Compilador"],
        correct: 2
    },
    {
        question: "¿Cuál es la extensión de los archivos que contienen comandos PHP?",
        answers: [".html", ".js", ".php"],
        correct: 2
    },
    {
        question: "¿Qué archivo de configuración se utiliza para definir directivas en PHP?",
        answers: ["app.config", "php.ini", "web.config"],
        correct: 1
    },
    {
        question: "¿Qué lenguaje de programación es interpretado y no requiere compilación previa?",
        answers: ["C++", "Java", "Perl"],
        correct: 2
    },
    {
        question: "¿Qué se debe hacer para garantizar la seguridad de datos en una comunicación web?",
        answers: ["Utilizar el protocolo HTTPS", "Desactivar las cookies", "Utilizar contraseñas simples"],
        correct: 0
    },
    {
        question: "¿Qué función de JavaScript se utiliza para enviar un formulario?",
        answers: ["post()", "send()", "submit()"],
        correct: 2
    },
    {
        question: "¿Qué protocolo se utiliza para garantizar una comunicación segura entre cliente y servidor?",
        answers: ["FTP", "HTTPS", "HTTP"],
        correct: 1
    },
    {
        question: "¿Qué función en PHP se utiliza para abrir un archivo?",
        answers: ["fopen", "file_open", "open_file"],
        correct: 0
    },
    {
        question: "¿Qué tipo de datos en PHP se utiliza para almacenar grupos de caracteres alfanuméricos?",
        answers: ["String", "Integer", "Float"],
        correct: 0
    },
    {
        question: "¿Qué lenguaje embebido en HTML es conocido por su facilidad de uso y aprendizaje?",
        answers: ["JSP", "PHP", "Servlet"],
        correct: 1
    },
    {
        question: "¿Qué tipo de bucle se utiliza cuando se conoce de antemano el número de iteraciones?",
        answers: ["for", "while", "do-while"],
        correct: 0
    },
    {
        question: "¿Qué herramienta de programación permite gestionar diferentes versiones de un programa?",
        answers: ["Depurador de código (Debugger)", "Sistema de control de versiones (CVS)", "Editor de texto"],
        correct: 1
    },
    {
        question: "¿Qué tipo de aplicaciones pueden consumir servicios directamente a través del protocolo HTTP?",
        answers: ["Aplicaciones de escritorio", "Aplicaciones web híbridas", "Aplicaciones móviles nativas"],
        correct: 1
    },
    {
        question: "¿Qué método PHP se utiliza para recibir datos enviados mediante el método GET?",
        answers: ["$_POST", "$_GET", "$_REQUEST"],
        correct: 1
    },
    {
        question: "¿Qué tipo de bucle se utiliza cuando la condición se evalúa al final de cada iteración?",
        answers: ["for", "while", "do-while"],
        correct: 2
    },
    {
        question: "¿Qué lenguaje se utiliza para describir un servicio web en WSDL?",
        answers: ["JSON", "HTML", "XML"],
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