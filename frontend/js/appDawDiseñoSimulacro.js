const questions = [
    {
        question: "¿Qué herramienta es conocida por ser un editor WYSIWYG ampliamente utilizado?",
        answers: ["Notepad", "Dreamweaver", "BlueGriffon"],
        correct: 1
    },
    {
        question: "¿Qué etiqueta HTML se utiliza para vincular una hoja de estilo externa en el head?",
        answers: ["style", "link", "scrip"],
        correct: 1
    },
    {
        question: "¿Qué software se menciona como un editor de vídeo gratuito?",
        answers: ["Gimp", "Adobe Premiere Pro CC", "Final Cut Pro"],
        correct: 0
    },
    {
        question: "¿Qué principio de accesibilidad web se refiere a que la información debe ser presentada de forma que pueda ser percibida?",
        answers: ["Perceptibilidad", "Comprensibilidad", "Operatibilidad"],
        correct: 0
    },
    {
        question: "¿Qué propiedad CSS se utiliza para definir el color del texto?",
        answers: ["text-color", "color", "font-color"],
        correct: 1
    },
    {
        question: "¿Qué formato de imagen es adecuado para fotografías debido a su capacidad de tonos continuos?",
        answers: ["GIF", "PNG", "JPEG"],
        correct: 2
    },
    {
        question: "¿Qué tipo de prototipo se realiza en una primera fase y puede ser esquematizado en papel?",
        answers: ["De media fidelidad", "De baja fidelidad", "De alta fidelidad"],
        correct: 1
    },
    {
        question: "¿Qué elemento de ordenación en maquetación web proporciona una separación entre contenidos y estructuras?",
        answers: ["Marcos", "Capas", "Tablas"],
        correct: 1
    },
    {
        question: "¿Qué tipo de usuario no participa en ninguna de las actividades de interacción en la web?",
        answers: ["Inactivos", "Espectadores", "Socializadores"],
        correct: 0
    },
    {
        question: "¿Qué técnica HTML se recomienda para agregar de forma adecuada el texto?",
        answers: ["Uso de marcos", "Uso de imágenes", "Etiquetado de texto"],
        correct: 2
    },
    {
        question: "¿Qué técnica fundamental se recomienda para evitar que una pantalla parpadeante provoque ataques en usuarios con epilepsia fotosensitiva?",
        answers: ["Usar destellos en la pantalla", "Usar animaciones constantes", "Evitar destellos en la pantalla"],
        correct: 2
    },
    {
        question: "¿Qué tipo de usuario se limita a navegar por los contenidos publicados por otros?",
        answers: ["Críticos", "Espectadores", "Creadores"],
        correct: 1
    },
    {
        question: "¿Qué tipo de diseño de menú simula el aspecto de un archivador de carpetas?",
        answers: ["Pestañas", "Cortinilla", "Árbol"],
        correct: 0
    },
    {
        question: "¿Cuál es la extensión de archivo estándar para una hoja de estilo en cascada?",
        answers: [".css", ".html", ".js"],
        correct: 0
    },
    {
        question: "¿Qué organización internacional desarrolla estándares para asegurar el crecimiento de la web a largo plazo?",
        answers: ["ISO", "IEEE", "W3C"],
        correct: 2
    },
    {
        question: "¿Qué tipo de navegación permite desplazarse desde cualquier página hacia otras actividades en un sitio web?",
        answers: ["Navegación secuencial", "Navegación hipertextual", "Navegación lineal"],
        correct: 1
    },
    {
        question: "¿Qué atributo HTML se utiliza para definir el tipo de recurso al que apunta un enlace de hoja de estilo?",
        answers: ["rel", "type", "href"],
        correct: 1
    },
    {
        question: "¿Qué técnica fundamental se recomienda para evitar que una página se renueve sin que el usuario lo pida?",
        answers: ["Usar actualizaciones automáticas", "Evitar actualizaciones automáticas", "Usar animaciones constantes"],
        correct: 1
    },
    {
        question: "¿Qué propiedad de los colores se refiere a la cantidad de luz que refleja una superficie?",
        answers: ["Tono", "Saturación", "Brillo"],
        correct: 2
    },
    {
        question: "¿Qué técnica fundamental se recomienda para facilitar la comprensión del contenido?",
        answers: ["Usar un lenguaje claro y simple", "Usar un lenguaje técnico y complejo", "Usar un lenguaje ambiguo"],
        correct: 0
    },
    {
        question: "¿Qué propiedad del color se refiere a la pureza o intensidad de un color?",
        answers: ["Saturación", "Brillo", "Tono"],
        correct: 0
    },
    {
        question: "¿Qué técnica fundamental se recomienda para asegurar que los usuarios puedan interactuar mediante otros dispositivos?",
        answers: ["Páginas estáticas", "Páginas con animaciones", "Páginas alternativas"],
        correct: 2
    },
    {
        question: "¿Cuál es la principal ventaja de usar hojas de estilo externas en CSS?",
        answers: [
            "No necesitan ser vinculadas en el del documento HTML",
            "Requieren menos mantenimiento que los estilos en línea",
            "Permiten cambiar la apariencia de una página web modificando solo un archivo"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta de analítica web permite realizar A/B Testing?",
        answers: ["Woopra", "Google Analytics", "AWStats"],
        correct: 1
    },
    {
        question: "¿Cuál es el formato de vídeo que está en retirada del mercado según el documento?",
        answers: ["MP4", "AVI", "Flash Video (FLV)"],
        correct: 2
    },
    {
        question: "¿Qué herramienta de analítica web permite averiguar qué es lo que llama más la atención al usuario?",
        answers: ["Crazy Egg", "Google Analytics Content Experiments", "Five Second Test"],
        correct: 2
    },
    {
        question: "¿Qué propiedad CSS se utiliza para definir el espaciado entre palabras?",
        answers: ["word-spacing", "letter-spacing", "word-spacings"],
        correct: 0
    },
    {
        question: "¿Qué herramienta de analítica web permite conocer el número exacto de clics registrados en cada elemento de la página?",
        answers: ["Google Analytics Content Experiments", "Crazy Egg", "Five Second Test"],
        correct: 1
    },
    {
        question: "¿Qué técnica CSS se recomienda para asegurar un buen contraste entre los colores de primer plano y de fondo?",
        answers: [
            "Usar colores predeterminados del navegador",
            "Usar números en vez de nombres para especificar colores",
            "Usar colores aleatorios"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la extensión de archivo estándar para una hoja de estilo en cascada?",
        answers: [".js", ".css", ".html"],
        correct: 1
    },
    {
        question: "¿Qué tipo de lenguaje de marcas se utiliza para describir fragmentos de texto sin especificar su representación?",
        answers: ["Marcas descriptivas", "Marcas de presentación", "Marcas de procedimientos"],
        correct: 0
    },
    {
        question: "¿Qué atributo se utiliza para definir una clase en una etiqueta HTML?",
        answers: ["ID", "STYLE", "CLASS"],
        correct: 2
    },
    {
        question: "¿Qué principio de diseño web amigable se refiere a la reducción del tiempo de espera del usuario?",
        answers: ["Eficiencia del usuario", "Reducción del tiempo de latencia", "Reversibilidad"],
        correct: 1
    },
    {
        question: "¿Qué propiedad CSS se utiliza para importar una hoja de estilo externa en una hoja incrustada?",
        answers: ["@link", "@stylesheet", "@import"],
        correct: 2
    },
    {
        question: "¿Qué principio de diseño web amigable se refiere a la consistencia con las expectativas de los usuarios?",
        answers: ["Consistencia", "Autonomía", "Anticipación"],
        correct: 0
    },
    {
        question: "¿Qué formato de imagen es ideal para Internet debido a su capacidad de compresión y uso de colores planos?",
        answers: ["PNG", "GIF", "JPEG"],
        correct: 1
    },
    {
        question: "¿Qué técnica de analítica web permite conocer las rutas de navegación de los usuarios?",
        answers: ["Rutas de navegación", "ClickMap", "A/B Testing"],
        correct: 0
    },
    {
        question: "¿Qué problema presentan las tablas en términos de accesibilidad?",
        answers: [
            "La información no queda ordenada de forma lógica",
            "Son difíciles de crear y manipular",
            "No son estables en diferentes navegadores"
        ],
        correct: 0
    },
    {
        question: "¿Qué nivel de adecuación de las WCAG garantiza un nivel mínimo de accesibilidad?",
        answers: ["Nivel AAA", "Nivel A", "Nivel AA"],
        correct: 1
    },
    {
        question: "¿Qué propiedad CSS se utiliza para definir el relleno interno de un elemento?",
        answers: ["padding", "border", "margin"],
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