const questions = [
    {
      question: "¿Cuál es una de las principales ventajas de realizar una revisión del código fuente por parte de terceros?",
      answers: [
        "Reducir el tiempo de desarrollo",
        "Aumentar la complejidad del código",
        "Asegurar doblemente la seguridad de la aplicación"
      ],
      correct: 2
    },
    {
      question: "¿Qué técnica se utiliza para verificar la identidad de un usuario en un sistema seguro?",
      answers: [
        "Autenticación",
        "Minificación",
        "Encriptación"
      ],
      correct: 0
    },
    {
      question: "¿Qué se debe hacer para proteger los datos de autenticación almacenados?",
      answers: [
        "Encriptar los archivos de almacenamiento",
        "Utilizar contraseñas sencillas",
        "Compartir las contraseñas con todos los usuarios"
      ],
      correct: 0
    },
    {
      question: "¿Qué tipo de criptografía utiliza la misma clave para cifrar y descifrar mensajes?",
      answers: [
        "Criptografía simétrica",
        "Criptografía asimétrica",
        "Funciones hash"
      ],
      correct: 0
    },
    {
      question: "¿Qué componente de Java garantiza que el código no sea reemplazado por otros programas?",
      answers: [
        "Verificador de archivos de clases",
        "Gestor de seguridad",
        "Cargador de clases"
      ],
      correct: 2
    },
    {
      question: "¿Qué componente de Java controla los accesos en tiempo de ejecución?",
      answers: [
        "Gestor de seguridad",
        "Verificador de archivos de clases",
        "Cargador de clases"
      ],
      correct: 0
    },
    {
      question: "¿Qué se evalúa principalmente en las pruebas de seguridad de una aplicación?",
      answers: [
        "La compatibilidad con diferentes sistemas operativos",
        "La velocidad de ejecución del código",
        "La vulnerabilidad del sistema frente a accesos no autorizados"
      ],
      correct: 2
    },
    {
      question: "¿Qué función se utiliza en Windows para crear y cargar un proceso con una relación de dependencia padre-hijo?",
      answers: [
        "ExitProcess",
        "Fork",
        "CreateProcess"
      ],
      correct: 2
    },
    {
      question: "¿Cuál es el estado de un proceso que está preparado para ejecutarse pero aún no ha sido asignado a la CPU?",
      answers: [
        "Ejecución",
        "Listo",
        "Bloqueado"
      ],
      correct: 1
    },
    {
      question: "¿Qué comando en GNU/Linux se utiliza para mostrar todos los procesos en ejecución con detalles de los usuarios y recursos que emplean?",
      answers: [
        "top",
        "tasklist",
        "ps aux"
      ],
      correct: 2
    },
    {
      question: "¿Cuál es el propósito principal del protocolo TLS?",
      answers: [
        "Reducir el tamaño de los mensajes transmitidos",
        "Garantizar un intercambio de datos seguro y privado",
        "Mejorar la velocidad de transmisión de datos"
      ],
      correct: 1
    },
    {
      question: "¿Qué herramienta de Java se utiliza para firmar archivos con extensión .jar?",
      answers: [
        "Keytool",
        "Policytool",
        "Jarsigner"
      ],
      correct: 2
    },
    {
      question: "¿Qué técnica se emplea para asegurar que un mensaje no ha sido modificado durante su transmisión?",
      answers: [
        "Interceptación de datos",
        "Minificación de código",
        "Firma digital"
      ],
      correct: 2
    },
    {
      question: "¿Qué tipo de control de acceso se basa en roles de usuario?",
      answers: [
        "Control de acceso temporal",
        "Control de acceso basado en listas",
        "Control de acceso basado en roles (RBAC)"
      ],
      correct: 2
    },
    {
      question: "¿Qué protocolo proporciona canales seguros al protocolo HTTP mediante técnicas criptográficas?",
      answers: [
        "SMTP",
        "SSL",
        "FTP"
      ],
      correct: 1
    },
    {
      question: "¿Qué clase en Java se utiliza para representar las direcciones IP?",
      answers: [
        "URL",
        "InetAddress",
        "URLConnection"
      ],
      correct: 1
    },
    {
      question: "¿Qué puerto se utiliza comúnmente para la transferencia segura de datos con el protocolo HTTPS?",
      answers: [
        "443",
        "21",
        "80"
      ],
      correct: 0
    },
    {
      question: "¿Qué componente se ejecuta en el navegador web para realizar tareas específicas en el modelo cliente-servidor?",
      answers: [
        "Servlet",
        "Applet",
        "Script del cliente"
      ],
      correct: 2
    },
    {
      question: "¿Cuál es el método utilizado por los servlets para manejar las solicitudes HTTP POST?",
      answers: [
        "doPost()",
        "doGet()",
        "init()"
      ],
      correct: 0
    },
    {
      question: "¿Qué clase en Java se utiliza para gestionar cookies en aplicaciones web?",
      answers: [
        "javax.servlet.http.Cookie",
        "javax.servlet.http.HttpSession",
        "javax.servlet.http.HttpServletRequest"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es el protocolo que utiliza el puerto 1234 en el ejemplo de conexión de sockets en Java?",
      answers: [
        "HTTP",
        "Ninguno específico",
        "FTP"
      ],
      correct: 1
    },
    {
      question: "¿Qué herramienta gráfica se utiliza en Ubuntu para gestionar los procesos de ejecución?",
      answers: [
        "Monitor del sistema",
        "Gestor de procesos",
        "Administrador de tareas"
      ],
      correct: 0
    },
    {
      question: "¿Qué modelo de comunicación entre procesos en un sistema distribuido utiliza puntos extremos de comunicación?",
      answers: [
        "RMI",
        "Sockets",
        "RPC"
      ],
      correct: 1
    },
    {
      question: "¿Qué método se utiliza en Java para iniciar la ejecución de un hilo?",
      answers: [
        "start()",
        "run()",
        "execute()"
      ],
      correct: 0
    },
    {
      question: "¿Qué método en Java se utiliza para establecer la prioridad de un hilo?",
      answers: [
        "setPriority()",
        "setImportance()",
        "setLevel()"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es la función principal del protocolo TCP en la capa de transporte?",
      answers: [
        "Permitir la comunicación fiable entre aplicaciones como si estuvieran conectadas físicamente",
        "Proporcionar un servicio de entrega de datagramas sin verificar conexiones",
        "Gestionar la visualización de datos"
      ],
      correct: 0
    },
    {
      question: "¿Qué función permite cerrar correctamente una aplicación en Java?",
      answers: [
        "terminate()",
        "System.exit(0)",
        "closeApp()"
      ],
      correct: 1
    },
    {
      question: "¿Qué clase Java se utiliza para escuchar peticiones HTTP en un servidor web?",
      answers: [
        "HttpServer",
        "HttpServlet",
        "SocketListener"
      ],
      correct: 1
    },
    {
      question: "¿Qué componente web se ejecuta en el servidor y responde a peticiones del cliente?",
      answers: [
        "Applet",
        "Servlet",
        "Script"
      ],
      correct: 1
    },
    {
      question: "¿Qué propiedad permite redireccionar a otro recurso desde un servlet?",
      answers: [
        "response.sendRedirect()",
        "request.redirect()",
        "response.forward()"
      ],
      correct: 0
    },
    {
      question: "¿Qué herramienta de Java permite gestionar certificados digitales?",
      answers: [
        "Keytool",
        "Policytool",
        "Jarsigner"
      ],
      correct: 0
    },
    {
      question: "¿Qué formato utiliza Java para representar un archivo compilado?",
      answers: [
        ".java",
        ".class",
        ".jar"
      ],
      correct: 1
    },
    {
      question: "¿Qué archivo contiene la configuración de permisos en una aplicación Java?",
      answers: [
        "java.policy",
        "config.xml",
        "manifest.mf"
      ],
      correct: 0
    },
    {
      question: "¿Qué mecanismo usa Java para intercambiar datos entre cliente y servidor en tiempo real?",
      answers: [
        "AJAX",
        "WebSocket",
        "REST"
      ],
      correct: 1
    },
    {
      question: "¿Qué clase Java permite establecer una conexión TCP/IP como cliente?",
      answers: [
        "ServerSocket",
        "Socket",
        "URLConnection"
      ],
      correct: 1
    },
    {
      question: "¿Qué herramienta permite ver los procesos en ejecución en Linux en tiempo real?",
      answers: [
        "top",
        "htop",
        "ps aux"
      ],
      correct: 0
    },
    {
      question: "¿Qué comando de terminal se usa para cambiar permisos en Linux?",
      answers: [
        "chmod",
        "chperm",
        "perm"
      ],
      correct: 0
    },
    {
      question: "¿Qué tipo de ataque se previene utilizando tokens CSRF?",
      answers: [
        "Fuerza bruta",
        "Inyección SQL",
        "Solicitudes falsificadas en sitios cruzados"
      ],
      correct: 2
    },
    {
      question: "¿Qué herramienta analiza el tráfico de red y detecta amenazas en tiempo real?",
      answers: [
        "Netstat",
        "Snort",
        "Traceroute"
      ],
      correct: 1
    },
    {
      question: "¿Qué estándar define los niveles de severidad de los logs del sistema?",
      answers: [
        "Syslog",
        "ISO 9001",
        "SNMP"
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