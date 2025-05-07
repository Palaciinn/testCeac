const questions = [
    {
        question: "¿Qué herramienta de desarrollo permite la distribución de aplicaciones mediante paquetes NuGet?",
        answers: ["Visual Studio", "NetBeans", "Eclipse"],
        correct: 0
    },
    {
        question: "¿Qué herramienta se utiliza para la automatización de pruebas de aplicaciones Java en NetBeans y Eclipse?",
        answers: ["Appium", "Selenium", "JUnit"],
        correct: 2
    },
    {
        question: "¿Qué funcionalidad de DocFX permite personalizar completamente la apariencia y estructura del contenido generado?",
        answers: [
            "Configuración a través de archivos JSON",
            "Uso de etiquetas como @param, @return o @exception",
            "Integración con Visual Studio"
        ],
        correct: 0
    },
    {
        question: "¿Qué norma ISO está dedicada a la ergonomía del software para interfaces de usuario multimedia?",
        answers: ["ISO 25000", "ISO 9241", "ISO 14915"],
        correct: 2
    },
    {
        question: "¿Qué herramienta de creación de interfaces usa el lenguaje de programación basado en Basic?",
        answers: ["Glade", "Gambas", "Blend for Visual Studio"],
        correct: 1
    },
    {
        question: "¿Qué herramienta se utiliza para realizar pruebas de rendimiento y carga en aplicaciones web?",
        answers: ["JMeter", "Appium", "Selenium"],
        correct: 0
    },
    {
        question: "¿Qué tipo de listas muestran al usuario una serie de valores en sentido vertical para que pueda seleccionar uno o varios de ellos?",
        answers: ["Botones de radio", "Listas desplegables", "Botones de chequeo"],
        correct: 1
    },
    {
        question: "¿Qué clase de JasperReports se utiliza para compilar un archivo .jrxml?",
        answers: ["JasperExportManager", "JasperFillManager", "JasperCompileManager"],
        correct: 2
    },
    {
        question: "¿Qué herramienta se utiliza para generar documentación de código en varios lenguajes?",
        answers: ["DocFX", "Doxygen", "Javadoc"],
        correct: 1
    },
    {
        question: "¿Qué tipo de pruebas se centran en analizar el resultado del software sin entrar en el código?",
        answers: ["Pruebas funcionales", "Pruebas estructurales", "Pruebas de regresión"],
        correct: 0
    },
    {
        question: "¿Qué método de JasperExportManager se utiliza para exportar un informe a HTML?",
        answers: ["exportReportToXmlFile", "exportReportToHtmlFile", "exportReportToPdfFile"],
        correct: 1
    },
    {
        question: "¿Qué tipo de cuestionario está relacionado con la interfaz del usuario y valora las reacciones del usuario mientras utiliza el sistema?",
        answers: ["QUIS", "SUMI", "WAMMI"],
        correct: 0
    },
    {
        question: "¿Qué herramienta de desarrollo permite la creación de asistentes interactivos para la instalación de software?",
        answers: ["InstallShield", "Advanced Installer", "NSIS"],
        correct: 1
    },
    {
        question: "¿Qué componente de Java Swing permite agrupar botones de opción para que solo uno pueda ser seleccionado a la vez?",
        answers: ["JCheckBox", "JRadioButton", "ButtonGroup"],
        correct: 2
    },
    {
        question: "¿Qué herramienta se utiliza para realizar pruebas de seguridad en aplicaciones web?",
        answers: ["JMeter", "JUnit", "OWASP ZAP"],
        correct: 2
    },
    {
        question: "¿Cuál es la principal característica de XForms?",
        answers: ["Separación de propósito y presentación", "Integración con .NET"],
        correct: 0
    },
    {
        question: "¿Qué herramienta permite la creación de tutoriales interactivos y documentación utilizando Markdown o su editor WYSIWYG?",
        answers: ["GitBook", "GitHub Pages", "DocFX"],
        correct: 0
    },
    {
        question: "¿Qué clase en Android representa una sola pantalla con una interfaz de usuario?",
        answers: ["Fragment", "Activity", "View"],
        correct: 1
    },
    {
        question: "¿Qué herramienta de pruebas de rendimiento permite simular múltiples usuarios?",
        answers: ["JUnit", "JMeter", "Selenium"],
        correct: 1
    },
    {
        question: "¿Cuál es una característica clave de FXML en JavaFX?",
        answers: [
            "Facilita la integración con bases de datos",
            "Permite la separación de diseño y lógica",
            "Mejora la velocidad de renderizado de gráficos"
        ],
        correct: 1
    },
    {
        question: "¿Qué herramienta de Java se utiliza para firmar digitalmente archivos JAR?",
        answers: ["Keytool", "Maven", "jarsigner"],
        correct: 2
    },
    {
        question: "¿Qué herramienta de desarrollo permite crear aplicaciones multiplataforma utilizando HTML, CSS y JavaScript?",
        answers: ["Glade", "Matisse", "Electron"],
        correct: 2
    },
    {
        question: "¿Qué herramienta en NetBeans permite documentar clases Java?",
        answers: ["Administrar Bibliotecas", "Plataformas Java", "Analizar Javadoc"],
        correct: 2
    },
    {
        question: "¿Qué es un evento en el contexto de desarrollo de interfaces?",
        answers: ["Contenedor de widgets", "Elemento gráfico de la interfaz", "Suceso en el sistema o aplicación"],
        correct: 2
    },
    {
        question: "¿Qué tipo de informe permite la interacción del usuario con los datos presentados?",
        answers: ["Informes Dinámicos", "Informes Estáticos", "Informes Tabulares"],
        correct: 0
    },
    {
        question: "¿Qué herramienta de creación de interfaces es un componente del IDE de Microsoft y tiene versiones gratuitas y de pago?",
        answers: ["Blend for Visual Studio", "Glade", "Gambas"],
        correct: 0
    },
    {
        question: "¿Qué métrica de usabilidad está determinada por la comodidad, la aceptabilidad y la satisfacción de los usuarios en el uso de la aplicación?",
        answers: ["Métricas de eficiencia", "Métricas de eficacia", "Métricas de satisfacción"],
        correct: 2
    },
    {
        question: "¿Qué método de distribución permite enviar aplicaciones directamente a dispositivos específicos en iOS?",
        answers: ["Ad-hoc", "Google Play Store", "Apple App Store"],
        correct: 0
    },
    {
        question: "¿Qué componente de JavaFX se utiliza para reproducir videos en una aplicación?",
        answers: ["VideoPlayer", "VideoView", "MediaView"],
        correct: 2
    },
    {
        question: "¿Cuál es una ventaja de las pruebas de integración ascendientes (Bottom-Up)?",
        answers: [
            "Permite una identificación temprana de errores en los módulos de bajo nivel",
            "Reduce la necesidad de stubs",
            "Facilita la validación temprana de controladores de alto nivel"
        ],
        correct: 0
    },
    {
        question: "¿Qué característica de los certificados digitales asegura que el software no ha sido modificado desde su firma?",
        answers: ["Encriptación de datos", "Compresión de archivos", "Firma de código"],
        correct: 2
    },
    {
        question: "¿Qué herramienta se utiliza en Visual Studio Code para manejar eventos en React?",
        answers: ["Babel", "Manejadores de eventos", "CSS Modules"],
        correct: 1
    },
    {
        question: "¿Qué herramienta de control de versiones es mencionada como esencial para la colaboración?",
        answers: ["SVN", "Mercurial", "Git"],
        correct: 2
    },
    {
        question: "¿Qué herramienta permite la creación de manuales y documentación estructurada utilizando una sintaxis mínima?",
        answers: ["Asciidoc", "Markdown", "Javadoc"],
        correct: 1
    },
    {
        question: "¿Qué herramienta permite la creación de scripts de prueba sin necesidad de conocimientos avanzados en programación?",
        answers: ["TestNG", "Selenium IDE", "JUnit"],
        correct: 1
    },
    {
        question: "¿Qué característica de JavaBeans permite que sus propiedades sean accesibles?",
        answers: ["Métodos getter y setter", "Métodos estáticos", "Variables globales"],
        correct: 0
    },
    {
        question: "¿Qué tipo de botones permiten al usuario elegir varias opciones de un rango de valores?",
        answers: ["Botones de radio", "Botones de chequeo", "Botones de comando"],
        correct: 1
    },
    {
        question: "¿Qué lenguaje basado en XML permite la creación de formularios web reutilizables?",
        answers: ["XAML", "XFORMS", "XUL"],
        correct: 1
    },
    {
        question: "¿Qué herramienta permite la creación de aplicaciones web modernas utilizando ES Modules?",
        answers: ["Vite", "Maven", "Webpack"],
        correct: 0
    },
    {
        question: "¿Qué herramienta se utiliza para la automatización de pruebas en aplicaciones móviles?",
        answers: ["JUnit", "Appium", "Selenium"],
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