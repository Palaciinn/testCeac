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
        <img src="../img/arrow_left_black.svg" class="toggle-icon collapsed" alt="Expandir/Contraer" />
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

  // Contraer todas las demás
  document.querySelectorAll('.pregunta-body').forEach(b => b.style.display = 'none');
  document.querySelectorAll('.toggle-icon').forEach(i => i.classList.add('collapsed'));

  // Expandir esta nueva
  const newBody = card.querySelector('.pregunta-body');
  const newIcon = card.querySelector('.toggle-icon');
  newBody.style.display = 'block';
  newIcon.classList.remove('collapsed');

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

      // Contraer todas
      document.querySelectorAll('.pregunta-body').forEach(b => b.style.display = 'none');
      document.querySelectorAll('.toggle-icon').forEach(i => i.classList.add('collapsed'));

      // Expandir esta si estaba colapsada
      if (!isVisible) {
        body.style.display = 'block';
        icon.classList.remove('collapsed');
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

document.getElementById('test-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const titulo = document.getElementById('title').value;
  const preguntas = [];

  document.querySelectorAll('.pregunta-card').forEach(card => {
    const index = card.dataset.index;
    const pregunta = card.querySelector(`[name=pregunta-${index}]`).value;
    const respuestas = [
      card.querySelector(`[name=respuesta1-${index}]`).value,
      card.querySelector(`[name=respuesta2-${index}]`).value,
      card.querySelector(`[name=respuesta3-${index}]`).value
    ];
    const correcta = parseInt(card.querySelector(`[name=correcta-${index}]`).value) - 1;

    preguntas.push({ question: pregunta, answers: respuestas, correct: correcta });
  });

  console.log({ titulo, preguntas });
});