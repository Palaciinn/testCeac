const questions = [
    {
      question: "¿Qué tipo de innovación se caracteriza por añadir valor a productos, procesos y sistemas de organización mediante cambios que respetan la esencia de lo que existía anteriormente?",
      answers: ["Innovación radical", "Innovación incremental", "Innovación de marketing"],
      correct: 1
    },
    {
      question: "¿Cuál es una de las principales motivaciones de las personas emprendedoras con perfil tecnológico?",
      answers: ["Desarrollar innovaciones aplicando resultados de la investigación científica", "Lograr el máximo beneficio económico", "Mejorar las condiciones de vida de los demás"],
      correct: 0
    },
    {
      question: "¿Qué perfil de la persona emprendedora se centra en habilidades mentales, rasgos de liderazgo y motivación?",
      answers: ["Perfil sociológico", "Perfil psicológico", "Perfil demográfico"],
      correct: 1
    },
    {
      question: "¿Qué tipo de innovación se refiere a cambios en la dirección y organización de la actividad productiva y comercial de una empresa?",
      answers: ["Innovación en el producto", "Innovación organizacional", "Innovación de marketing"],
      correct: 1
    },
    {
      question: "¿Qué aspecto es fundamental para que el sistema formativo fomente la existencia de personas emprendedoras?",
      answers: ["La existencia de un marco político favorable", "La complejidad del sistema legal", "Proporcionar medios para el desarrollo de capacidades necesarias para emprender"],
      correct: 2
    },
    {
      question: "¿Cuál es el objetivo principal de una empresa con ánimo de lucro?",
      answers: ["Desarrollar sus fines sociales", "Conseguir beneficios para retribuir a sus propietarios o accionistas", "Generar puestos de trabajo"],
      correct: 1
    },
    {
      question: "¿Qué función específica de la empresa se centra en la captación y administración de recursos financieros?",
      answers: ["Función financiera", "Función de producción", "Función comercial"],
      correct: 0
    },
    {
      question: "¿Cómo se denomina el sector que agrupa a las empresas dedicadas a la distribución y comercialización de productos y servicios?",
      answers: ["Sector primario", "Sector secundario", "Sector terciario"],
      correct: 2
    },
    {
      question: "¿Qué tipo de entorno se caracteriza por cambios que son difíciles de interpretar debido a la influencia de múltiples variables?",
      answers: ["Entorno simple", "Entorno complejo", "Entorno estable"],
      correct: 1
    },
    {
      question: "¿Cuál es el principio de la identidad visual corporativa que busca que la imagen sea percibida de la misma manera en cualquier parte del mundo?",
      answers: ["Principio de diferenciación", "Principio de universalidad", "Principio de formalización"],
      correct: 1
    },
    {
      question: "¿Qué modelo de organización empresarial se basa en la especialización y permite que un operario informe a más de un responsable?",
      answers: ["Modelo jerárquico", "Modelo funcional", "Modelo mixto"],
      correct: 1
    },
    {
      question: "¿Qué área del balance social se refiere a las acciones de la empresa hacia su personal trabajador?",
      answers: ["Área interna", "Área externa", "Relaciones con la comunidad"],
      correct: 0
    },
    {
      question: "¿Qué tipo de responsabilidad tiene un empresario individual o autónomo?",
      answers: ["Limitada al capital aportado", "Limitada a los bienes de la empresa", "Ilimitada a los bienes presentes y futuros"],
      correct: 2
    },
    {
      question: "¿Cuál es el capital mínimo necesario para constituir una sociedad anónima (S.A.)?",
      answers: ["3.000€", "60.000€", "1€"],
      correct: 1
    },
    {
      question: "¿Qué documento acredita que el nombre de una sociedad no está registrado previamente?",
      answers: ["Número de Identificación Fiscal (NIF)", "Escritura Pública de Constitución", "Certificación negativa del nombre"],
      correct: 2
    },
    {
      question: "¿Qué tipo de financiación consiste en obtener recursos económicos de amigos, familiares y personas que confían en la idea del emprendedor?",
      answers: ["Business Angels", "Crowdfunding", "Tres efes (FFF)"],
      correct: 2
    },
    {
      question: "¿Qué tipo de empresa se clasifica como perteneciente al sector cuaternario?",
      answers: ["Una empresa de investigación y desarrollo (I+D)", "Una empresa agrícola", "Una empresa de transporte"],
      correct: 0
    },
    {
      question: "¿Qué trámite debe realizarse en el Ayuntamiento antes de iniciar la actividad de una empresa en un local comercial?",
      answers: ["Inscripción en el Registro Mercantil", "Licencia de actividades e instalaciones", "Solicitud del NIF"],
      correct: 1
    },
    {
      question: "¿Qué función administrativa se considera esencial para el funcionamiento óptimo de una empresa?",
      answers: ["La función económico-administrativa", "La función de producción", "La función de ventas"],
      correct: 0
    },
    {
      question: "¿Cuál es el objetivo principal de la contabilidad en una empresa?",
      answers: ["Generar ingresos directos", "Proporcionar información económica para la toma de decisiones", "Reducir el número de empleados"],
      correct: 1
    },
    {
      question: "¿Qué se debe hacer al final del ejercicio económico según el ciclo contable?",
      answers: ["Realizar un inventario inicial", "Elaborar las cuentas anuales", "Iniciar un nuevo ciclo sin cerrar el anterior"],
      correct: 1
    },
    {
      question: "¿Qué tipo de activo se espera que se convierta en dinero líquido en menos de un año?",
      answers: ["Activo corriente", "Activo intangible", "Activo no corriente"],
      correct: 0
    },
    {
      question: "¿Qué documento contable muestra el valor del patrimonio de una empresa en un momento dado?",
      answers: ["El libro diario", "El libro de inventarios", "El balance"],
      correct: 2
    },
    {
      question: "¿Qué principio contable establece que los efectos de las transacciones deben registrarse cuando ocurren?",
      answers: ["Principio de devengo", "Principio de uniformidad", "Principio de prudencia"],
      correct: 0
    },
    {
      question: "¿Qué se requiere para que un asiento contable esté cuadrado?",
      answers: ["Que el debe sea mayor que el haber", "Que el haber sea mayor que el debe", "Que el debe y el haber sean iguales"],
      correct: 2
    },
    {
      question: "¿Cuál es el principal objetivo de una empresa según el documento?",
      answers: ["Contribuir al desarrollo local", "Obtener beneficios", "Crear empleo"],
      correct: 1
    },
    {
      question: "¿Cómo se clasifica una empresa que opera en varios países?",
      answers: ["Nacional", "Multinacional", "Local"],
      correct: 1
    },
    {
      question: "¿Qué función tiene el departamento comercial en una empresa?",
      answers: ["Gestionar las compras y ventas", "Administrar recursos humanos", "Producción de bienes"],
      correct: 0
    },
    {
      question: "¿Qué tipo de mercado se caracteriza por tener un solo vendedor y muchos compradores?",
      answers: ["Oligopolio", "Competencia perfecta", "Monopolio"],
      correct: 2
    },
    {
      question: "¿Qué factor influye directamente en la demanda de un producto?",
      answers: ["Tamaño de la empresa", "Estructura del organigrama", "Renta disponible y su distribución"],
      correct: 2
    },
    {
      question: "¿Cuál es una de las principales funciones del marketing según el documento?",
      answers: ["Reducir costos de producción", "Aumentar las ventas de productos o servicios", "Desarrollar nuevos productos"],
      correct: 1
    },
    {
      question: "¿Qué estrategia de precio se utiliza cuando se fija un precio inferior al de la competencia para aumentar las ventas?",
      answers: ["Precio igual al de la competencia", "Precio por debajo del de la competencia", "Precio por encima del de la competencia"],
      correct: 1
    },
    {
      question: "¿Qué estilo de liderazgo se caracteriza por no imponer control sobre el grupo y permitir decisiones individuales?",
      answers: ["Permisivo o laissez faire", "Autocrático", "Democrático"],
      correct: 0
    },
    {
      question: "¿Qué tipo de motivación se basa en la satisfacción personal sin necesidad de recompensas externas?",
      answers: ["Motivación extrínseca", "Motivación dual", "Motivación intrínseca"],
      correct: 2
    },
    {
      question: "¿Qué perfil emprendedor se relaciona con los valores, costumbres, normas y formas de vida?",
      answers: ["Perfil sociológico", "Perfil psicológico", "Perfil técnico"],
      correct: 0
    },
    {
      question: "¿Qué documento se utiliza para realizar el registro oficial de la constitución de una empresa?",
      answers: ["Estatutos sociales", "Escritura pública de constitución", "Certificado de empadronamiento"],
      correct: 1
    },
    {
      question: "¿Qué determina el tamaño de una empresa según la Unión Europea?",
      answers: ["El número de trabajadores y volumen de negocios anual", "La ubicación geográfica", "El tipo de productos"],
      correct: 0
    },
    {
      question: "¿Qué empresa pertenece al sector terciario?",
      answers: ["Un colegio", "Una constructora", "Una granja"],
      correct: 0
    },
    {
      question: "¿Qué se considera activo no corriente?",
      answers: ["Un ordenador comprado para uso en oficina", "Dinero en caja", "Mercancía almacenada"],
      correct: 0
    },
    {
        question: "¿Qué instrumento permite conocer los puntos fuertes y débiles de una empresa, así como las oportunidades y amenazas del entorno?",
        answers: ["Análisis DAFO", "Benchmarking", "Plan de empresa"],
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