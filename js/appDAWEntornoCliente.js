const questions = [
    {
        question: "¿Qué método de array en JavaScript se utiliza para eliminar y devolver el primer elemento de un array?",
        answers: ["Shift", "pop", "unshift"],
        correct: 0
    },
    {
        question: "¿Qué método se utiliza para obtener todos los elementos de una página XHTML con una etiqueta específica?",
        answers: ["getElementsByName()", "getElementById()", "getElementsByTagName()"],
        correct: 2
    },
    {
        question: "¿Qué propiedad de un nodo devuelve una lista de todos sus nodos hijos?",
        answers: ["firstChild", "lastChild", "childNodes"],
        correct: 2
    },
    {
        question: "¿Qué método de jQuery se usa para obtener o establecer el contenido HTML de un elemento?",
        answers: ["val()", "html()", "text()"],
        correct: 1
    },
    {
        question: "¿Cómo seleccionar todos los elementos de tipo \"checkbox\" en jQuery?",
        answers: ["$(\"input:checkbox\")", "$(\"input[type='checkbox']\")", "$(\"checkbox\")"],
        correct: 1
    },
    {
        question: "¿Qué palabra clave se utiliza para declarar una variable local en JavaScript?",
        answers: ["let", "var", "const"],
        correct: 1
    },
    {
        question: "Si queremos manejar el evento `click` en elementos `<li>` dentro de un `<ul>` que se agregan dinámicamente, ¿cuál es la mejor práctica en jQuery?",
        answers: [
            "$(\"#lista\").on(\"click\", \"li\", function(){ alert(\"Elemento clickeado\"); });",
            "$(\"li\").click(function(){ alert(\"Elemento clickeado\"); });",
            "$(\".lista li\").bind(\"click\", function(){ alert(\"Elemento clickeado\"); });"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es el resultado de 5 + \"5\" en JavaScript?",
        answers: ["\"55\"", "\"10\"", "10"],
        correct: 0
    },
    {
        question: "¿Qué función de JavaScript comprueba si un valor es numérico o no?",
        answers: ["eval", "parseInt", "isNaN"],
        correct: 2
    },
    {
        question: "¿Cuál es la principal diferencia entre los métodos POST y GET en el envío de formularios?",
        answers: ["GET es más seguro que POST", "POST envía los datos en la URL", "GET envía los datos en la URL"],
        correct: 2
    },
    {
        question: "¿Qué método se utiliza para escribir en la pantalla del navegador en JavaScript?",
        answers: ["console.log()", "document.write()", "alert()"],
        correct: 1
    },
    {
        question: "¿Cuál es la forma correcta de realizar una petición AJAX con jQuery para obtener datos en formato JSON desde \"datos.php\"?",
        answers: [
            "$.ajax({url: \"datos.php\", dataType: \"json\", success: function(data){ console.log(data); }});",
            "$.get(\"datos.php\", function(data) { console.log(data); }, \"json\");",
            "$.post(\"datos.php\", {tipo: \"json\"}, function(respuesta){ console.log(respuesta); });"
        ],
        correct: 0
    },
    {
        question: "¿Qué propiedad del objeto window permite guardar pares clave/valor en un navegador web sin fecha de vencimiento?",
        answers: ["cookieStorage", "sessionStorage", "localStorage"],
        correct: 2
    },
    {
        question: "¿Qué símbolo se utiliza en jQuery para seleccionar elementos?",
        answers: ["%", "@", "$"],
        correct: 2
    },
    {
        question: "¿Qué propiedad del objeto window devuelve la altura de la ventana del navegador, incluidas las barras de herramientas?",
        answers: ["innerHeight", "outerHeight", "windowHeight"],
        correct: 1
    },
    {
        question: "¿Qué función en JavaScript se utiliza para comprobar si una cadena contiene un patrón específico?",
        answers: ["test()", "search()", "match()"],
        correct: 2
    },
    {
        question: "¿Cuál de las siguientes funciones de jQuery se utiliza para ejecutar código cuando el DOM ha sido cargado?",
        answers: ["$(document).ready()", "window.onload()", "init()"],
        correct: 0
    },
    {
        question: "¿Qué método de jQuery se usa para recorrer todos los elementos de una selección y ejecutar una función en cada uno?",
        answers: [".map()", ".each()", ".forEach()"],
        correct: 1
    },
    {
        question: "¿Cuál es el valor de typeof null en JavaScript?",
        answers: ["\"undefined\"", "\"object\"", "\"null\""],
        correct: 1
    },
    {
        question: "¿Qué método del objeto document se utiliza para adjuntar un controlador de eventos al documento?",
        answers: ["addEventListener()", "bindEvent()", "attachEvent()"],
        correct: 0
    },
    {
        question: "¿Qué método de jQuery se usa para agregar una clase a un elemento?",
        answers: ["addClass()", "attr()", "css()"],
        correct: 0
    },
    {
        question: "¿Cuál es el selector en jQuery para seleccionar todos los párrafos dentro de un div?",
        answers: ["$(\"div p\")", "$(\"div > p\")", "$(\"div, p\")"],
        correct: 0
    },
    {
        question: "¿Qué método de array en JavaScript se utiliza para añadir uno o más elementos al comienzo de un array?",
        answers: ["push", "pop", "unshift"],
        correct: 2
    },
    {
        question: "¿Qué formato de datos es más compacto y ligero que XML y se utiliza en AJAX?",
        answers: ["HTML", "JSON", "CSV"],
        correct: 1
    },
    {
        question: "¿Qué propiedad del objeto window devuelve la URL del documento que se está visualizando?",
        answers: ["location", "href", "src"],
        correct: 0
    },
    {
        question: "¿Qué método de array en JavaScript se utiliza para unir dos arrays y devolver un nuevo array con la unión?",
        answers: ["splice", "concat", "join"],
        correct: 1
    },
    {
        question: "¿Cuál es la diferencia principal entre .text() y .html() en jQuery?",
        answers: [
            "Ambos métodos funcionan igual, no hay diferencia",
            ".text() permite modificar atributos, mientras que .html() solo cambia texto",
            ".html() devuelve o establece el contenido HTML, mientras que .text() solo maneja texto sin etiquetas"
        ],
        correct: 2
    },
    {
        question: "¿Qué propiedad de un radiobutton en JavaScript devuelve true si está seleccionado?",
        answers: ["value", "selected", "checked"],
        correct: 2
    },
    {
        question: "¿Cuál es la diferencia entre .prop() y .attr() en jQuery?",
        answers: [
            ".prop() maneja propiedades del DOM mientras que .attr() trabaja con atributos HTML",
            ".attr() es más eficiente y reemplaza a .prop()",
            "No hay diferencia, ambos hacen lo mismo"
        ],
        correct: 0
    },
    {
        question: "¿Cuál de las siguientes funciones de jQuery se utiliza para ocultar un elemento?",
        answers: ["remove()", "fadeOut()", "hide()"],
        correct: 2
    },
    {
        question: "¿Qué método del objeto window se utiliza para mostrar un cuadro de alerta con un mensaje y un botón Aceptar?",
        answers: ["displayAlert()", "showAlert()", "alert()"],
        correct: 2
    },
    {
        question: "¿Qué selector de jQuery se usa para seleccionar el tercer elemento de una lista?",
        answers: ["$(\"ul li:eq(2)\")", "$(ul li:nth-child(3))", "$(ul li[2])"],
        correct: 0
    },
    {
        question: "¿Cuál es el propósito del método .data() en jQuery?",
        answers: [
            "Almacenar y recuperar datos personalizados en elementos seleccionados",
            "Enviar datos al servidor sin recargar la página",
            "Modificar atributos CSS de un elemento"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es una de las principales limitaciones de JavaScript en cuanto a la seguridad?",
        answers: [
            "Puede cerrar cualquier ventana del navegador",
            "Puede modificar las preferencias del navegador",
            "No puede acceder a los archivos del ordenador del usuario"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es la forma correcta de ocultar un elemento con jQuery?",
        answers: ["hide(\"#elemento\");", "$(\"#elemento\").hide();", "$(\"#elemento\").css(\"display\", \"none\");"],
        correct: 1
    },
    {
        question: "¿Qué tecnología permite realizar cambios en una página web sin necesidad de recargarla?",
        answers: ["CSS", "HTML5", "AJAX"],
        correct: 2
    },
    {
        question: "¿Qué función en JavaScript se utiliza para establecer el foco en un elemento de formulario?",
        answers: ["focus()", "setFocus()", "getFocus()"],
        correct: 0
    },
    {
        question: "¿Qué función se utiliza para transformar una cadena de texto JSON en un objeto JSON en JavaScript?",
        answers: ["JSON.parse()", "eval()", "JSON.stringify()"],
        correct: 0
    },
    {
        question: "¿Qué método de array en JavaScript se utiliza para añadir un elemento al final de un array?",
        answers: ["push", "unshift", "pop"],
        correct: 0
    },
    {
        question: "¿Qué evento se produce cuando el usuario selecciona un elemento del formulario?",
        answers: ["onclick", "onfocus", "onblur"],
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