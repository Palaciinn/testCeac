const questions = [
    {
        question: "¿Cuál es la principal característica del protocolo HTTP?",
        answers: [
            "Es un protocolo de transferencia de archivos",
            "Emplea una serie de métodos para la gestión de los mensajes y códigos para representar los estados de conexión",
            "Utiliza cifrado SSL/TLS"
        ],
        correct: 1
    },
    {
        question: "¿Qué protocolo se utiliza para la resolución de nombres en una red de servidores distribuidos?",
        answers: ["FTP", "DNS", "HTTP"],
        correct: 1
    },
    {
        question: "¿Qué técnica de sincronización de hilos controla el número de hilos que acceden simultáneamente a un recurso?",
        answers: ["Mutex", "Semáforos", "Monitores"],
        correct: 1
    },
    {
        question: "¿Qué clase de Java se utiliza para implementar applets?",
        answers: ["javax.servlet.Servlet", "java.awt.Component", "java.applet.Applet"],
        correct: 2
    },
    {
        question: "¿Qué clase en Java se utiliza para implementar el extremo de la conexión del lado del servidor?",
        answers: ["URLConnection", "ServerSocket", "Socket"],
        correct: 1
    },
    {
        question: "¿Qué herramienta gráfica se menciona para monitorizar tiempos de respuesta en las conexiones?",
        answers: ["Wireshark", "Telnet", "Netstat"],
        correct: 0
    },
    {
        question: "¿Qué método de la clase FTPClient se utiliza para enviar un archivo a un servidor FTP?",
        answers: [
            "retrieveFile(String, OutputStream)",
            "changeWorkingDirectory(String)",
            "storeFile(String, InputStream)"
        ],
        correct: 2
    },
    {
        question: "¿Qué técnica se utiliza para proteger los archivos donde se almacenan los datos de autenticación?",
        answers: [
            "Almacenamiento de contraseñas en texto plano",
            "Encriptación de los archivos",
            "Uso de contraseñas sencillas"
        ],
        correct: 1
    },
    {
        question: "¿Qué comando en GNU/Linux muestra todos los procesos del sistema?",
        answers: ["top –o %CPU", "ps aux", "tasklist /v"],
        correct: 1
    },
    {
        question: "¿Qué protocolo se utiliza para el intercambio de datos sobre un canal seguro entre dos dispositivos?",
        answers: ["SSH", "HTTP", "FTP"],
        correct: 0
    },
    {
        question: "¿Qué clase de Java se utiliza para recibir la información enviada desde el cliente en un servlet?",
        answers: [
            "javax.servlet.http.HttpServletRequest",
            "javax.servlet.http.HttpServletResponse",
            "javax.servlet.http.HttpSession"
        ],
        correct: 0
    },
    {
        question: "¿Qué método en Java se utiliza para establecer la prioridad de un hilo?",
        answers: ["setPriority()", "setLevel()", "setImportance()"],
        correct: 0
    },
    {
        question: "¿Qué método en Java se utiliza para paralizar temporalmente un hilo para que se ejecuten otros?",
        answers: ["wait()", "yield()", "pause()"],
        correct: 1
    },
    {
        question: "¿Qué herramienta de Java crea una base de datos protegida para almacenar pares de claves?",
        answers: ["Policytool", "Jarsigner", "Keytool"],
        correct: 2
    },
    {
        question: "¿Qué característica NO es propia de los sockets?",
        answers: [
            "Envío de mensajes sin límites de tamaño",
            "Fiabilidad de la transmisión",
            "Conservación del orden"
        ],
        correct: 0
    },
    {
        question: "¿Qué protocolo de la capa de aplicación se utiliza para la conexión segura a un servidor?",
        answers: ["SSH", "Telnet", "FTP"],
        correct: 0
    },
    {
        question: "¿Qué técnica se utiliza para proteger los datos de autenticación en caso de acceso no autorizado?",
        answers: [
            "Almacenamiento de contraseñas en texto plano",
            "Encriptación de los archivos de autenticación",
            "Uso de contraseñas sencillas"
        ],
        correct: 1
    },
    {
        question: "¿Qué clase en Java representa las direcciones IP y proporciona métodos para su gestión?",
        answers: ["URLConnection", "URL", "InetAddress"],
        correct: 2
    },
    {
        question: "¿Qué tipo de comunicación entre procesos utiliza servicios Send y Receive?",
        answers: ["Paso de mensajes", "Memoria compartida", "Sockets"],
        correct: 0
    },
    {
        question: "¿Qué método de la clase URLConnection en Java permite escribir datos en la conexión?",
        answers: ["getOutputStream()", "setDoInput(boolean b)", "getInputStream()"],
        correct: 0
    },
    {
        question: "¿Qué técnica de programación permite la ejecución de procesos en diferentes procesadores?",
        answers: ["Programación paralela", "Programación secuencial", "Programación concurrente"],
        correct: 0
    },
    {
        question: "¿Qué función en Windows se utiliza para crear un nuevo proceso?",
        answers: ["Fork", "CreateProcess", "ExitProcess"],
        correct: 1
    },
    {
        question: "¿Qué modelo de comunicación entre procesos permite la llamada remota a métodos de objetos?",
        answers: ["RCP", "Sockets", "Invocación remota de objetos"],
        correct: 2
    },
    {
        question: "¿Qué técnica de sincronización de hilos utiliza el método synchronized(objeto) en Java?",
        answers: ["Monitores", "Semáforos", "Mutex"],
        correct: 0
    },
    {
        question: "¿Qué clase en Java se utiliza para implementar la interfaz Runnable?",
        answers: ["Hilo", "Process", "Thread"],
        correct: 2
    },
    {
        question: "¿Qué método en Java se utiliza para comprobar si un hilo está vivo?",
        answers: ["isAlive()", "isExecuting()", "isRunning()"],
        correct: 0
    },
    {
        question: "¿Qué método de la clase javax.servlet.http.HttpServletRequest se utiliza para obtener la URL de la solicitud?",
        answers: ["getRequestURL()", "getContextPath()", "getRequestURI()"],
        correct: 0
    },
    {
        question: "¿Qué método de la clase javax.servlet.http.Cookie indica al navegador que la cookie solo debe ser enviada utilizando HTTPS?",
        answers: ["setSecure(boolean)", "setVersion(int)", "setValue(String)"],
        correct: 0
    },
    {
        question: "¿Qué clase de Java se utiliza para crear un socket en el lado del cliente?",
        answers: ["Socket", "ServerSocket", "DataOutputStream"],
        correct: 0
    },
    {
        question: "¿Qué estado de un proceso indica que está esperando un evento externo para continuar?",
        answers: ["Bloqueado", "Listo", "Ejecución"],
        correct: 0
    },
    {
        question: "¿Qué clase de Java se utiliza para organizar los datos enviados al cliente en un servlet?",
        answers: [
            "javax.servlet.http.HttpServletRequest",
            "javax.servlet.http.HttpServletResponse",
            "javax.servlet.http.HttpSession"
        ],
        correct: 1
    },
    {
        question: "¿Qué método en Java se utiliza para interrumpir la ejecución de un hilo?",
        answers: ["stop()", "interrupt()", "pause()"],
        correct: 1
    },
    {
        question: "¿Qué método de la clase InetAddress en Java devuelve una cadena con el host de la IP?",
        answers: ["getLocalHost()", "getAllByName()", "getByName(String host)"],
        correct: 2
    },
    {
        question: "¿Qué comando en Windows se utiliza para finalizar un programa completo?",
        answers: ["killall", "tasklist /svc", "taskkill /f /im"],
        correct: 2
    },
    {
        question: "¿Qué política de planificación de procesos se basa en el método FIFO?",
        answers: [
            "Primero en entrar, primero en salir",
            "Primero se ejecutan los más cortos",
            "Turno rotatorio"
        ],
        correct: 0
    },
    {
        question: "¿Qué herramienta se utiliza en Java para crear ventanas de ayuda con menús laterales de índice de contenidos?",
        answers: ["JavaHelp", "JavaAssist", "JavaDoc"],
        correct: 0
    },
    {
        question: "¿Qué protocolo de la capa de internet se encarga del enrutamiento y la fragmentación de paquetes?",
        answers: ["ARP", "ICMP", "IP"],
        correct: 2
    },
    {
        question: "¿Qué clase de Java se utiliza para almacenar información de la sesión del usuario en una aplicación cliente-servidor?",
        answers: [
            "javax.servlet.http.HttpServletRequest",
            "javax.servlet.http.HttpServletResponse",
            "javax.servlet.http.HttpSession"
        ],
        correct: 2
    },
    {
        question: "¿Qué método de la clase javax.servlet.http.HttpServletRequest se utiliza para obtener un parámetro de la solicitud?",
        answers: ["getParameter(String)", "getAttribute(String)", "getSession()"],
        correct: 0
    },
    {
        question: "¿Qué librería de Java se utiliza para implementar protocolos del lado del cliente para FTP?",
        answers: ["commons-net-x.y.jar", "javax.servlet", "java.net"],
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