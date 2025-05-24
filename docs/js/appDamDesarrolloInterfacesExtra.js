const questions = [
    {
      question: "¿Cuál es una de las principales ventajas de utilizar JavaFX para el desarrollo de interfaces gráficas?",
      answers: [
        "Permite la creación de interfaces de usuario del lado del servidor",
        "Requiere menos recursos que Java Swing",
        "Ofrece una amplia gama de controles de interfaz de usuario y soporte para gráficos 2D y 3D"
      ],
      correct: 2
    },
    {
      question: "¿Qué característica destaca en el uso de FXML en JavaFX?",
      answers: [
        "Facilita la separación entre el diseño y la lógica de la aplicación",
        "Permite la integración directa con bases de datos",
        "Ofrece soporte nativo para aplicaciones móviles"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es una de las funciones principales de los eventos de carga (Load Events) en aplicaciones multiplataforma?",
      answers: [
        "Gestionar la comunicación entre diferentes aplicaciones",
        "Asegurar que todos los recursos estén disponibles antes de que el usuario interactúe con ellos",
        "Permitir la ejecución de scripts antes de que el HTML inicial se haya cargado"
      ],
      correct: 1
    },
    {
      question: "¿Qué ventaja ofrece el uso de Android Data Binding en el desarrollo de aplicaciones móviles?",
      answers: [
        "Facilita la vinculación directa de vistas de la interfaz de usuario con modelos de datos",
        "Mejora la compatibilidad con versiones anteriores de Android",
        "Permite la ejecución de código nativo en dispositivos iOS"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es una de las características clave de los JavaBeans en el desarrollo de aplicaciones Java?",
      answers: [
        "Proporcionan una manera estructurada de encapsular datos y seguir convenciones específicas",
        "Ofrecen soporte nativo para la creación de interfaces gráficas",
        "Permiten la ejecución de código en múltiples hilos sin sincronización"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es una de las características fundamentales de XForms en la definición de interfaces de usuario?",
      answers: [
        "Separa el propósito del formulario de su presentación",
        "Permite la integración directa con bases de datos",
        "Ofrece compatibilidad exclusiva con dispositivos móviles"
      ],
      correct: 0
    },
    {
      question: "¿Qué tipo de aplicaciones se pueden crear utilizando el lenguaje XUL?",
      answers: [
        "Aplicaciones independientes del navegador web",
        "Aplicaciones de inteligencia artificial",
        "Aplicaciones de realidad aumentada"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es una ventaja de utilizar SVG en aplicaciones multiplataforma?",
      answers: [
        "Mantiene la resolución al cambiar las dimensiones del dispositivo",
        "Permite la creación de gráficos tridimensionales",
        "Ofrece compatibilidad con todos los lenguajes de programación"
      ],
      correct: 0
    },
    {
      question: "¿Qué herramienta de creación de interfaces es de código propietario y está orientada a aplicaciones web?",
      answers: [
        "Gambas",
        "Adobe Dreamweaver",
        "Glade"
      ],
      correct: 1
    },
    {
      question: "¿Qué tipo de parser XML proporciona una visión abstracta de la estructura padre-hijo de árbol?",
      answers: [
        "Parser JSON",
        "Parser DOM",
        "Parser SAX"
      ],
      correct: 1
    },
    {
      question: "¿Qué herramienta se utiliza para realizar pruebas de carga y rendimiento en aplicaciones web?",
      answers: [
        "Selenium",
        "OWASP ZAP",
        "JMeter"
      ],
      correct: 2
    },
    {
      question: "¿Cuál es una de las ventajas de usar JavaBeans en NetBeans para el desarrollo de aplicaciones Java?",
      answers: [
        "Facilita la creación de componentes personalizados reutilizables",
        "Permite la creación de aplicaciones web sin necesidad de un servidor",
        "Ofrece soporte nativo para el lenguaje Python"
      ],
      correct: 0
    },
    {
      question: "¿Qué técnica de pruebas se centra en verificar la interacción entre diferentes módulos del sistema?",
      answers: [
        "Pruebas de Integración",
        "Pruebas Funcionales",
        "Pruebas Unitarias"
      ],
      correct: 0
    },
    {
      question: "¿Qué herramienta es conocida por su capacidad para detectar vulnerabilidades en aplicaciones web mediante pruebas de seguridad?",
      answers: [
        "OWASP ZAP",
        "JUnit",
        "UsabilityHub"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es una característica destacada de Gradle en el desarrollo de aplicaciones Android?",
      answers: [
        "Facilita la gestión de dependencias y configuraciones de compilación",
        "Ofrece un entorno de desarrollo visual para diseñar interfaces de usuario",
        "Permite la integración con bases de datos NoSQL"
      ],
      correct: 0
    },
    {
      question: "Según la norma ISO/IEC 25000, ¿cuál es una de las características principales que define la usabilidad de un software?",
      answers: [
        "La capacidad de ser aprendido y usado por el usuario",
        "La capacidad de proteger la información de accesos no autorizados",
        "La capacidad de ser modificado fácilmente"
      ],
      correct: 0
    },
    {
      question: "¿Qué principio básico de la norma ISO 9241 debe cumplir un software para facilitar la interacción de nuevos usuarios?",
      answers: [
        "Robustez",
        "Flexibilidad",
        "Facilidad de aprendizaje"
      ],
      correct: 2
    },
    {
      question: "En el contexto de las pruebas de usabilidad, ¿qué técnica se refiere a la evaluación realizada por equipos especialistas en usabilidad?",
      answers: [
        "User testing",
        "Pruebas de campo",
        "Usability inspection"
      ],
      correct: 2
    },
    {
      question: "¿Cuál es una de las pautas de diseño para mejorar la presentación de datos mediante gráficos en una interfaz?",
      answers: [
        "Incluir gráficos interactivos en tiempo real para un análisis ilimitado",
        "Utilizar gráficos geolocalizados para todos los tipos de datos",
        "Usar solo gráficos de barras para simplificar la visualización"
      ],
      correct: 2
    },
    {
      question: "¿Qué aspecto es fundamental en el diseño de iconos para asegurar su comprensión en una interfaz de usuario?",
      answers: [
        "Emplear iconos con múltiples colores y detalles complejos",
        "Asociar propiedades simples y metáforas claras al icono",
        "Utilizar iconos tridimensionales con sombras"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una de las principales ventajas de utilizar JasperReports en el desarrollo de aplicaciones Java?",
      answers: [
        "Facilita la integración de informes detallados en aplicaciones Java",
        "Permite la creación de informes solo en formato PDF",
        "Solo es compatible con Android Studio"
      ],
      correct: 0
    },
    {
      question: "¿Qué herramienta se utiliza junto con JasperReports para diseñar informes de manera visual?",
      answers: [
        "iReport",
        "Eclipse",
        "NetBeans"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es una característica destacada de BIRT en el contexto de generación de informes?",
      answers: [
        "Ofrece capacidades avanzadas para informes incrustados y autónomos",
        "No es compatible con bases de datos relacionales",
        "Solo permite la creación de informes estáticos"
      ],
      correct: 0
    },
    {
      question: "¿Qué función de resumen en JasperReports se utiliza para calcular el total de un conjunto de valores?",
      answers: [
        "SUM",
        "AVERAGE",
        "COUNT"
      ],
      correct: 0
    },
    {
      question: "¿Qué método de JasperReports se utiliza para llenar un informe con datos?",
      answers: [
        "exportReportToPdfFile",
        "compileReport",
        "fillReport"
      ],
      correct: 2
    },
    {
      question: "¿Cuál es una de las principales ventajas de utilizar HTML para la documentación de ayuda en aplicaciones multiplataforma?",
      answers: [
        "Facilita la integración de hipervínculos para una navegación interactiva",
        "Mantiene el formato original en cualquier dispositivo",
        "Permite la creación de documentos estáticos que no requieren actualizaciones"
      ],
      correct: 0
    },
    {
      question: "¿Qué herramienta es esencial para generar documentación de código en varios lenguajes, incluyendo C++ y Python?",
      answers: [
        "DocFX",
        "Doxygen",
        "Javadoc"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una característica destacada de DocFX cuando se utiliza con Visual Studio?",
      answers: [
        "Convierte comentarios XML en documentación HTML y PDF",
        "Genera documentación solo en formato PDF",
        "Solo es compatible con proyectos Java"
      ],
      correct: 0
    },
    {
      question: "¿Qué función ofrece NetBeans para facilitar la documentación de clases Java en un proyecto?",
      answers: [
        "Creación de documentación en formato Markdown",
        "Generación automática de diagramas de flujo",
        "Análisis y generación de documentación Javadoc"
      ],
      correct: 2
    },
    {
      question: "¿Qué ventaja ofrece AsciiDoc sobre Markdown en la creación de documentación técnica?",
      answers: [
        "Permite una mayor personalización y capacidad de extensión",
        "Es más simple y fácil de aprender para principiantes",
        "Solo genera documentación en formato HTML"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es una de las principales ventajas de utilizar paquetes autoinstalables en el desarrollo de aplicaciones multiplataforma?",
      answers: [
        "Garantizan que todos los usuarios tengan la misma versión del software",
        "Permiten la instalación manual de cada componente",
        "Requieren configuraciones complejas para su implementación"
      ],
      correct: 0
    },
    {
      question: "¿Qué herramienta es conocida por su capacidad para crear instaladores altamente personalizados mediante scripts?",
      answers: [
        "Advanced Installer",
        "NSIS (Nullsoft Scriptable Install System)",
        "InstallShield"
      ],
      correct: 1
    },
    {
      question: "¿Qué característica de Visual Studio facilita la gestión de dependencias en proyectos .NET?",
      answers: [
        "El uso de paquetes NuGet",
        "La compatibilidad con Java",
        "La integración con GitHub"
      ],
      correct: 0
    },
    {
      question: "¿Qué método de distribución permite enviar aplicaciones directamente a dispositivos específicos en iOS?",
      answers: [
        "Distribución Ad-hoc",
        "Publicación en la App Store",
        "Envío por correo electrónico"
      ],
      correct: 0
    },
    {
      question: "¿Qué herramienta de Java se usa para firmar archivos JAR?",
      answers: [
        "Keytool",
        "jarsigner",
        "Eclipse"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una de las principales ventajas de utilizar JUnit en el desarrollo de aplicaciones Java?",
      answers: [
        "Facilita la detección temprana de errores mediante la integración en pipelines de CI",
        "Ofrece una interfaz gráfica para la creación de pruebas",
        "Permite la ejecución de pruebas manuales"
      ],
      correct: 0
    },
    {
      question: "¿Qué característica destaca a Selenium en la automatización de pruebas de aplicaciones web?",
      answers: [
        "Su compatibilidad con múltiples navegadores y sistemas operativos",
        "Su integración con herramientas de gestión de proyectos",
        "Su capacidad para realizar pruebas de carga"
      ],
      correct: 0
    },
    {
      question: "¿Qué tipo de pruebas se enfoca en verificar la interacción entre los distintos componentes de un sistema?",
      answers: [
        "Pruebas de integración",
        "Pruebas unitarias",
        "Pruebas de usabilidad"
      ],
      correct: 0
    },
    {
      question: "¿Qué herramienta es esencial para realizar pruebas de seguridad en aplicaciones web?",
      answers: [
        "OWASP ZAP",
        "Selenium",
        "JUnit"
      ],
      correct: 0
    },
    {
      question: "¿Cuál es una ventaja de utilizar Espresso para pruebas de aplicaciones Android?",
      answers: [
        "Sincroniza automáticamente con la interfaz de usuario",
        "Ofrece una interfaz gráfica para la creación de pruebas",
        "Permite realizar pruebas de carga"
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