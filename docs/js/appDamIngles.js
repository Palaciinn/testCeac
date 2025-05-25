const questions = [
  {
    question: "The sales team _______ a presentation to potential clients tomorrow morning.",
    answers: ["gives", "is giving", "none of the other answers is correct"],
    correct: 1
  },
  {
    question: "We are going to meet _____________ 4:00 p.m.",
    answers: ["at", "on", "in"],
    correct: 0
  },
  {
    question: "You ______________ go there with me. I can handle it. It’s not difficult.",
    answers: ["don't have to", "have to", "must"],
    correct: 0
  },
  {
    question: "We have art lesson _____________ Mondays.",
    answers: ["on", "in", "at"],
    correct: 0
  },
  {
    question: "He hasn't got __________ money",
    answers: ["a", "some", "any"],
    correct: 2
  },
  {
    question: "I _____________ give you a lift to the station. My car broke down yesterday.",
    answers: ["can", "can't", "will"],
    correct: 1
  },
  {
    question: "_____________ do you live with? I live with my parents.",
    answers: ["who", "what", "which"],
    correct: 0
  },
  {
    question: "______________ children do you have? I have two children.",
    answers: ["how many", "how long", "how much"],
    correct: 0
  },
  {
    question: "_____________ you bring me a glass of cold water, please?",
    answers: ["can", "could", "will"],
    correct: 1
  },
  {
    question: "I have ______________ been to Australia. I’d like to go next year for the first time.",
    answers: ["never", "just", "already"],
    correct: 0
  },
  {
    question: "When I ______________ (open) the fridge, I ______________ (see) that someone ______________ (eat) my sandwich.",
    answers: ["opened / saw / had eaten", "open / saw / eats", "opened / had seen / had eaten"],
    correct: 0
  },
  {
    question: "Jane ______________ (be) very pleased to see that Jonathan ______________ (tidy up) his bedroom.",
    answers: ["is / tidy up", "was / tidied up", "was / had tidied up"],
    correct: 2
  },
  {
    question: "I’ve worked in this company ______________ 17 years.",
    answers: ["since", "before", "for"],
    correct: 2
  },
  {
    question: "She ______________ hasn’t bought the tickets.",
    answers: ["just", "yet", "still"],
    correct: 2
  },
  {
    question: "The IT team ______________ the software update when the system ______________ .",
    answers: ["installed / crashed", "had installed / crashed", "was installing / crashed"],
    correct: 2
  },
  {
    question: "The IT department provides ______________ technical support to all employees.",
    answers: ["best", "better", "good"],
    correct: 1
  },
  {
    question: "The new employee proved to be ______________ the previous one.",
    answers: ["efficienter than", "more efficient than", "the efficientest"],
    correct: 1
  },
  {
    question: "Have you ______________ been to Portugal?",
    answers: ["ever", "just", "already"],
    correct: 0
  },
  {
    question: "Have you finished ______________?",
    answers: ["ever", "yet", "before"],
    correct: 1
  },
  {
    question: "They’ve lived in Seville ______________ 2002.",
    answers: ["during", "since", "for"],
    correct: 1
  },
  {
    question: "When I ______________ (get) to the airport I ______________ (realise) I ______________ (forget) the boarding card.",
    answers: ["got / realised / had forgotten", "was getting / realised / forgotten", "got / was realising / forgot"],
    correct: 0
  },
  {
    question: "The team leader is ______________ person in the department.",
    answers: ["the responsibliest", "the most responsible", "responsibler than"],
    correct: 1
  },
  {
    question: "I’ve ______________ washed the dishes. I did it this morning.",
    answers: ["just", "already", "never"],
    correct: 1
  },
  {
    question: "He’s ______________ phoned me to tell me he’s coming over.",
    answers: ["still", "just", "already"],
    correct: 1
  },
  {
    question: "D.H. Lawrence, _____________ was an English author, wrote many interesting novels.",
    answers: ["who", "that", "whom"],
    correct: 0
  },
  {
    question: "If they _____________ for a walk, they _____________ the lights off.",
    answers: ["had gone / would have turned", "go / would turn", "will go / will turn"],
    correct: 0
  },
  {
    question: "They couldn’t ______________ a negative impact on that operation.",
    answers: ["avoid get", "avoid to get", "avoid getting"],
    correct: 2
  },
  {
    question: "\"I think I left my keys at home,\" said Lisa.",
    answers: [
      "Lisa said she thinks she left her keys at home",
      "Lisa said she thought she had left her keys at home",
      "Lisa said she thinks she is leaving her keys at home"
    ],
    correct: 1
  },
  {
    question: "If I _____________ time, I _____________ shopping with you.",
    answers: ["had / will go", "had / would go", "have / would go"],
    correct: 1
  },
  {
    question: "The lady _____________ son plays football with me is the headteacher of my school.",
    answers: ["whose", "which", "who"],
    correct: 0
  },
  {
    question: "Mary asked, \"Can you pass me the book, please?\"",
    answers: [
      "Mary asked whether I could pass her the book",
      "Mary asked if you could pass me the book",
      "Mary asked whether she could pass me the book"
    ],
    correct: 0
  },
  {
    question: "\"I will call you tomorrow,\" said Jane.",
    answers: [
      "Jane said she would call me the next day",
      "Jane said she will call me the next day",
      "Jane said she called me the next day"
    ],
    correct: 0
  },
  {
    question: "If you _____________ English, you _____________ get along with them perfectly.",
    answers: ["speak / will", "spoke / would have", "speak / would"],
    correct: 0
  },
  {
    question: "\"If we don’t hurry up, we’ll miss the flight\".",
    answers: [
      "unless we hurry up, we'll miss the flight",
      "unless we miss the flight, we'll hurry up",
      "we will hurry up unless we miss the flight"
    ],
    correct: 0
  },
  {
    question: "Why is she here? She ______________ help your sister with her homework.",
    answers: ["will", "is going to", "was going to"],
    correct: 1
  },
  {
    question: "Shall we play tennis tomorrow? I’d like to, but I _____________ stay in and study for the test.",
    answers: ["am not going to", "will", "am going to"],
    correct: 2
  },
  {
    question: "Peter asked, \"What time does the movie start?\"",
    answers: [
      "Peter asked what time did the movie start",
      "Peter asked what time the movie start",
      "Peter asked what time the movie started"
    ],
    correct: 2
  },
  {
    question: "\"I am going to the store,\" said Sarah.",
    answers: [
      "Sarah said she was going to the store",
      "Sarah said she is going to the store",
      "Sarah said she had gone to the store"
    ],
    correct: 0
  },
  {
    question: "He didn’t go to the cinema yesterday because he ……….. write an essay.",
    answers: ["must", "need to", "had to"],
    correct: 2
  },
  {
    question: "The books …………. are on the table are mine.",
    answers: ["who", "which", "whose"],
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