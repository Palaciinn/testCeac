const questions = [
    {
      question: "¿Cuál es uno de los principales objetivos de una arquitectura web en relación con los usuarios?",
      answers: ["Facilitar el uso ágil y dinámico de la web", "Reducir el número de servidores necesarios", "Minimizar el uso de recursos gráficos"],
      correct: 0
    },
    {
      question: "¿Qué característica es esencial para evitar que una página web se sature con un aumento de usuarios?",
      answers: ["Escalabilidad", "Portabilidad", "Componentización"],
      correct: 0
    },
    {
      question: "¿Qué modelo de arquitectura web se basa en el patrón Modelo-Vista-Controlador?",
      answers: ["Modelo de tres capas", "Modelo cliente/servidor", "Modelo de red distribuida"],
      correct: 0
    },
    {
      question: "¿Cuál es una ventaja destacada de las plataformas libres para el desarrollo web?",
      answers: ["Permiten redistribuir copias sin coste de licencia", "Proporcionan soporte técnico exclusivo", "Ofrecen actualizaciones automáticas de seguridad"],
      correct: 0
    },
    {
      question: "¿Qué servidor web es el más utilizado a nivel mundial y puede instalarse en casi todos los sistemas operativos?",
      answers: ["Apache", "Nginx", "IIS"],
      correct: 0
    },
    {
      question: "¿Qué tipo de archivo se utiliza para empaquetar aplicaciones Java EE para su despliegue en servidores web?",
      answers: [".war", ".exe", ".zip"],
      correct: 0
    },
    {
      question: "¿Qué función cumple un descriptor de despliegue en una aplicación web basada en Java?",
      answers: ["Describe cómo debe desplegarse la aplicación", "Define la estructura de la base de datos", "Genera automáticamente el código fuente"],
      correct: 0
    },
    {
      question: "¿Cuál es una de las principales características de un servidor web moderno?",
      answers: ["Capacidad de albergar diferentes sitios web", "Uso limitado a un solo protocolo", "Soporte exclusivo para páginas estáticas"],
      correct: 0
    },
    {
      question: "¿Qué indica un código de respuesta HTTP que comienza por 4?",
      answers: ["El recurso está mal solicitado o la URL no existe", "La transacción se ha realizado con éxito", "El recurso ha sido trasladado a una dirección diferente"],
      correct: 0
    },
    {
      question: "¿Cuál es una de las funciones que pueden proporcionar los módulos en un servidor web?",
      answers: ["Reescritura de direcciones web o URL", "Deshabilitar el uso de protocolos encriptados", "Limitar el acceso a un solo usuario"],
      correct: 0
    },
    {
      question: "¿Qué tipo de autenticación utiliza claves firmadas por un tercero?",
      answers: ["Autenticación por certificado", "Autenticación por usuario y contraseña", "Autenticación por análisis biométrico"],
      correct: 0
    },
    {
      question: "¿Qué protocolo combina HTTP con SSL o TLS para asegurar las transacciones en la web?",
      answers: ["HTTPS", "FTP", "SMTP"],
      correct: 0
    },
    {
      question: "¿Qué es necesario para que un servidor web sea considerado seguro por los navegadores?",
      answers: ["Tener un certificado firmado por una Autoridad de Certificación", "Utilizar exclusivamente claves privadas", "No permitir conexiones encriptadas"],
      correct: 0
    },
    {
      question: "¿Cuál es uno de los pasos principales para desplegar una aplicación web en un servidor?",
      answers: ["Instalar un servidor web en un ordenador", "Desactivar todos los módulos adicionales", "Utilizar una dirección IP dinámica"],
      correct: 0
    },
    {
      question: "¿Cuál es el componente central de Tomcat que administra las peticiones y el estado de las aplicaciones?",
      answers: ["Motor Catalina", "Contexto", "Host"],
      correct: 0
    },
    {
      question: "¿Qué protocolo se utiliza para garantizar la autenticación y privacidad de la información entre extremos sobre Internet?",
      answers: ["SSL", "HTTP", "FTP"],
      correct: 0
    },
    {
      question: "¿Cuál es la función principal de un contenedor de aplicaciones en un servidor de aplicaciones?",
      answers: ["Ensamblar y desplegar aplicaciones", "Proveer almacenamiento de datos", "Ejecutar aplicaciones directamente en el hardware"],
      correct: 0
    },
    {
      question: "¿Qué archivo de configuración en Tomcat describe cómo se combinan los componentes del servidor?",
      answers: ["server.xml", "web.xml", "catalina.policy"],
      correct: 0
    },
    {
      question: "¿Qué lenguaje derivado de XML se utiliza para describir la interfaz pública de los servicios web?",
      answers: ["WSDL", "SOAP", "UDDI"],
      correct: 0
    },
    {
      question: "¿Cuál es el propósito de las cookies en la administración de sesiones web?",
      answers: ["Enlazar páginas visitadas durante sesiones de navegación", "Almacenar permanentemente los datos del usuario", "Proteger la información del usuario mediante encriptación"],
      correct: 0
    },
    {
      question: "¿Qué componente de IIS transfiere las peticiones de aplicaciones al motor según los archivos de configuración?",
      answers: ["HTTP.SYS", "WAS", "WWW Service"],
      correct: 0
    },
    {
      question: "¿Cuál es la función principal de un servicio de transferencia de archivos FTP?",
      answers: ["Enviar ficheros entre un cliente y un servidor", "Controlar ordenadores de forma remota", "Proveer almacenamiento de respaldo"],
      correct: 0
    },
    {
      question: "¿Qué protocolo se recomienda utilizar para garantizar la seguridad en la transmisión de datos en redes remotas?",
      answers: ["SSH", "FTP", "SMB"],
      correct: 0
    },
    {
      question: "¿Qué tipo de acceso a un servicio de transferencia de archivos no requiere autenticación?",
      answers: ["Acceso anónimo", "Acceso con usuario", "Acceso de invitado"],
      correct: 0
    },
    {
      question: "¿Qué modo de conexión FTP es más fiable para evitar problemas con cortafuegos y routers?",
      answers: ["Modo pasivo", "Modo activo", "Modo estándar"],
      correct: 0
    },
    {
      question: "¿Qué tipo de archivo utiliza el formato binario en las transferencias FTP?",
      answers: ["Imágenes y vídeos", "Páginas web", "Archivos de texto"],
      correct: 0
    },
    {
      question: "¿Qué comando FTP se utiliza para copiar un archivo del cliente al servidor?",
      answers: ["put", "get", "mget"],
      correct: 0
    },
    {
      question: "¿Qué herramienta gráfica es comúnmente utilizada como cliente FTP?",
      answers: ["Navegador web", "Editor de texto", "Terminal de comandos"],
      correct: 0
    },
    {
      question: "¿Cuál es la principal ventaja de un sistema de nombres plano?",
      answers: ["Minimiza el consumo de recursos", "Facilita la gestión de grandes redes complejas", "Permite la integración de diferentes sistemas informáticos"],
      correct: 0
    },
    {
      question: "¿Qué característica define a un sistema de nombres jerárquico?",
      answers: ["Los nombres de dominio son únicos y siguen una estructura en forma de árbol", "Todos los recursos son iguales ante el sistema", "No permite la repetición de nombres en diferentes nodos"],
      correct: 0
    },
    {
      question: "¿Qué operación en LDAP permite autenticar al cliente con respecto al directorio?",
      answers: ["Bind", "Unbind", "Abandon"],
      correct: 0
    },
    {
      question: "¿Cuál es la función principal de un servidor raíz en el sistema DNS?",
      answers: ["Conocer los nombres y direcciones de los servidores de nivel superior", "Almacenar la base de datos de todos los dominios", "Resolver consultas recursivas de nombres de dominio"],
      correct: 0
    },
    {
      question: "¿Qué tipo de registro DNS asocia un nombre de dominio a los servidores de intercambio de correo?",
      answers: ["MX (Mail Exchange)", "PTR (Pointer)", "A (Address)"],
      correct: 0
    },
    {
      question: "¿Qué protocolo utiliza LDAP en lugar de los protocolos OSI para mejorar su disponibilidad?",
      answers: ["TCP/IP", "HTTP", "FTP"],
      correct: 0
    },
    {
      question: "¿Qué elemento es crucial para mantener la seguridad en el acceso a un servicio de directorios?",
      answers: ["La autenticación de usuarios", "La replicación de datos", "La distribución de los datos"],
      correct: 0
    },
    {
      question: "¿Cuál es el propósito principal de las especificaciones funcionales en la documentación de una aplicación web?",
      answers: ["Especificar las entradas y salidas de datos, así como el mantenimiento", "Describir el diseño gráfico de la aplicación", "Enumerar los lenguajes de programación utilizados"],
      correct: 0
    },
    {
      question: "¿Qué herramienta se menciona como útil para generar automáticamente documentación en formato HTML para aplicaciones Java?",
      answers: ["Javadoc", "OpenOffice Draw", "ArgoUML"],
      correct: 0
    },
    {
      question: "¿Qué tipo de repositorio bloquea los documentos que están siendo modificados para evitar conflictos?",
      answers: ["Exclusivos", "Colaborativos", "Públicos"],
      correct: 0
    },
    {
      question: "¿Qué característica importante comparten las plataformas colaborativas de control de versiones?",
      answers: ["Ofrecen control de conflicto en las modificaciones realizadas por diferentes desarrolladores", "Permiten la edición de código sin conexión a internet", "No requieren autenticación de usuario"],
      correct: 0
    },
    {
      question: "¿Qué lenguaje de marcas se utiliza comúnmente para elaborar documentación debido a su capacidad de etiquetar y otorgar características al texto?",
      answers: ["XML", "JSON", "SQL"],
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