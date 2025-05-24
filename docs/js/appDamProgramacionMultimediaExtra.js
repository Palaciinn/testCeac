const questions = [
    {
      question: "¿Cuáles una de las principales limitaciones de hardware en dispositivos móviles que afecta al diseño de aplicaciones?",
      answers: [
        "La falta de conectividad a internet.",
        "La capacidad limitada de memoria RAM.",
        "La imposibilidad de utilizar pantallas táctiles."
      ],
      correct: 1
    },
    {
      question: "¿Qué característica de Android permite a los desarrolladores distribuir sus aplicaciones de manera amplia?",
      answers: [
        "Es un sistema operativo de libre distribución.",
        "Su código fuente es completamente cerrado.",
        "Solo se puede usar en dispositivos fabricados por Google."
      ],
      correct: 0
    },
    {
      question: "¿Cuál es una de las acciones principales que se pueden realizar en una pantalla táctil de un dispositivo móvil?",
      answers: [
        "Despliegue de menús secundarios.",
        "Uso de la rueda para desplazamientos.",
        "Arrastrar y soltar (drag & drop)."
      ],
      correct: 2
    },
    {
      question: "¿Qué sistema operativo para dispositivos móviles es conocido por su integración con el marketplace App Store?",
      answers: [
        "Android",
        "Tizen OS",
        "iOS"
      ],
      correct: 2
    },
    {
      question: "¿Qué herramienta es esencial para probar aplicaciones móviles durante su desarrollo en un entorno de escritorio?",
      answers: [
        "Un compilador de código.",
        "Un emulador.",
        "Un editor de texto."
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una de las fases del ciclo de vida de una aplicación móvil gestionada por el AMS?",
      answers: [
        "Desarrollo",
        "Ejecución",
        "Diseño"
      ],
      correct: 1
    },
    {
      question: "¿Qué perfil de J2ME proporciona soporte para la interfaz de usuario en aplicaciones móviles?",
      answers: [
        "Foundation Profile",
        "Personal Basis Profile",
        "Personal Profile"
      ],
      correct: 2
    },
    {
      question: "¿Qué componente de la arquitectura de Android permite el acceso al hardware del dispositivo?",
      answers: [
        "Android Runtime",
        "Framework de aplicación",
        "Linux Kernel"
      ],
      correct: 2
    },
    {
      question: "¿Cuál es el propósito principal del archivo AndroidManifest.xml en una aplicación Android?",
      answers: [
        "Almacenar imágenes y recursos gráficos",
        "Proporcionar información esencial de la aplicación",
        "Gestionar la base de datos SQLite"
      ],
      correct: 1
    },
    {
      question: "¿Qué método se utiliza para iniciar un servicio en segundo plano en Android?",
      answers: [
        "bindService()",
        "startService()",
        "onCreate()"
      ],
      correct: 1
    },
    {
      question: "¿Qué clase en Android se utiliza para definir estilos y colores en gráficos 2D?",
      answers: [
        "Canvas",
        "Paint",
        "Path"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es el método de la clase Thread que se utiliza para iniciar un nuevo hilo de ejecución en Android?",
      answers: [
        "run()",
        "start()",
        "execute()"
      ],
      correct: 1
    },
    {
      question: "¿Qué protocolo de comunicación es utilizado directamente por los servicios REST en Android?",
      answers: [
        "TCP",
        "HTTP",
        "FTP"
      ],
      correct: 1
    },
    {
      question: "¿Qué API de Android se utiliza para gestionar la conectividad Wi-Fi?",
      answers: [
        "android.bluetooth",
        "android.net.wifi.WifiManager",
        "android.telephony.gsm"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es el formato de archivo más utilizado para la compresión de audio con pérdida?",
      answers: [
        "WAV",
        "FLAC",
        "MP3"
      ],
      correct: 2
    },
    {
      question: "¿Qué clase de Android permite la reproducción de audio o vídeo desde ficheros o streams mediante URL externas?",
      answers: [
        "MediaRecorder",
        "MediaPlayer",
        "VideoView"
      ],
      correct: 1
    },
    {
      question: "¿Qué formato de imagen es conocido por su capacidad de mostrar fondos transparentes y un mayor nivel de compresión?",
      answers: [
        "JPG",
        "GIF",
        "PNG"
      ],
      correct: 2
    },
    {
      question: "¿Cuál es el protocolo estándar para la transmisión de información en tiempo real, como audio y vídeo?",
      answers: [
        "RTP",
        "HTTP",
        "FTP"
      ],
      correct: 0
    },
    {
      question: "¿Qué clase de Android se utiliza para grabar audio y vídeo mediante el hardware del dispositivo?",
      answers: [
        "MediaPlayer",
        "MediaRecorder",
        "AudioManager"
      ],
      correct: 1
    },
    {
      question: "¿Qué formato de vídeo es conocido por su método de compresión que permite archivos de menor tamaño con buena calidad?",
      answers: [
        "AVI",
        "MOV",
        "MPEG-4"
      ],
      correct: 2
    },
    {
      question: "¿Qué clase de Android permite la implementación de reproducción de vídeo?",
      answers: [
        "VideoView",
        "MediaPlayer",
        "AsyncPlayer"
      ],
      correct: 0
    },
    {
      question: "¿Qué tipo de archivos de audio son guardados sin compresión alguna, resultando en archivos de gran tamaño?",
      answers: [
        "Archivos de audio con pérdida",
        "Archivos de audio sin compresión",
        "Archivos de audio sin pérdida"
      ],
      correct: 1
    },
    {
      question: "¿Qué clase de Android gestiona contenido multimedia para varias propiedades del sistema, como tonos del teléfono y volumen?",
      answers: [
        "AudioManager",
        "MediaRecorder",
        "JetPlayer"
      ],
      correct: 0
    },
    {
      question: "¿Qué formato de archivo es ampliamente utilizado por Apple para su marketplace de música?",
      answers: [
        "MP3",
        "AAC",
        "MIDI"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es la fase del desarrollo de videojuegos donde se realiza el ensamblaje de todos los componentes y la minificación de código?",
      answers: [
        "Diseño",
        "Producción",
        "Posproducción"
      ],
      correct: 2
    },
    {
      question: "¿Qué tipo de luz en los videojuegos representa un foco de luz lejano con rayos paralelos?",
      answers: [
        "Point lights",
        "Directional lights",
        "Spot lights"
      ],
      correct: 1
    },
    {
      question: "¿Qué operación en un grafo de escena se encarga de estudiar la visibilidad de los elementos?",
      answers: [
        "Inicialización",
        "Simulación",
        "Culling"
      ],
      correct: 2
    },
    {
      question: "¿Qué técnica de optimización se centra en mejorar funciones o procesos en bucle para reducir el consumo de recursos?",
      answers: [
        "Optimización global",
        "Optimización local",
        "Optimización de shaders"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es la principal función del motor de inteligencia artificial en los videojuegos?",
      answers: [
        "Proporcionar efectos visuales avanzados",
        "Introducir la ilusión de inteligencia en elementos no controlados por el usuario",
        "Gestionar la reproducción de sonidos en tiempo real"
      ],
      correct: 1
    },
    {
      question: "¿Qué clase de Android permite recibir paquetes de red mediante el protocolo RTP?",
      answers: [
        "AudioStream",
        "RtpStream",
        "AudioCodec"
      ],
      correct: 1
    },
    {
      question: "¿Qué formato de imagen es favorito en internet debido a su capacidad para animar imágenes?",
      answers: [
        "SVG",
        "GIF",
        "PNG"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es una de las principales características de los IDE para videojuegos?",
      answers: [
        "Permiten la edición de código exclusivamente",
        "Incorporan librerías de objetos 2D y 3D",
        "No permiten la integración con motores de juegos"
      ],
      correct: 1
    },
    {
      question: "¿Qué sistema de coordenadas utiliza un eje vertical, un eje radial y un ángulo de rotación?",
      answers: [
        "Coordenadas cartesianas",
        "Coordenadas esféricas",
        "Coordenadas cilíndricas"
      ],
      correct: 2
    },
    {
      question: "¿Qué tipo de shader se encarga de modificar las propiedades de los píxeles de los objetos gráficos?",
      answers: [
        "Vertex shader",
        "Geometry shader",
        "Pixel shader"
      ],
      correct: 2
    },
    {
      question: "¿Qué componente del motor de juegos es responsable de la simulación de movimientos físicos y colisiones?",
      answers: [
        "Motor de inteligencia artificial",
        "Motor de sonidos",
        "Motor de físicas"
      ],
      correct: 2
    },
    {
      question: "¿Qué ventaja ofrece la utilización de un motor de juegos en el desarrollo de videojuegos?",
      answers: [
        "Permite la creación de videojuegos sin necesidad de hardware",
        "Facilita la reusabilidad de componentes desarrollados",
        "Aumenta la complejidad del desarrollo"
      ],
      correct: 1
    },
    {
      question: "¿Qué tipo de motor de juegos permite crear videojuegos sin necesidad de conocer en profundidad los lenguajes de programación?",
      answers: [
        "Motores completos",
        "Herramientas de creación",
        "Frameworks de videojuegos"
      ],
      correct: 1
    },
    {
      question: "¿Qué módulo del motor gráfico se encarga de la presentación del contenido en la escena?",
      answers: [
        "Módulo de optimizaciones y grafos de escenas",
        "Módulo de efectos visuales",
        "Módulo front-end"
      ],
      correct: 2
    },
    {
      question: "¿Qué técnica emplea el componente de gestión de redes para evitar la latencia en las comunicaciones de videojuegos en línea?",
      answers: [
        "Uso de inteligencia artificial para predecir movimientos",
        "Limitación de los datos compartidos",
        "Implementación de gráficos de alta resolución"
      ],
      correct: 1
    },
    {
      question: "¿Qué característica define a los agentes inteligentes en los motores de inteligencia artificial?",
      answers: [
        "Capacidad de generar efectos sonoros",
        "Capacidad de percepción y toma de decisiones",
        "Capacidad de renderizar gráficos en 3D"
      ],
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