const questions = [
    {
        question: "¿Qué formato de archivo de audio es el más utilizado en aplicaciones informáticas y dispositivos móviles?",
        answers: ["MP3", "WAV", "AIFF"],
        correct: 0
    },
    {
        question: "¿Qué herramienta es el IDE oficial de Google para el desarrollo de aplicaciones Android?",
        answers: ["IntelliJ IDEA", "Android Studio", "Netbeans"],
        correct: 1
    },
    {
        question: "¿Qué clase de Android permite la visualización de controles estándar para MediaPlayer?",
        answers: ["AsyncPlayer", "MediaController", "VideoView"],
        correct: 1
    },
    {
        question: "¿Qué módulo del motor de físicas es responsable de gestionar las colisiones entre los elementos del videojuego?",
        answers: [
            "Módulo de representación de sistemas",
            "Módulo de simulación dinámica",
            "Módulo detector de colisiones"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es una de las principales limitaciones de hardware en dispositivos móviles?",
        answers: ["Procesador", "Batería", "Tarjeta gráfica"],
        correct: 1
    },
    {
        question: "¿Qué tipo de juegos se caracterizan por requerir velocidad de respuesta del usuario?",
        answers: ["Acción", "Simuladores", "Estrategia"],
        correct: 0
    },
    {
        question: "¿Qué tipo de transformación en 3D se realiza proporcionando el factor de escala del objeto?",
        answers: ["Traslación absoluta", "Escalado", "Rotación"],
        correct: 1
    },
    {
        question: "¿Qué tipo de luz en los videojuegos representa un foco de luz lejano?",
        answers: ["Point lights", "Directional lights", "Spot lights"],
        correct: 1
    },
    {
        question: "¿Qué componente de la arquitectura Android permite el acceso al hardware del dispositivo?",
        answers: ["Framework de aplicación", "Android Runtime", "Linux Kernel"],
        correct: 2
    },
    {
        question: "¿Qué método de la clase View.OnClickListener se llama cuando el usuario selecciona un elemento?",
        answers: ["onClick()", "onFocusChange()", "onLongClick()"],
        correct: 0
    },
    {
        question: "¿Cuál es la principal función del motor de físicas en un videojuego?",
        answers: [
            "Generar efectos de sonido",
            "Renderizar gráficos en 2D y 3D",
            "Gestionar las simulaciones físicas de los objetos"
        ],
        correct: 2
    },
    {
        question: "¿Qué sistema operativo móvil fue inicialmente diseñado en 2007 para el iPhone?",
        answers: ["Android", "iOS", "Tizen OS"],
        correct: 1
    },
    {
        question: "¿Qué herramienta IDE es una versión específica para Unity?",
        answers: ["MonoDevelop for Unity", "StencylWorks", "Unreal Engine"],
        correct: 0
    },
    {
        question: "¿Qué tipo de transformación en 3D se realiza mediante un vector con diferentes argumentos?",
        answers: ["Rotación", "Escalado", "Traslación absoluta"],
        correct: 2
    },
    {
        question: "¿Qué motor de juegos es conocido por su uso en el desarrollo de juegos de estrategia como Civilization VI?",
        answers: ["Unity", "Unreal Engine", "Godot"],
        correct: 0
    },
    {
        question: "¿Cuál es la principal característica del formato de vídeo MPEG-4?",
        answers: [
            "Capacidad de mostrar fondos transparentes",
            "Método de compresión y codificación de datos",
            "Uso de capas para el alojamiento de diferentes fuentes de datos"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es el IDE más utilizado para el desarrollo de aplicaciones Android?",
        answers: ["Eclipse", "Android Studio", "IntelliJ IDEA"],
        correct: 1
    },
    {
        question: "¿Qué emulador utiliza máquinas virtuales sobre Virtual Box para probar aplicaciones móviles?",
        answers: ["AMI DuOS", "Genymotion", "App Runtime for Chrome"],
        correct: 1
    },
    {
        question: "¿Qué clase de Android proporciona la funcionalidad de combinar altavoces y micrófonos de los dispositivos?",
        answers: ["RtpStream", "AudioGroup", "AudioStream"],
        correct: 1
    },
    {
        question: "¿Qué clase de Android permite crear una instancia a los objetos de tipo audio basándose en la clase RtpStream?",
        answers: ["AudioCodec", "AudioStream", "AudioGroup"],
        correct: 1
    },
    {
        question: "¿Qué IDE es distribuido por Apple para desarrollar aplicaciones iOS?",
        answers: ["Basic 4 iOS", "XCode", "Visual Studio"],
        correct: 1
    },
    {
        question: "¿Qué formato de archivo de imagen es conocido por su capacidad de mostrar fondos transparentes?",
        answers: ["PNG", "JPG", "GIF"],
        correct: 0
    },
    {
        question: "¿Qué método se llama cuando una tecla es pulsada por el usuario en Android?",
        answers: [
            "onKeyDown(int keyCode, KeyEvent e)",
            "onTouchEvent(MotionEvent me)",
            "onKeyUp(int keyCode, KeyEvent e)"
        ],
        correct: 0
    },
    {
        question: "¿Qué motor de inteligencia artificial se utiliza para introducir la ilusión de inteligencia en los elementos del juego?",
        answers: [
            "Módulo de simulación dinámica",
            "Agentes inteligentes",
            "Módulo de representación de sistemas"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de aplicaciones se pueden crear con J2ME?",
        answers: ["MIDlets", "Applets", "Servlets"],
        correct: 0
    },
    {
        question: "¿Qué clase de Android implementa un sistema de identificación facial que usa la cámara del dispositivo?",
        answers: ["Camera", "MediaRecorder", "FaceDetector"],
        correct: 2
    },
    {
        question: "¿Qué API en Android se utiliza para la gestión de conexiones Bluetooth?",
        answers: ["android.bluetooth", "android.telephony", "android.net.wifi"],
        correct: 0
    },
    {
        question: "¿Qué librería gráfica es una variante simplificada de OpenGL diseñada para dispositivos integrados?",
        answers: ["SDL", "OpenGL ES", "DirectX"],
        correct: 1
    },
    {
        question: "¿Qué motor de juegos permite crear videojuegos sin necesidad de conocer en profundidad los lenguajes de programación?",
        answers: ["Game Maker: Studio", "Unity", "Unreal Engine"],
        correct: 0
    },
    {
        question: "¿Qué clase de Android reproduce audio y vídeo interactivo creado con JetCreator?",
        answers: ["JetPlayer", "MediaRecorder", "MediaPlayer"],
        correct: 0
    },
    {
        question: "¿Qué sistema operativo móvil fue creado originalmente por la compañía Android en 2003?",
        answers: ["Android", "Tizen OS", "iOS"],
        correct: 0
    },
    {
        question: "¿Qué clase en Android se utiliza para crear un nuevo hilo de ejecución?",
        answers: ["Runnable", "Thread", "AsyncTask"],
        correct: 1
    },
    {
        question: "¿Qué herramienta IDE permite desarrollar videojuegos de tipo arcade?",
        answers: ["Arcade Game Studio", "MonoDevelop for Unity", "StencylWorks"],
        correct: 0
    },
    {
        question: "¿Qué tipo de perfil de J2ME amplía el Foundation Profile con paquetes para la interfaz de usuario?",
        answers: [
            "Personal Basis Profile",
            "Mobile Information Device Profile (MIDP)",
            "Personal Profile"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de shader se encarga de modificar las propiedades de los píxeles?",
        answers: ["Geometry shader", "Pixel shader", "Vertex shader"],
        correct: 1
    },
    {
        question: "¿Qué motor de juegos es conocido por su uso en el desarrollo de juegos de acción como Fortnite?",
        answers: ["Godot", "Unity", "Unreal Engine"],
        correct: 2
    },
    {
        question: "¿Qué clase en Android se utiliza para definir trazados a partir de segmentos y curvas?",
        answers: ["Canvas", "Path", "Paint"],
        correct: 1
    },
    {
        question: "¿Qué tipo de shader modifica las propiedades de los vértices del objeto gráfico?",
        answers: ["Pixel shader", "Vertex shader", "Geometry shader"],
        correct: 1
    },
    {
        question: "¿Qué fase del desarrollo de videojuegos incluye la creación del guion y diseño gráfico?",
        answers: ["Diseño", "Producción", "Post-producción"],
        correct: 0
    },
    {
        question: "¿Qué clase en Android facilita la creación y soporte de versiones futuras de bases de datos?",
        answers: ["ContentProvider", "SQLiteDatabase", "SQLiteOpenHelper"],
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