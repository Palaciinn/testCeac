const preguntasContainer = document.getElementById('preguntas-container');
const btnAgregar = document.getElementById('btn-agregar-pregunta');

btnAgregar.addEventListener('click', () => {
  const preguntaIndex = preguntasContainer.children.length + 1;

  const bloque = document.createElement('div');
  bloque.classList.add('pregunta-bloque');
  bloque.setAttribute('data-index', preguntaIndex);

  bloque.innerHTML = `
    <div class="pregunta-header">
      <h3>Pregunta ${preguntaIndex}</h3>
      <div class="pregunta-actions">
        <button class="toggle-btn" type="button">🔽</button>
        <button class="delete-btn" type="button"><img src="../img/trash_icon.svg" alt="Eliminar"></button>
      </div>
    </div>
    <div class="pregunta-body">
      <label>Pregunta:</label>
      <input type="text" name="pregunta-${preguntaIndex}" placeholder="Introduce la pregunta">

      <label>Respuesta 1:</label>
      <input type="text" name="respuesta1-${preguntaIndex}" placeholder="Opción 1">

      <label>Respuesta 2:</label>
      <input type="text" name="respuesta2-${preguntaIndex}" placeholder="Opción 2">

      <label>Respuesta 3:</label>
      <input type="text" name="respuesta3-${preguntaIndex}" placeholder="Opción 3">

      <label>Respuesta correcta (1-3):</label>
      <input type="number" min="1" max="3" name="correcta-${preguntaIndex}" placeholder="Ej: 2">
    </div>
  `;

  preguntasContainer.appendChild(bloque);
  actualizarEventos();
});

function actualizarEventos() {
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.onclick = () => {
      btn.closest('.pregunta-bloque').remove();
      reordenarPreguntas();
    };
  });

  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.onclick = () => {
      const bloque = btn.closest('.pregunta-bloque');
      const cuerpo = bloque.querySelector('.pregunta-body');
      document.querySelectorAll('.pregunta-body').forEach(el => {
        if (el !== cuerpo) el.style.display = 'none';
      });
      cuerpo.style.display = cuerpo.style.display === 'none' ? 'block' : 'none';
    };
  });
}

function reordenarPreguntas() {
  document.querySelectorAll('.pregunta-bloque').forEach((bloque, i) => {
    bloque.setAttribute('data-index', i + 1);
    bloque.querySelector('h3').textContent = `Pregunta ${i + 1}`;
  });
}

document.getElementById('test-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const titulo = document.getElementById('title').value;
  const preguntas = [];

  document.querySelectorAll('.pregunta-bloque').forEach((bloque) => {
    const index = bloque.dataset.index;
    const pregunta = bloque.querySelector(`[name=pregunta-${index}]`).value;
    const respuestas = [
      bloque.querySelector(`[name=respuesta1-${index}]`).value,
      bloque.querySelector(`[name=respuesta2-${index}]`).value,
      bloque.querySelector(`[name=respuesta3-${index}]`).value
    ];
    const correcta = parseInt(bloque.querySelector(`[name=correcta-${index}]`).value) - 1;

    preguntas.push({ question: pregunta, answers: respuestas, correct: correcta });
  });

  console.log({ titulo, preguntas });
  // Aquí puedes llamar a Supabase para guardar
});