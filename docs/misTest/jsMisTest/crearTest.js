import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ttmzucvzmbuahakmauvz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXp1Y3Z6bWJ1YWhha21hdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzE3MjIsImV4cCI6MjA2Mzc0NzcyMn0.Npeft23fnGss2PTDbWd2CkdCRFFBhc_1TtZqb1N7JVI'
);

const preguntasContainer = document.getElementById('preguntas-container');
const btnAgregar = document.getElementById('btn-agregar-pregunta');

btnAgregar.addEventListener('click', agregarPregunta);

function agregarPregunta() {
  const index = preguntasContainer.children.length + 1;

  const card = document.createElement('div');
  card.classList.add('pregunta-card');
  card.setAttribute('data-index', index);

  card.innerHTML = `
    <div class="pregunta-header">
      <h3>Pregunta ${index}</h3>
      <div class="pregunta-actions">
        <span class="material-symbols-outlined toggle-icon">chevron_left</span>
        <button class="delete-btn" title="Eliminar">
          <img src="../img/trash_icon.svg" alt="Eliminar" />
        </button>
      </div>
    </div>
    <div class="pregunta-body">
      <input type="text" name="pregunta-${index}" placeholder="Introduce la pregunta" />
      <input type="text" name="respuesta1-${index}" placeholder="Respuesta 1" />
      <input type="text" name="respuesta2-${index}" placeholder="Respuesta 2" />
      <input type="text" name="respuesta3-${index}" placeholder="Respuesta 3" />
      <input type="number" name="correcta-${index}" placeholder="Respuesta correcta (1-3)" min="1" max="3" />
    </div>
  `;

  preguntasContainer.appendChild(card);

  document.querySelectorAll('.pregunta-body').forEach(b => b.style.display = 'none');
  document.querySelectorAll('.toggle-icon').forEach(i => i.classList.remove('expanded'));

  const newBody = card.querySelector('.pregunta-body');
  const newIcon = card.querySelector('.toggle-icon');
  newBody.style.display = 'block';
  newIcon.classList.add('expanded');

  actualizarEventos();
}

function actualizarEventos() {
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.onclick = () => {
      btn.closest('.pregunta-card').remove();
      reordenarPreguntas();
    };
  });

  document.querySelectorAll('.toggle-icon').forEach(icon => {
    icon.onclick = () => {
      const card = icon.closest('.pregunta-card');
      const body = card.querySelector('.pregunta-body');
      const isVisible = body.style.display !== 'none';

      document.querySelectorAll('.pregunta-body').forEach(b => b.style.display = 'none');
      document.querySelectorAll('.toggle-icon').forEach(i => i.classList.remove('expanded'));

      if (!isVisible) {
        body.style.display = 'block';
        icon.classList.add('expanded');
      }
    };
  });
}

function reordenarPreguntas() {
  document.querySelectorAll('.pregunta-card').forEach((card, i) => {
    card.setAttribute('data-index', i + 1);
    card.querySelector('h3').textContent = `Pregunta ${i + 1}`;
  });
}

document.getElementById('test-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const titulo = document.getElementById('title').value.trim();
  const preguntas = [];

  document.querySelectorAll('.pregunta-card').forEach(card => {
    const index = card.dataset.index;
    const pregunta = card.querySelector(`[name=pregunta-${index}]`).value.trim();
    const respuestas = [
      card.querySelector(`[name=respuesta1-${index}]`).value.trim(),
      card.querySelector(`[name=respuesta2-${index}]`).value.trim(),
      card.querySelector(`[name=respuesta3-${index}]`).value.trim()
    ];
    const correcta = parseInt(card.querySelector(`[name=correcta-${index}]`).value) - 1;

    if (pregunta && respuestas.every(r => r !== "") && !isNaN(correcta)) {
      preguntas.push({ question: pregunta, answers: respuestas, correct: correcta });
    }
  });

  if (!titulo || preguntas.length === 0) {
    alert("Debes completar al menos una pregunta válida.");
    return;
  }

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    alert("Debes iniciar sesión para guardar tu test.");
    return;
  }

  const inserts = preguntas.map(p => ({
    test_title: titulo,
    question: p.question,
    answers: p.answers,
    correct: p.correct,
    user_id: user.id
  }));

  const { error } = await supabase.from('user_tests_questions').insert(inserts);

  if (error) {
    console.error("Error al guardar:", error);
    alert("Error al guardar el test.");
  } else {
    alert("✅ Test guardado correctamente");
  }
});