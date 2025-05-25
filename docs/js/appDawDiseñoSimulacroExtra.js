const questions = [
    {
      question: "¿Cuál de los siguientes es un elemento conceptual en el diseño gráfico según Donis A. Dondis?",
      answers: ["El volumen", "La textura", "El color"],
      correct: 2
    },
    {
      question: "¿Qué característica debe tener una guía de estilo para ser considerada educativa?",
      answers: ["Debe incluir un diseño visual atractivo con muchos colores", "Debe ser breve y concisa para facilitar su lectura", "Debe ser rica en ejemplos y contar con criterios mínimos de usabilidad y estética"],
      correct: 2
    },
    {
      question: "¿Cuál es una de las principales ventajas de utilizar capas en la maquetación web?",
      answers: ["Son más fáciles de crear y manipular que las tablas", "Permiten una separación entre contenido y estructura que no se logra con tablas", "Ofrecen una mayor coherencia entre distintos navegadores web"],
      correct: 1
    },
    {
      question: "¿Qué tipo de lenguaje de marcas permite separar el formato del contenido, ofreciendo flexibilidad en la presentación?",
      answers: ["Marcas descriptivas", "Marcas de presentación", "Marcas de procedimientos"],
      correct: 0
    },
    {
      question: "¿Cuál es un problema que puede surgir en el ámbito de la ejecución en la interacción persona-ordenador?",
      answers: ["El usuario conoce el objetivo pero no las acciones necesarias para alcanzarlo", "El sistema no responde a las acciones del usuario", "El usuario no sabe cómo interpretar los cambios en el sistema"],
      correct: 0
    },
    {
      question: "¿Cuál es una de las propiedades físicas del color que afecta a su percepción?",
      answers: ["La saturación", "La dirección", "La textura"],
      correct: 0
    },
    {
      question: "¿Qué elemento de una interfaz web se sitúa en la parte superior y tiene igual anchura que la página?",
      answers: ["El pie", "El cuerpo", "El dintel"],
      correct: 2
    },
    {
      question: "¿Cuál es la principal ventaja de utilizar hojas de estilo externas en el desarrollo de aplicaciones web?",
      answers: ["Obligan al navegador a utilizar los estilos definidos en el documento HTML", "Permiten aplicar estilos diferentes a cada página web individualmente", "Facilitan el mantenimiento y permiten cambios globales desde un único archivo"],
      correct: 2
    },
    {
      question: "¿Qué método se utiliza para aplicar un estilo CSS a un elemento HTML específico sin asociarlo directamente a una etiqueta?",
      answers: ["Insertando un estilo en línea", "Utilizando un atributo ID", "Definiendo una clase y aplicándola con el atributo CLASS"],
      correct: 2
    },
    {
      question: "¿Qué tipo de hoja de estilo permite especificar cómo debe oírse un documento cuando es procesado como texto hablado?",
      answers: ["Hojas de estilo en cascada", "Hojas de estilo auditivas", "Hojas de estilo para imprimir"],
      correct: 1
    },
    {
      question: "¿Cuál es la función principal del validador de marcado de W3C?",
      answers: ["Comprobar la accesibilidad de una página web", "Validar la compatibilidad de enlaces en un documento", "Revisar el código HTML y señalar errores respecto al doctype"],
      correct: 2
    },
    {
      question: "¿Qué atributo se utiliza en una hoja de estilo para definir que sus estilos son aplicables solo al imprimir una página web?",
      answers: ["media=\"screen\"", "media=\"print\"", "media=\"all\""],
      correct: 1
    },
    {
      question: "¿Qué ventaja ofrece el uso de CSS en la presentación de documentos HTML?",
      answers: ["Permite definir estilos de presentación comunes en un único archivo", "Facilita la creación de documentos HTML sin necesidad de etiquetas", "Asegura que todos los navegadores muestren el contenido de la misma manera"],
      correct: 0
    },
    {
      question: "¿Qué herramienta de W3C permite verificar el correcto funcionamiento de los enlaces en un documento web?",
      answers: ["Validador del CSS de W3C", "Comprobador de enlaces de W3C", "Validador de marcado de W3C"],
      correct: 1
    },
    {
      question: "¿Cuál es el formato de imagen más adecuado para fotografías en la web debido a su capacidad de manejar tonos continuos?",
      answers: ["SVG", "JPEG", "GIF"],
      correct: 1
    },
    {
      question: "¿Qué tipo de derechos de propiedad intelectual permite al titular autorizar o prohibir la explotación de su obra?",
      answers: ["Derechos compensatorios", "Derechos patrimoniales", "Derechos morales"],
      correct: 1
    },
    {
      question: "¿Qué software es un ejemplo de herramienta gratuita para la edición de imágenes vectoriales?",
      answers: ["Adobe Illustrator", "Inkscape", "CorelDRAW"],
      correct: 1
    },
    {
      question: "¿Cuál es el efecto más utilizado en animaciones para controlar el grado de visibilidad de los objetos?",
      answers: ["Efecto de transparencia (Alpha)", "Efecto de brillo", "Efecto de tinta"],
      correct: 0
    },
    {
      question: "¿Qué formato de audio es conocido por ser un algoritmo de compresión con pérdida?",
      answers: ["MP3", "WAV", "FLAC"],
      correct: 0
    },
    {
      question: "¿Qué herramienta es mencionada como un editor de vídeo gratuito?",
      answers: ["Final Cut Pro", "Gimp", "Adobe Premiere Pro"],
      correct: 1
    },
    {
      question: "¿Qué tipo de animación se ha consolidado como formato predominante debido a la desaparición del formato Flash?",
      answers: ["GIF", "HTML5", "DHTML"],
      correct: 1
    },
    {
      question: "¿Cuál es una de las principales ventajas de utilizar gráficos vectoriales en la web?",
      answers: ["Permiten animaciones de poco peso y fácilmente redimensionables", "Son más fáciles de programar que los gráficos rasterizados", "No requieren ningún tipo de códec para su visualización"],
      correct: 0
    },
    {
      question: "¿Qué lenguaje es fundamental para modificar contenidos y funcionalidades en tecnologías web?",
      answers: ["CSS3", "JavaScript", "HTML5"],
      correct: 1
    },
    {
      question: "¿Qué elemento HTML5 permite mostrar u ocultar contenido sin programación avanzada?",
      answers: ["<canvas>", "<details> y <summary>", "<audio>"],
      correct: 1
    },
    {
      question: "¿Cuál es una de las características de los elementos interactivos básicos en una web?",
      answers: ["Son exclusivamente para la navegación entre páginas", "Solo se utilizan en sitios de comercio electrónico", "Permiten la interacción entre usuarios y la interfaz de manera visual y atractiva"],
      correct: 2
    },
    {
      question: "¿Qué librería basada en JavaScript es popular para añadir interactividad en la web?",
      answers: ["Bootstrap", "jQuery", "AngularJS"],
      correct: 1
    },
    {
      question: "¿Qué se necesita para reproducir correctamente archivos de vídeo en una página web?",
      answers: ["Un archivo de texto con subtítulos", "Un plugin específico para cada navegador", "Un códec de descompresión adecuado"],
      correct: 2
    },
    {
      question: "¿Qué tecnología ha reemplazado gradualmente al entorno propietario Flash para animaciones web?",
      answers: ["HTML5 y CSS3", "JavaScript puro", "Silverlight"],
      correct: 0
    },
    {
      question: "¿Cuál es uno de los principios básicos de la accesibilidad web según el documento?",
      answers: ["Flexibilidad", "Seguridad", "Interactividad"],
      correct: 0
    },
    {
      question: "¿Qué se debe proporcionar para el contenido multimedia basado en el tiempo según las pautas de accesibilidad?",
      answers: ["Alternativas textuales", "Alternativas visuales", "Alternativas para multimedia tempo-dependientes"],
      correct: 2
    },
    {
      question: "¿Qué herramienta de evaluación automática de accesibilidad es mencionada como la más extendida en español?",
      answers: ["TAW", "HERA", "Cynthia Says"],
      correct: 0
    },
    {
      question: "Según las WCAG, ¿qué técnica se debe usar para describir la función de cada elemento visual?",
      answers: ["Usar el atributo src", "Usar el atributo title", "Usar el atributo alt"],
      correct: 2
    },
    {
      question: "¿Qué nivel de adecuación corresponde al cumplimiento de todos los puntos de verificación de prioridad 1 y 2?",
      answers: ["Nivel AA", "Nivel AAA", "Nivel A"],
      correct: 0
    },
    {
      question: "¿Qué navegador permite deshabilitar imágenes, animaciones y JavaScript para mejorar la accesibilidad?",
      answers: ["Opera", "Mozilla Firefox", "Microsoft Edge"],
      correct: 0
    },
    {
      question: "¿Qué técnica CSS se recomienda para asegurar un buen contraste entre los colores de primer plano y de fondo?",
      answers: ["Usar imágenes para definir colores", "Usar números para especificar colores", "Usar nombres de colores"],
      correct: 2
    },
    {
      question: "Según Jakob Nielsen, ¿cuál es un aspecto fundamental para evitar la frustración en los usuarios al diseñar una web?",
      answers: ["La creatividad del diseño", "La originalidad de los contenidos", "La identificación del objetivo inmediato"],
      correct: 2
    },
    {
      question: "¿Qué técnica de analítica web permite comparar varios diseños de una misma página para analizar el comportamiento de las visitas?",
      answers: ["A/B Testing", "ClickMap", "Google Analytics Content Experiments"],
      correct: 0
    },
    {
      question: "¿Cuál es una de las reglas básicas al diseñar una interfaz de usuario para reducir la carga en la memoria del usuario?",
      answers: ["Dar el control al usuario", "Utilizar colores llamativos", "Lograr que la interfaz sea consistente"],
      correct: 2
    },
    {
      question: "¿Qué principio de diseño web amigable se refiere a permitir deshacer las acciones realizadas?",
      answers: ["Autonomía", "Consistencia", "Reversibilidad"],
      correct: 2
    },
    {
      question: "¿Cuál es una de las barreras identificadas por los usuarios que puede afectar a cualquier usuario, no solo a aquellos con discapacidades?",
      answers: ["Discapacidades que afectan al usuario en la web", "Dificultades de entorno o contexto", "Dificultades debido al diseño del documento"],
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