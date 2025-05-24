const questions = [
    {
      question: "¿Cuál es la principal función de un servidor de aplicaciones en el modelo de programación en tres capas?",
      answers: ["Ejecutar la capa de presentación.", "Ejecutar la capa de reglas de negocio.", "Ejecutar la capa de datos."],
      correct: 1
    },
    {
      question: "¿Qué protocolo es comúnmente utilizado para la comunicación entre un cliente y un servidor web?",
      answers: ["SOAP", "HTTP", "JDBC"],
      correct: 1
    },
    {
      question: "¿Qué característica es esencial para un servidor de aplicaciones en términos de capacidad?",
      answers: ["La cantidad de memoria RAM disponible.", "La cantidad de solicitudes simultáneas que puede manejar.", "La velocidad del disco duro."],
      correct: 1
    },
    {
      question: "¿Qué lenguaje de programación en entorno servidor es conocido por su capacidad de funcionar tanto en sistemas operativos Linux como en Windows?",
      answers: ["ASP.NET", "PHP", "VBScript"],
      correct: 1
    },
    {
      question: "¿Qué tipo de ejecución de código requiere un módulo especializado en un servidor web?",
      answers: ["Ejecución de código remoto", "Ejecución de código embebido", "Ejecución de código compilado"],
      correct: 1
    },
    {
      question: "¿Qué herramienta de programación permite ejecutar un programa paso a paso para revisar su funcionamiento?",
      answers: ["Compilador", "Depurador", "Editor"],
      correct: 1
    },
    {
      question: "¿Cuál de las siguientes características es una ventaja de PHP como lenguaje de programación?",
      answers: ["Es un lenguaje compilado.", "Ofrece integración natural con bases de datos como MySQL.", "Su orientación a objetos es nativa."],
      correct: 1
    },
    {
      question: "¿Qué lenguaje de programación es utilizado por ASP para ejecutar código en el servidor?",
      answers: ["Python", "JavaScript", "Ruby"],
      correct: 1
    },
    {
      question: "¿Cuál es una de las desventajas de utilizar ASP en el desarrollo web?",
      answers: ["Es un producto abierto y multiplataforma.", "Los lenguajes que utiliza son compilados.", "Solo funciona en servidores Windows."],
      correct: 2
    },
    {
      question: "¿Qué característica distingue a JSP de otros lenguajes embebidos en HTML?",
      answers: ["Es un lenguaje interpretado.", "Se basa en Java y es compilado.", "No es compatible con dispositivos móviles."],
      correct: 1
    },
    {
      question: "¿Qué función tiene un contenedor de servlets en el entorno de desarrollo web?",
      answers: ["Ejecutar scripts de cliente.", "Gestionar la seguridad y concurrencia de servlets.", "Compilar código HTML."],
      correct: 1
    },
    {
      question: "¿Qué tipo de datos se considera básico en los lenguajes de programación web?",
      answers: ["Objeto", "Texto (string)", "Array"],
      correct: 1
    },
    {
      question: "¿Qué tipo de bucle se utiliza cuando se conoce de antemano la cantidad de veces que debe repetirse?",
      answers: ["Bucle condicional", "Bucle de cantidad fija de vueltas", "Bucle infinito"],
      correct: 1
    },
    {
      question: "¿Cuál es la forma correcta de escribir un comentario de varias líneas en PHP?",
      answers: ["// Esto es un comentario de varias líneas", "/* Esto es un comentario de varias líneas*/", "' Esto es un comentario de varias líneas"],
      correct: 1
    },
    {
      question: "¿Qué método de envío de datos se utiliza cuando se necesita enviar más de 2.024 caracteres desde el cliente al servidor?",
      answers: ["Método GET", "Método POST", "Método PUT"],
      correct: 1
    },
    {
      question: "¿Cómo se define una función en PHP que retorna un valor?",
      answers: [
        "function nombre_de_funcion(lista_de_parametros) { instrucciones_de_la_funcion; }",
        "void nombre_de_funcion(lista_de_parametros) { instrucciones_de_la_funcion; }",
        "function nombre_de_funcion(lista_de_parametros) { instrucciones_de_la_funcion; return valor_de_retorno; }"
      ],
      correct: 2
    },
    {
      question: "¿Cuál es la función principal de las sesiones en el desarrollo de aplicaciones web?",
      answers: ["Almacenar datos de usuario en el cliente.", "Mantener autenticados a los usuarios durante la navegación.", "Proteger la información del servidor de ataques externos."],
      correct: 1
    },
    {
      question: "¿Qué característica importante tienen las cookies en relación con su caducidad?",
      answers: ["Se eliminan automáticamente al cerrar el navegador.", "Pueden tener una fecha de caducidad específica.", "Son siempre permanentes a menos que el usuario las elimine manualmente."],
      correct: 1
    },
    {
      question: "¿Qué aspecto de la seguridad web se garantiza mediante el uso de roles y perfiles?",
      answers: ["La encriptación de datos sensibles.", "La gestión eficiente de permisos de usuario.", "La protección contra ataques de inyección SQL."],
      correct: 1
    },
    {
      question: "¿Cuál es una de las ventajas de utilizar un entorno IDE en el desarrollo de aplicaciones web?",
      answers: ["Permite la ejecución directa de código en el servidor.", "Facilita la programación con herramientas de autocompletado.", "Garantiza la seguridad de las aplicaciones web."],
      correct: 1
    },
    {
      question: "¿Cuál es la principal ventaja de utilizar el patrón de arquitectura MVC en aplicaciones web?",
      answers: ["Permite combinar HTML y PHP en una sola página.", "Facilita el mantenimiento del código al separar los procesos según su tipo.", "Elimina la necesidad de manejar errores en el código."],
      correct: 1
    },
    {
      question: "¿Qué función cumple la capa de presentación en la arquitectura de tres capas?",
      answers: ["Almacenar los datos de la aplicación.", "Interactuar con los usuarios.", "Ejecutar las reglas de negocio."],
      correct: 1
    },
    {
      question: "¿Cuál es el propósito de utilizar el método GET en aplicaciones web?",
      answers: ["Enviar grandes cantidades de datos al servidor.", "Persistir información entre páginas web mediante la URL.", "Proteger la información del usuario durante la transmisión."],
      correct: 1
    },
    {
      question: "¿Qué atributo de un input type=\"checkbox\" determina si el checkbox aparece marcado por defecto?",
      answers: ["value", "name", "checked"],
      correct: 2
    },
    {
      question: "¿Cuál es el primer paso para establecer una conexión a una base de datos MySQL utilizando PHP?",
      answers: ["Definir un origen de datos.", "Instalar un driver ODBC.", "Ejecutar una sentencia SQL."],
      correct: 0
    },
    {
      question: "¿Qué función en PHP se utiliza para cerrar una conexión a una base de datos MySQL?",
      answers: ["mysql_fetch_row", "mysql_close", "mysql_query"],
      correct: 1
    },
    {
      question: "¿Cuál es una de las características principales de las transacciones en bases de datos?",
      answers: ["Son opcionales en sistemas de gestión de bases de datos.", "Permiten realizar cambios parciales en los datos.", "Garantizan que las acciones se realicen de forma atómica."],
      correct: 2
    },
    {
      question: "¿Qué función en PHP permite copiar un archivo de un lugar a otro?",
      answers: ["rename", "unlink", "copy"],
      correct: 2
    },
    {
      question: "¿Cuál es una de las principales razones por las que SOAP ha recibido un increíble apoyo por parte de la industria?",
      answers: ["Está asociado con un lenguaje específico.", "Es el primer protocolo de su tipo aceptado por todas las grandes compañías de software.", "Está fuertemente asociado a un protocolo de transporte."],
      correct: 1
    },
    {
      question: "¿Qué elemento de WSDL define un conjunto abstracto de operaciones admitidas por uno o más puntos finales?",
      answers: ["Binding", "PortType", "Service"],
      correct: 1
    },
    {
      question: "¿Cuál es una de las ventajas de SOAP en términos de interoperabilidad?",
      answers: ["Está atado a una infraestructura de objeto distribuido específica.", "Permite la interoperabilidad entre múltiples entornos.", "Especifica una API fija para todos los lenguajes."],
      correct: 1
    },
    {
      question: "¿Qué protocolo se utiliza para describir los servicios de red como colecciones de puntos finales de comunicación en WSDL?",
      answers: ["HTTP", "XML", "WSDL"],
      correct: 0
    },
    {
      question: "¿Cuál es la principal ventaja de utilizar el modelo de tres capas en el desarrollo de aplicaciones web?",
      answers: ["Permite que todas las capas residan en un único ordenador.", "Facilita la escalabilidad y mantenimiento al separar la lógica de negocio de la presentación.", "Obliga a usar un único lenguaje de programación para todas las capas."],
      correct: 1
    },
    {
      question: "¿Qué característica distingue a PHP de otros lenguajes como ASP.NET o JSP en el desarrollo web?",
      answers: ["Es un lenguaje compilado.", "Es un lenguaje de código abierto y gratuito.", "Requiere un servidor específico para funcionar."],
      correct: 1
    },
    {
      question: "¿Cuál es la función principal de la capa de negocio en el modelo de tres capas?",
      answers: ["Presentar la interfaz gráfica al usuario.", "Almacenar y gestionar los datos de la aplicación.", "Procesar las peticiones del usuario y aplicar las reglas de negocio."],
      correct: 2
    },
    {
      question: "¿Qué tecnología permite la obtención remota de información mediante múltiples protocolos como HTTP y FTP?",
      answers: ["SimpleXML", "cURL", "JavaScript"],
      correct: 1
    },
    {
      question: "¿Cuál es el formato más comúnmente utilizado para el intercambio de datos en aplicaciones web híbridas?",
      answers: ["XML", "JSON", "CSV"],
      correct: 1
    },
    {
      question: "¿Qué protocolo de comunicación es empleado por las API Rest para la interacción entre aplicaciones?",
      answers: ["FTP", "HTTP", "SMTP"],
      correct: 1
    },
    {
      question: "¿Cuál es una de las principales características de un mashup en el desarrollo de aplicaciones web híbridas?",
      answers: ["Utiliza contenido estático de una única fuente.", "Integra contenido dinámico de múltiples fuentes.", "Requiere siempre un modelo de pago por uso."],
      correct: 1
    },
    {
      question: "¿Qué estándar permite la interoperabilidad entre diferentes sistemas de gestión de contenidos a través de Internet?",
      answers: ["SOAP", "CMIS", "HTML5"],
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