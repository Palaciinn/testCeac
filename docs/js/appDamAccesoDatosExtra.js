const questions = [
    {
      question: "¿Qué clase en Java se utiliza para realizar operaciones de lectura y escritura simultáneamente en ficheros?",
      answers: ["FileReader", "RandomAccessFile", "BufferedReader"],
      correct: 1
    },
    {
      question: "¿Cuál es la función principal de los parsers XML sin validación como DOM y SAX?",
      answers: [
        "Comprobar la gramática del documento XML",
        "Validar el documento XML contra un DTD",
        "Comprobar que el documento esté bien formado según las reglas XML"
      ],
      correct: 2
    },
    {
      question: "¿Qué método de la clase RandomAccessFile permite situar la posición de la próxima operación de lectura o escritura en un byte específico?",
      answers: ["getFilePosition()", "seek()", "length()"],
      correct: 1
    },
    {
      question: "¿Qué tipo de flujo en Java se utiliza para operaciones con datos en formato binario?",
      answers: ["Flujos basados en caracteres", "Flujos de bytes", "Flujos de texto"],
      correct: 1
    },
    {
      question: "¿Qué clase en Java se utiliza para escribir línea por línea en un fichero?",
      answers: ["FileWriter", "PrintWriter", "BufferedWriter"],
      correct: 1
    },
    {
      question: "¿Qué técnica de programación permite controlar los errores durante la ejecución de un programa en Java?",
      answers: ["Excepciones", "Validaciones", "Parsers"],
      correct: 0
    },
    {
      question: "¿Qué librería de Apache permite la serialización de objetos Java a XML y su posterior deserialización?",
      answers: ["Xerces", "XMLBeans", "XStream"],
      correct: 2
    },
    {
      question: "¿Cuál es una de las principales dificultades del desfase objeto-relacional?",
      answers: [
        "La falta de soporte para bases de datos no relacionales",
        "La diferencia en los tipos de datos entre programación orientada a objetos y bases de datos relacionales",
        "La incapacidad de las bases de datos para manejar grandes volúmenes de datos"
      ],
      correct: 1
    },
    {
      question: "¿Qué función tiene el método setAutoCommit en la gestión de transacciones con JDBC?",
      answers: [
        "Permite establecer la conexión con la base de datos",
        "Define si las sentencias SQL se ejecutan como transacciones individuales o agrupadas",
        "Configura el tipo de driver JDBC a utilizar"
      ],
      correct: 1
    },
    {
      question: "¿Qué ventaja principal ofrecen los procedimientos almacenados en bases de datos?",
      answers: [
        "Permiten la ejecución de consultas más rápidas desde el cliente",
        "Mejoran el rendimiento al reducir el intercambio de datos entre cliente y servidor",
        "Facilitan la conexión a múltiples bases de datos simultáneamente"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es la función del driver JDBC en una aplicación Java?",
      answers: [
        "Proporcionar una interfaz gráfica para la gestión de bases de datos",
        "Traducir las operaciones JDBC en llamadas a la API nativa de la base de datos",
        "Almacenar datos de manera temporal durante la ejecución de la aplicación"
      ],
      correct: 1
    },
    {
      question: "¿Qué operación realiza la sentencia SQL DROP en una base de datos?",
      answers: [
        "Modifica la estructura de un objeto existente",
        "Elimina un objeto del sistema de gestión de bases de datos",
        "Crea un nuevo objeto en la base de datos"
      ],
      correct: 1
    },
    {
      question: "¿Qué método se utiliza para revertir cambios en una transacción antes de que se ejecute commit()?",
      answers: ["rollback()", "undo()", "revert()"],
      correct: 0
    },
    {
      question: "¿Qué característica tiene el modelo driver protocolo nativo todo Java (driver 4) en JDBC?",
      answers: [
        "Utiliza un puente entre JDBC y ODBC para la conexión",
        "Comunica directamente con el servidor de bases de datos usando el protocolo nativo",
        "Requiere configuración adicional en el cliente para funcionar"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una de las características más importantes de las herramientas ORM?",
      answers: [
        "Complejidad en su implementación",
        "Simplicidad para facilitar su rápida implementación",
        "Dependencia total del código SQL"
      ],
      correct: 1
    },
    {
      question: "¿Qué método se utiliza en Hibernate para hacer un objeto persistente en la base de datos?",
      answers: ["update()", "delete()", "save()"],
      correct: 2
    },
    {
      question: "¿Qué lenguaje de consultas proporciona Hibernate?",
      answers: ["SQL", "HQL", "JPQL"],
      correct: 1
    },
    {
      question: "¿Cuál es una ventaja del uso de HQL en comparación con SQL?",
      answers: [
        "HQL no permite operaciones relacionales",
        "HQL es independiente del gestor de base de datos",
        "HQL no soporta características avanzadas como JOINS"
      ],
      correct: 1
    },
    {
      question: "¿Qué estado describe un objeto en Hibernate que ha sido persistente pero cuya sesión está cerrada?",
      answers: ["Transient", "Persistent", "Detached"],
      correct: 2
    },
    {
      question: "¿Qué herramienta ORM es más empleada para proyectos de aplicaciones Java?",
      answers: ["NHibernate", "Hibernate", "Doctrine"],
      correct: 1
    },
    {
      question: "¿Qué tipo de mapeo se utiliza cuando se crea una tabla por cada clase sin redundar las propiedades?",
      answers: [
        "Mapeo de jerarquía de clases a una misma tabla",
        "Mapeo de jerarquías de cada clase concreta a distintas tablas",
        "Mapeo de jerarquías de clases a tablas independientes"
      ],
      correct: 2
    },
    {
      question: "¿Cuál de las siguientes características es fundamental en las bases de datos objeto-relacionales?",
      answers: [
        "Soporte exclusivo para datos numéricos",
        "Encapsulación de datos",
        "Incompatibilidad con datos de texto e imagen"
      ],
      correct: 1
    },
    {
      question: "¿Qué característica permite a las bases de datos orientadas a objetos manejar datos complejos de manera eficiente?",
      answers: [
        "Uso exclusivo de tablas relacionales",
        "Almacenamiento de datos como objetos",
        "Limitación a datos binarios"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una de las principales características de PostgreSQL que lo clasifica como un gestor de bases de datos objeto-relacionales?",
      answers: [
        "Falta de soporte para herencia en tablas",
        "Cumplimiento de los principios ACID",
        "Exclusividad para datos monetarios"
      ],
      correct: 1
    },
    {
      question: "¿Qué permite el uso de ANSI SQL:1999 en la gestión de bases de datos objeto-relacionales?",
      answers: [
        "Exclusión de tipos estructurados definidos por el usuario",
        "Introducción de tablas 'tipadas'",
        "Eliminación de la sintaxis SQL tradicional"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una de las características principales de las bases de datos orientadas a objetos?",
      answers: [
        "Uso exclusivo de identificadores basados en atributos",
        "Soporte para objetos complejos e identidad de objetos",
        "Limitación a operaciones de consulta básicas"
      ],
      correct: 1
    },
    {
      question: "¿Qué tipo de datos en MySQL permite almacenar una cadena de longitud fija?",
      answers: ["VarChar(n)", "Char(n)", "Enum"],
      correct: 1
    },
    {
      question: "¿Qué operador lógico se utiliza en OQL similar a SQL?",
      answers: ["XOR", "NAND", "AND"],
      correct: 2
    },
    {
      question: "¿Cuál es una característica distintiva de las bases de datos XML nativas?",
      answers: [
        "Almacenan datos en campos de tablas",
        "Respetan la estructura del documento XML",
        "No permiten la recuperación de documentos en formato XML"
      ],
      correct: 1
    },
    {
      question: "¿Qué tipo de índice es soportado por el gestor de bases de datos Tamino?",
      answers: [
        "Índice de texto compuesto",
        "Índice de estructura",
        "Índice de texto simple"
      ],
      correct: 2
    },
    {
      question: "¿Cuál es una de las funciones de las expresiones FLWOR en XQuery?",
      answers: [
        "Permitir la ejecución de consultas SQL",
        "Manipular documentos XML mediante XPath",
        "Ordenar los resultados de una consulta"
      ],
      correct: 2
    },
    {
      question: "¿Qué archivo se utiliza para iniciar la instalación de eXistdb en Windows?",
      answers: ["eXist-setup.exe", "eXist-installer-XXX.jar", "eXistdb-install.bat"],
      correct: 1
    },
    {
      question: "¿Qué tipo de almacenamiento permite realizar consultas sobre el contenido de documentos XML?",
      answers: [
        "Almacenamiento en bases de datos relacionales",
        "Almacenamiento en archivos de texto plano",
        "Almacenamiento en bases de datos XML"
      ],
      correct: 2
    },
    {
      question: "¿Qué clase se utiliza para capturar errores en la API XML:DB?",
      answers: ["XMLDBError", "XMLDBException", "XMLDBFault"],
      correct: 1
    },
    {
      question: "¿Cuál es una ventaja del almacenamiento directo de documentos XML en un campo de una base de datos relacional?",
      answers: [
        "Permite realizar consultas complejas sobre el contenido",
        "Mantiene el formato original del documento",
        "Facilita la indexación de los elementos del documento"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una de las principales ventajas de los componentes de software en el desarrollo de aplicaciones?",
      answers: [
        "No pueden ser reutilizados en diferentes aplicaciones",
        "Permiten optimizar el desarrollo y simplificar el código fuente",
        "Tienen un estado definido visible externamente"
      ],
      correct: 1
    },
    {
      question: "¿Qué tipo de propiedad de un componente emite una notificación al ser modificada?",
      answers: ["Propiedad simple", "Propiedad restringida", "Propiedad compartida"],
      correct: 2
    },
    {
      question: "¿Qué mecanismo permite la transferencia de objetos en una red mediante su codificación en un medio de almacenamiento?",
      answers: ["Introspección", "Serialización de objetos", "Control reactivo"],
      correct: 1
    },
    {
      question: "¿Cuál es una característica de los eventos en la programación dirigida por eventos?",
      answers: [
        "Siempre dependen de la interacción del usuario",
        "No pueden ser desencadenados por el sistema",
        "Pueden ser conexos o inconexos y concurrentes en el tiempo"
      ],
      correct: 2
    },
    {
      question: "¿Qué tipo de archivo es utilizado para empaquetar aplicaciones Java junto con los recursos necesarios para su ejecución?",
      answers: ["Archivo XML", "Archivo JAR", "Archivo JSON"],
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