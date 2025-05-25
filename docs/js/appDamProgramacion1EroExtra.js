const questions = [
    {
      question: "¿Cuál es una de las principales ventajas de realizar una revisión del código fuente por parte de terceros?",
      answers: ["Aumentar la complejidad del código", "Reducir el tiempo de desarrollo", "Asegurar doblemente la seguridad de la aplicación"],
      correct: 2
    },
    {
      question: "¿Qué técnica se utiliza para verificar la identidad de un usuario en un sistema seguro?",
      answers: ["Encriptación", "Minificación", "Autenticación"],
      correct: 2
    },
    {
      question: "¿Qué se debe hacer para proteger los datos de autenticación almacenados?",
      answers: ["Compartir las contraseñas con todos los usuarios", "Utilizar contraseñas sencillas", "Encriptar los archivos de almacenamiento"],
      correct: 2
    },
    {
      question: "¿Qué tipo de criptografía utiliza la misma clave para cifrar y descifrar mensajes?",
      answers: ["Criptografía asimétrica", "Funciones hash", "Criptografía simétrica"],
      correct: 2
    },
    {
      question: "¿Qué componente de Java garantiza que el código no sea reemplazado por otros programas?",
      answers: ["Verificador de archivos de clases", "Gestor de seguridad", "Cargador de clases"],
      correct: 2
    },
    {
      question: "¿Cuál es el propósito principal del protocolo TLS?",
      answers: ["Garantizar un intercambio de datos seguro y privado", "Mejorar la velocidad de transmisión de datos", "Reducir el tamaño de los mensajes transmitidos"],
      correct: 0
    },
    {
      question: "¿Qué función se utiliza en Windows para crear y cargar un proceso con una relación de dependencia padre-hijo?",
      answers: ["CreateProcess", "ExitProcess", "Fork"],
      correct: 0
    },
    {
      question: "¿Cuál es el estado de un proceso que está preparado para ejecutarse pero aún no ha sido asignado a la CPU?",
      answers: ["Bloqueado", "Listo", "Ejecución"],
      correct: 1
    },
    {
      question: "¿Qué comando en GNU/Linux se utiliza para mostrar todos los procesos en ejecución con detalles de los usuarios y recursos que emplean?",
      answers: ["ps aux", "top", "tasklist"],
      correct: 1
    },
    {
      question: "¿Qué tipo de programación permite que los procesos se ejecuten en diferentes procesadores de una máquina?",
      answers: ["Concurrente", "Distribuida", "Paralela"],
      correct: 2
    },
    {
      question: "¿Cuál es el nombre del proceso raíz en Windows que se genera durante el arranque del sistema?",
      answers: ["Explorer", "System", "Winlogon"],
      correct: 1
    },
    {
      question: "¿Qué herramienta de Java se utiliza para firmar archivos con extensión JAR?",
      answers: ["Keytool", "Policytool", "Jarsigner"],
      correct: 2
    },
    {
      question: "¿Qué técnica se emplea para asegurar que un mensaje no ha sido modificado durante su transmisión?",
      answers: ["Minificación de código", "Firma digital", "Interceptación de datos"],
      correct: 1
    },
    {
      question: "¿Qué tipo de control de acceso se basa en roles de usuario?",
      answers: ["Control de acceso basado en listas", "Control de acceso basado en roles (RBAC)", "Control de acceso temporal"],
      correct: 1
    },
    {
      question: "¿Qué protocolo proporciona canales seguros al protocolo HTTP mediante técnicas criptográficas?",
      answers: ["FTP", "SSL", "SMTP"],
      correct: 1
    },
    {
      question: "¿Qué componente de Java controla los accesos en tiempo de ejecución?",
      answers: ["Cargador de clases", "Verificador de archivos de clases", "Gestor de seguridad"],
      correct: 2
    },
    {
      question: "¿Qué se evalúa principalmente en las pruebas de seguridad de una aplicación?",
      answers: ["La velocidad de ejecución del código", "La vulnerabilidad del sistema frente a accesos no autorizados", "La compatibilidad con diferentes sistemas operativos"],
      correct: 1
    },
    {
      question: "¿Qué método en Java se utiliza para pausar un hilo durante un número específico de milisegundos?",
      answers: ["wait()", "sleep()", "pause()"],
      correct: 1
    },
    {
      question: "¿Qué herramienta se menciona para la documentación de aplicaciones Java?",
      answers: ["JavaHelp", "JavaDoc", "Javadoc"],
      correct: 0
    },
    {
      question: "¿Qué método se utiliza para establecer la prioridad de un hilo en Java?",
      answers: ["setPriority()", "setLevel()", "setImportance()"],
      correct: 0
    },
    {
      question: "¿Cuál es la función principal del protocolo TCP en la capa de transporte?",
      answers: ["Permitir la comunicación fiable entre aplicaciones como si estuvieran conectadas físicamente", "Proporcionar un servicio de entrega sin verificar conexiones", "Resolver direcciones IP en direcciones MAC"],
      correct: 0
    },
    {
      question: "¿Qué clase en Java se utiliza para representar las direcciones IP?",
      answers: ["URLConnection", "URL", "InetAddress"],
      correct: 2
    },
    {
      question: "¿Qué característica define a los sockets orientados a conexión?",
      answers: ["No garantizan el orden", "Usan UDP", "Garantizan orden y entrega de paquetes"],
      correct: 2
    },
    {
      question: "¿Qué herramienta gráfica se utiliza en Ubuntu para gestionar procesos?",
      answers: ["Administrador de tareas", "Monitor del sistema", "Monitor de actividad"],
      correct: 1
    },
    {
      question: "¿Qué modelo de comunicación entre procesos utiliza puntos extremos de comunicación?",
      answers: ["RCP", "Sockets", "Invocación remota de objetos"],
      correct: 2
    },
    {
      question: "¿Cuál es el estado inicial de un hilo en Java antes de que se le asignen recursos?",
      answers: ["Ejecutable", "Parado", "Nuevo"],
      correct: 1
    },
    {
      question: "¿Qué método se utiliza en Java para iniciar la ejecución de un hilo?",
      answers: ["run()", "start()", "execute()"],
      correct: 1
    },
    {
      question: "¿Cuál es una técnica para sincronizar hilos en programación multihilo?",
      answers: ["Mutex", "Semáforos", "Locks"],
      correct: 1
    },
    {
      question: "¿Qué librería se utiliza en Python para programación multihilo?",
      answers: ["pthread", "threading", "read"],
      correct: 1
    },
    {
      question: "¿Qué puerto se utiliza comúnmente para HTTPS?",
      answers: ["80", "25", "443"],
      correct: 2
    },
    {
      question: "¿Qué método de ServerSocket en Java acepta conexiones de clientes?",
      answers: ["getOutputStream()", "accept()", "close()"],
      correct: 1
    },
    {
      question: "¿Qué función tiene el protocolo ARP en la capa de Internet?",
      answers: ["Detectar errores de red", "Resolver direcciones IP en MAC", "Proporcionar datagramas"],
      correct: 1
    },
    {
      question: "¿Qué herramienta se menciona para monitorizar tiempos de respuesta en red?",
      answers: ["Netstat", "Wireshark", "Telnet"],
      correct: 1
    },
    {
      question: "¿Qué protocolo se usa para transferencia de archivos sin autenticación?",
      answers: ["FTP", "TFTP", "SMTP"],
      correct: 1
    },
    {
      question: "¿Qué protocolo permite la resolución de nombres de dominio en red?",
      answers: ["HTTP", "SSH", "DNS"],
      correct: 2
    },
    {
      question: "¿Qué protocolo permite el intercambio seguro de datos entre dispositivos?",
      answers: ["HTTPS", "SSH", "FTP"],
      correct: 1
    },
    {
      question: "¿Qué componente se ejecuta en el navegador para tareas específicas?",
      answers: ["Servlet", "Applet", "Socket"],
      correct: 1
    },
    {
      question: "¿Qué método usan los servlets para manejar HTTP POST?",
      answers: ["doGet()", "doPost()", "service()"],
      correct: 1
    },
    {
      question: "¿Qué clase en Java se usa para gestionar cookies?",
      answers: ["Javax.Servlet.HttpSession", "Javax.Servlet.HttpServletRequest", "Javax.Servlet.HttpServlet.Cookie"],
      correct: 2
    },
    {
      question: "¿Qué protocolo usa el puerto 1234 en un ejemplo de conexión de sockets en Java?",
      answers: ["TCP", "UDP", "Ninguno Específico"],
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