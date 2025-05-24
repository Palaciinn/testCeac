const questions = [
    {
        question: "¿Qué sistema gestor de bases de datos objeto-relacionales es de código abierto?",
        answers: ["IBM DB2 Video Extender", "PostgreSQL", "OracleInterMedia"],
        correct: 1
    },
    {
        question: "¿Qué herramienta de desarrollo es un IDE para aplicaciones Java?",
        answers: ["Atom", "IntelliJ IDEA", "Eclipse"],
        correct: 2
    },
    {
        question: "¿Qué método en Java se utiliza para leer el valor de una propiedad?",
        answers: ["get", "read", "set"],
        correct: 0
    },
    {
        question: "¿Qué es un archivo JAR en la plataforma Java?",
        answers: [
            "Archivo comprimido que contiene solo archivos fuentes Java",
            "Archivo comprimido que contiene clases Java compiladas y otros recursos",
            "Archivo comprimido que contiene solo archivos multimedia"
        ],
        correct: 1
    },
    {
        question: "¿Qué sentencia SQL se utiliza para eliminar un objeto de una base de datos?",
        answers: ["DELETE", "DROP", "REMOVE"],
        correct: 1
    },
    {
        question: "¿Qué tipo de dato estructurado se refiere a un conjunto de valores del mismo tipo?",
        answers: ["Strings", "Arrays", "Matrices"],
        correct: 1
    },
    {
        question: "¿Qué clase en Java se utiliza para llamar a un procedimiento almacenado en JDBC?",
        answers: ["Statement", "CallableStatement", "PreparedStatement"],
        correct: 1
    },
    {
        question: "¿Qué tipo de dato en MySQL almacena una combinación de fecha y hora?",
        answers: ["TimeStamp", "Date", "DateTime"],
        correct: 2
    },
    {
        question: "¿Qué sentencia SQL se utiliza para recuperar valores de una tabla en una base de datos?",
        answers: ["FETCH", "GET", "SELECT"],
        correct: 2
    },
    {
        question: "¿Cuál es una de las principales dificultades del desfase objeto-relacional?",
        answers: [
            "La falta de soporte para transacciones",
            "La incompatibilidad de sistemas operativos",
            "La traducción de objetos a formas almacenables en la base de datos"
        ],
        correct: 2
    },
    {
        question: "¿Qué clase se utiliza en XML:DB para obtener una colección?",
        answers: ["CollectionManager", "CollectionHandler", "DatabaseManager"],
        correct: 2
    },
    {
        question: "¿Cuál es la principal ventaja de los procedimientos almacenados en bases de datos?",
        answers: [
            "Son reutilizables y mejoran el rendimiento",
            "Son más fáciles de escribir",
            "No requieren permisos especiales"
        ],
        correct: 0
    },
    {
        question: "¿Qué parser XML en Java almacena el documento en forma de árbol con nodos padre, hijo y finales?",
        answers: ["SAX", "JAXB", "DOM"],
        correct: 2
    },
    {
        question: "¿Qué tipo de dato en MySQL almacena un número en coma flotante de precisión simple?",
        answers: ["Decimal", "Float", "Double"],
        correct: 1
    },
    {
        question: "¿Qué clase en Java se utiliza para escribir línea por línea en un fichero?",
        answers: ["BufferedReader", "FileReader", "PrintWriter"],
        correct: 2
    },
    {
        question: "¿Qué tipo de expresiones utiliza XQuery para realizar consultas similares a SQL?",
        answers: ["FLWOR", "JOIN", "SELECT"],
        correct: 0
    },
    {
        question: "¿Qué método de la clase File en Java devuelve el tamaño del fichero en bytes?",
        answers: ["size()", "length()", "getSize()"],
        correct: 1
    },
    {
        question: "¿Qué método de la clase Exception en Java se utiliza para manejar una excepción de entrada/salida?",
        answers: ["catch(IOException e)", "try(IOException e)", "handle(IOException e)"],
        correct: 0
    },
    {
        question: "¿Qué operador lógico se utiliza en OQL igual que en SQL?",
        answers: ["XOR", "NOT", "AND"],
        correct: 2
    },
    {
        question: "¿Qué método de la clase Connection se utiliza para confirmar una transacción en JDBC?",
        answers: ["finalize", "apply", "confirm", "commit"],
        correct: 3
    },
    {
        question: "¿Qué lenguaje de consulta utiliza Tamino para ejecutar sentencias desde aplicaciones?",
        answers: ["XPath", "XQuery", "SQL"],
        correct: 1
    },
    {
        question: "¿Qué método de la clase RandomAccessFile en Java sitúa la posición de la próxima operación de lectura o escritura en el byte especificado?",
        answers: ["moveTo()", "setPosition()", "seek()"],
        correct: 2
    },
    {
        question: "¿Qué lenguaje de consulta utiliza Tamino para ejecutar sentencias desde aplicaciones?",
        answers: ["SQL", "XQuery", "XPath"],
        correct: 1
    },
    {
        question: "¿Qué método de la clase OutputStream en Java vacía el búfer de salida?",
        answers: ["clear()", "empty()", "flush()"],
        correct: 2
    },
    {
        question: "¿Qué característica de las bases de datos orientadas a objetos permite la jerarquía de clases?",
        answers: ["Herencia", "Encapsulación", "Polimorfismo"],
        correct: 0
    },
    {
        question: "¿Qué protocolo de acceso a bases de datos fue desarrollado por el consorcio SQL en 1992?",
        answers: ["ODBC", "SQL", "JDBC"],
        correct: 0
    },
    {
        question: "¿Qué sentencia SQL se utiliza para actualizar valores en una tabla de la base de datos?",
        answers: ["UPDATE", "CHANGE", "MODIFY"],
        correct: 0
    },
    {
        question: "¿Qué propiedad permite que una operación se aplique a distintos tipos de objetos?",
        answers: ["Polimorfismo", "Encapsulación", "Herencia"],
        correct: 0
    },
    {
        question: "¿Qué sentencia SQL se utiliza para crear un objeto en una base de datos?",
        answers: ["ALTER", "DROP", "CREATE"],
        correct: 2
    },
    {
        question: "¿Qué tipo de dato en MySQL almacena una cadena de longitud fija?",
        answers: ["Enum", "CharNo", "VarCharNo"],
        correct: 1
    },
    {
        question: "¿Qué herramienta ORM es más utilizada para proyectos de aplicaciones Java?",
        answers: ["Entity Framework", "Hibernate", "Doctrine"],
        correct: 1
    },
    {
        question: "¿Qué sentencia SQL se utiliza para insertar valores en una tabla de la base de datos?",
        answers: ["PUT", "ADD", "INSERT"],
        correct: 2
    },
    {
        question: "¿Qué método de la clase InputStream en Java se utiliza para leer un byte de la entrada?",
        answers: ["read()", "readByte()", "readChar()"],
        correct: 0
    },
    {
        question: "¿Qué método de la clase File en Java devuelve la ruta absoluta del fichero?",
        answers: ["getPath()", "getCanonicalPath()", "getAbsolutePath()"],
        correct: 2
    },
    {
        question: "¿Qué técnica de programación permite controlar los errores durante la ejecución de un programa en Java?",
        answers: ["Excepciones", "Parsers", "Validaciones"],
        correct: 0
    },
    {
        question: "¿Cuál es la clase en Java que permite realizar operaciones de lectura y escritura simultáneamente sobre un fichero?",
        answers: ["FileReader", "FileWriter", "RandomAccessFile"],
        correct: 2
    },
    {
        question: "¿Qué tipo de driver JDBC se implementa en una aproximación de tres capas?",
        answers: [
            "Driver puente JDBC-ODBC",
            "Driver protocolo de red todo Java",
            "Driver API nativa parte Java"
        ],
        correct: 1
    },
    {
        question: "¿Qué método de la clase Connection se utiliza para establecer una conexión en JDBC?",
        answers: ["connect", "getConnection", "openConnection"],
        correct: 1
    },
    {
        question: "¿Qué tipo de flujo en Java se encarga de las operaciones con datos en formato binario?",
        answers: ["Flujos basados en caracteres", "Flujos de bytes", "Flujos de texto"],
        correct: 1
    },
    {
        question: "¿Qué clase en Java se utiliza para el flujo de lectura de un fichero?",
        answers: ["BufferedReader", "FileWriter", "FileReader"],
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