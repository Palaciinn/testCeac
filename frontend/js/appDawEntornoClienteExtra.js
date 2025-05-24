const questions = [
    {
      question: "¿Cuál es el lenguaje de programación más comúnmente utilizado en el desarrollo web del lado del cliente?",
      answers: ["JavaScript", "Visual Basic Script", "Tel"],
      correct: 0
    },
    {
      question: "¿Qué tecnología permite crear aplicaciones interactivas que se ejecutan en el navegador del usuario mientras se mantiene la comunicación asíncrona con el servidor?",
      answers: ["AJAX", "CSS", "HTML"],
      correct: 0
    },
    {
      question: "¿Qué framework es el más extendido en las aplicaciones de JavaScript y ayuda a crear aplicaciones complejas del lado del cliente?",
      answers: ["Angular", "jQuery", "React"],
      correct: 0
    },
    {
      question: "¿Cuál es una de las principales limitaciones de los scripts JavaScript según el documento?",
      answers: ["No pueden acceder a los archivos del ordenador del usuario", "No pueden ser utilizados en navegadores modernos", "No pueden realizar acciones relacionadas con el navegador"],
      correct: 0
    },
    {
      question: "¿Qué lenguaje de programación se menciona como un subconjunto de XML, especializado en la presentación de documentos para la web?",
      answers: ["XHTML", "HTML", "CSS"],
      correct: 0
    },
    {
      question: "¿Dónde es recomendable definir el código JavaScript en un documento HTML para evitar retrasar la carga de la página?",
      answers: ["Dentro de la cabecera o al final del documento", "En el cuerpo del documento", "En un archivo CSS separado"],
      correct: 0
    },
    {
      question: "¿Cuál es la característica principal de las variables locales en JavaScript?",
      answers: ["Se reconocen solo en la función donde han sido declaradas", "Se reconocen solo si se declaran con 'var'", "Se reconocen en todo el script"],
      correct: 0
    },
    {
      question: "¿Qué tipo de operador es '++' en JavaScript?",
      answers: ["Operador aritmético", "Operador lógico", "Operador relacional"],
      correct: 0
    },
    {
      question: "¿Cuál es el resultado de la expresión lógica 'true && false' en JavaScript?",
      answers: ["False", "True", "Undefined"],
      correct: 0
    },
    {
      question: "¿Cuál es el propósito de la función parseFloat() en JavaScript?",
      answers: ["Convertir una cadena en un número con coma flotante", "Convertir un número en un entero", "Convertir un número en una cadena"],
      correct: 0
    },
    {
      question: "¿Qué tipo de estructura de control es 'for...in' en JavaScript?",
      answers: ["Bucle", "Condicional", "Función"],
      correct: 0
    },
    {
      question: "¿Cuál es el uso del operador '===' en JavaScript?",
      answers: ["Comparar valores sin conversión de tipos", "Comparar valores después de la conversión de tipos", "Asignar un valor a una variable"],
      correct: 0
    },
    {
      question: "¿Qué describe correctamente el concepto de encapsulación en programación orientada a objetos?",
      answers: ["Oculta las propiedades y métodos de una clase al mundo exterior", "Permite que varias funciones tengan el mismo identificador", "Permite que una clase herede propiedades y métodos de otra clase"],
      correct: 0
    },
    {
      question: "¿Qué método del objeto window se utiliza para abrir una nueva ventana del navegador?",
      answers: ["window.open()", "window.alert()", "window.close()"],
      correct: 0
    },
    {
      question: "¿Cuál es la función del objeto document en la jerarquía de objetos del navegador?",
      answers: ["Controlar la página web y todos los elementos que contiene", "Controlar el historial de navegación", "Controlar la ventana del navegador"],
      correct: 0
    },
    {
      question: "¿Cuál es el propósito del método window.focus() en JavaScript?",
      answers: ["Establecer el foco en la ventana actual", "Cerrar la ventana actual", "Mover la ventana a una posición especificada"],
      correct: 0
    },
    {
      question: "¿Qué propiedad del objeto window devuelve la URL del documento que se está visualizando?",
      answers: ["window.location", "window.document", "window.navigator"],
      correct: 0
    },
    {
      question: "¿Cuál es el uso principal de la etiqueta <iframe> en HTML?",
      answers: ["Dividir una página en diferentes regiones independientes", "Integrar contenido multimedia de otros sitios web", "Crear un sistema de navegación"],
      correct: 0
    },
    {
      question: "¿Qué función en JavaScript se utiliza para evaluar una cadena con código JavaScript?",
      answers: ["eval", "parselnt", "isNaN"],
      correct: 0
    },
    {
      question: "¿Cuál es el propósito principal de la función isNaN en JavaScript?",
      answers: ["Comprobar si un valor es numérico o no", "Convertir una cadena en un número entero", "Evaluar si un valor es un número finito"],
      correct: 0
    },
    {
      question: "¿Qué método de array en JavaScript se utiliza para añadir uno o más elementos al comienzo de un array?",
      answers: ["unshift()", "push()", "concat()"],
      correct: 0
    },
    {
      question: "¿Cómo se define un array asociativo en JavaScript?",
      answers: ["Organizando por claves no numéricas", "Mediante el uso de corchetes", "Utilizando índices numéricos"],
      correct: 0
    },
    {
      question: "¿Qué estructura de control se utiliza para recorrer un array bidimensional en JavaScript?",
      answers: ["Un bucle for anidado", "Un bucle while", "Un bucle do-while"],
      correct: 0
    },
    {
      question: "¿Qué palabra clave se utiliza en JavaScript para definir una función?",
      answers: ["function", "let", "var"],
      correct: 0
    },
    {
      question: "¿Cuál es la función principal de los manejadores de eventos en JavaScript?",
      answers: ["Asociar funciones o código JavaScript a eventos específicos", "Crear interfaces gráficas", "Interactuar con el sistema operativo"],
      correct: 0
    },
    {
      question: "¿Qué propiedad se utiliza para obtener el tipo de evento producido en JavaScript?",
      answers: ["type", "eventKind", "eventType"],
      correct: 0
    },
    {
      question: "¿Cuál es el propósito de la función focus() en formularios?",
      answers: ["Establecer el foco en un elemento específico", "Limitar caracteres", "Validar contenido"],
      correct: 0
    },
    {
      question: "¿Qué método se utiliza para acceder a un formulario por su atributo id en JavaScript?",
      answers: ["document.getElementById()", "document.getFormById()", "document.getFormElement()"],
      correct: 0
    },
    {
      question: "¿Cuál es el uso principal de las expresiones regulares en JavaScript?",
      answers: ["Describir cadenas para comparaciones y reemplazos complejos", "Crear cookies", "Validar formularios"],
      correct: 0
    },
    {
      question: "¿Qué propiedad de un checkbox en JavaScript indica si está seleccionado?",
      answers: ["checked", "selected", "value"],
      correct: 0
    },
    {
      question: "¿Qué tipo de nodo representa cada etiqueta XHTML en el DOM?",
      answers: ["Nodo de tipo Element", "Nodo de tipo Text", "Nodo de tipo Comment"],
      correct: 0
    },
    {
      question: "¿Qué método se usa para añadir un nuevo nodo al final de la lista childNodes?",
      answers: ["appendChild(nodo)", "replaceChild(nuevoNodo, anteriorNodo)", "insertBefore(nuevoNodo, anteriorNodo)"],
      correct: 0
    },
    {
      question: "¿Qué función obtiene todos los elementos con una etiqueta específica en XHTML?",
      answers: ["getElementsByTagName()", "getElementById()", "getElementsByName()"],
      correct: 0
    },
    {
      question: "¿Qué evento se produce al añadir un nodo hijo en el DOM?",
      answers: ["DOMNodeInserted", "DOMNodeRemoved", "DOMSubtreeModified"],
      correct: 0
    },
    {
      question: "¿Qué framework permite desarrollar apps móviles usando HTML5 con geolocalización y cámara?",
      answers: ["PhoneGap", "Sencha Touch", "jQuery Mobile"],
      correct: 0
    },
    {
      question: "¿Cuál es el propósito principal de AJAX en desarrollo web?",
      answers: ["Realizar peticiones sin recargar la página", "Recargar toda la página", "Mejorar la seguridad"],
      correct: 0
    },
    {
      question: "¿Qué método de XMLHttpRequest envía la solicitud al servidor?",
      answers: ["send()", "open()", "getResponseHeader()"],
      correct: 0
    },
    {
      question: "¿Qué propiedad de XMLHttpRequest indica que la respuesta está lista?",
      answers: ["readyState", "status", "responseText"],
      correct: 0
    },
    {
      question: "¿Qué función convierte una cadena JSON en un objeto?",
      answers: ["JSON.parse()", "eval()", "JSON.stringify()"],
      correct: 0
    },
    {
      question: "¿Qué propiedad del objeto navigator en JavaScript devuelve el nombre del navegador?",
      answers: ["navigator.appName", "navigator.platform", "navigator.cookieEnabled"],
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