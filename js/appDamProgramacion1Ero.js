const questions = [
    {
        "question": "¿Qué estructura ejecuta el bloque al menos una vez?",
        "answers": ["while", "do-while", "for"],
        "correct": 1
    },
    {
        "question": "¿Qué estructura permite repetir un bloque de código mientras se cumple una condición?",
        "answers": ["if", "while", "switch"],
        "correct": 1
    },
    {
        "question": "¿Qué método de ResultSet permite avanzar al siguiente registro?",
        "answers": ["next()", "advance()", "getNext()"],
        "correct": 0
    },
    {
        "question": "¿Qué palabra clave se usa para crear un objeto?",
        "answers": ["create", "new", "build"],
        "correct": 1
    },
    {
        "question": "¿Qué es un comentario en programación?",
        "answers": ["Texto que no se ejecuta", "Una sentencia de error", "Un identificador"],
        "correct": 0
    },
    {
        "question": "¿Qué palabra clave se usa para devolver un valor en una función?",
        "answers": ["break", "return", "continue"],
        "correct": 1
    },
    {
        "question": "¿Qué clase permite leer archivos de texto?",
        "answers": ["BufferedReader", "FileParser", "TextScanner"],
        "correct": 0
    },
    {
        "question": "¿Cuál es el índice inicial en un array Java?",
        "answers": ["0", "Depende del tipo", "1"],
        "correct": 0
    },
    {
        "question": "¿Qué tipo de colección permite duplicados ordenados?",
        "answers": ["Map", "Set", "List"],
        "correct": 2
    },
    {
        "question": "¿Qué es una variable en programación?",
        "answers": ["Un espacio de memoria que puede cambiar", "Un nombre de función", "Un comentario"],
        "correct": 0
    },
    {
        "question": "¿Qué tipo de clase no se puede instanciar?",
        "answers": ["static", "final", "abstract"],
        "correct": 2
    },
    {
        "question": "¿Qué es una constante?",
        "answers": ["Una clase sin métodos", "Una variable cuyo valor no cambia", "Un comentario especial"],
        "correct": 1
    },
    {
        "question": "¿Qué operador se usa para asignar un valor en Java?",
        "answers": [":=", "==", "="],
        "correct": 2
    },
    {
        "question": "¿Qué indica la palabra 'override'?",
        "answers": ["Un método es nuevo", "Un método es oculto", "Un método sobrescribe otro"],
        "correct": 2
    },
    {
        "question": "¿Qué clase se usa en Java para conectarse a una base de datos?",
        "answers": ["DriverManager", "Scanner", "FileReader"],
        "correct": 0
    },
    {
        "question": "¿Qué método permite borrar una fila en SQL?",
        "answers": ["DELETE", "ERASE", "DROP"],
        "correct": 0
    },
    {
        "question": "¿Qué hace el método getConnection()?",
        "answers": ["Conecta a una BD", "Cierra una conexión", "Lee un archivo"],
        "correct": 0
    },
    {
        "question": "¿Qué método de Statement se usa para ejecutar una consulta SELECT?",
        "answers": ["runSelect()", "executeUpdate()", "executeQuery()"],
        "correct": 2
    },
    {
        "question": "¿Qué es una GUI?",
        "answers": ["Interfaz gráfica de usuario", "Controlador de bases de datos", "Librería de archivos"],
        "correct": 0
    },
    {
        "question": "¿Qué es la serialización?",
        "answers": ["Conversión de strings en números", "Proceso de guardar objetos como bytes", "Lectura de objetos como XML"],
        "correct": 1
    },
    {
        "question": "¿Qué tipo de relación en POO permite que un objeto contenga a otro sin ser dependiente?",
        "answers": ["Herencia", "Composición", "Agregación"],
        "correct": 2
    },
    {
        "question": "¿Qué es una función sobrecargada?",
        "answers": ["Función heredada", "Mismo nombre, diferentes parámetros", "Función duplicada"],
        "correct": 1
    },
    {
        "question": "¿Qué estructura permite múltiples opciones según un valor?",
        "answers": ["if", "switch", "loop"],
        "correct": 1
    },
    {
        "question": "¿Qué palabra clave permite que un método funcione sin objeto?",
        "answers": ["main", "static", "void"],
        "correct": 1
    },
    {
        "question": "¿Qué ventaja tiene un ERP en la nube?",
        "answers": ["Requiere servidores dedicados", "Accesible y económico", "Mayor complejidad"],
        "correct": 1
    },
    {
        "question": "¿Qué clase de Java elimina un archivo?",
        "answers": ["File.delete()", "File.erase()", "File.remove()"],
        "correct": 0
    },
    {
        "question": "¿Qué es un módulo en un ERP?",
        "answers": ["API externa", "Parte especializada como ventas, RRHH", "Archivo de Excel"],
        "correct": 1
    },
    {
        "question": "¿Qué es una base de datos orientada a objetos?",
        "answers": ["Una BD que almacena objetos completos", "Una BD basada en textos", "Una BD en Excel"],
        "correct": 0
    },
    {
        "question": "¿Qué clase permite ejecutar sentencias SQL en JDBC?",
        "answers": ["Statement", "QueryHandler", "String"],
        "correct": 0
    },
    {
        "question": "¿Qué hace un asistente como MySQL Workbench?",
        "answers": ["Gestiona visualmente bases de datos", "Crea imágenes", "Edita código Java"],
        "correct": 0
    },
    {
        "question": "¿Qué es un dashboard?",
        "answers": ["Archivo HTML", "Base de datos local", "Panel de control con KPIs"],
        "correct": 2
    },
    {
        "question": "¿Qué es encapsulamiento en POO?",
        "answers": ["Ocultar los detalles internos", "Probar todos los métodos", "Repetir código"],
        "correct": 0
    },
    {
        "question": "¿Cuál es la diferencia entre variable y constante?",
        "answers": ["La constante no cambia", "La constante es pública", "La variable se borra"],
        "correct": 0
    },
    {
        "question": "¿Qué es una vista en una base de datos?",
        "answers": ["Índice de datos", "Consulta guardada como tabla virtual", "Archivo temporal"],
        "correct": 1
    },
    {
        "question": "¿Qué es el lenguaje ODL?",
        "answers": ["Ejecuta consultas SQL", "Transforma datos XML", "Define estructura de BDOO"],
        "correct": 2
    },
    {
        "question": "¿Qué se usa para diseñar formularios en Java?",
        "answers": ["Swing", "MySQL", "Photoshop"],
        "correct": 0
    },
    {
        "question": "¿Qué propiedad se usa para obtener el tamaño de un array?",
        "answers": ["count", "size()", "length"],
        "correct": 2
    },
    {
        "question": "¿Qué clase se usa para gestionar listas dinámicas en Java?",
        "answers": ["ArrayList", "ListArray", "DynamicList"],
        "correct": 0
    },
    {
        "question": "¿Qué palabra clave define una clase que no puede instanciarse?",
        "answers": ["abstract", "private", "static"],
        "correct": 0
    },
    {
        "question": "¿Qué estructura es más eficiente para evitar duplicados?",
        "answers": ["List", "Array", "Set"],
        "correct": 2
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