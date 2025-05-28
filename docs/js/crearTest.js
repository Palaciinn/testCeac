import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient('https://TU-URL.supabase.co', 'TU-CLAVE-PUBLICA')

let preguntaIndex = 0;

function agregarPregunta() {
  const container = document.getElementById("preguntas-container");

  const div = document.createElement("div");
  div.innerHTML = `
    <h3>Pregunta ${preguntaIndex + 1}</h3>
    <label>Pregunta:</label><br>
    <input type="text" name="pregunta-${preguntaIndex}" required><br>
    <label>Respuestas:</label><br>
    <input type="text" name="respuesta-${preguntaIndex}-0" placeholder="Respuesta 1" required><br>
    <input type="text" name="respuesta-${preguntaIndex}-1" placeholder="Respuesta 2" required><br>
    <input type="text" name="respuesta-${preguntaIndex}-2" placeholder="Respuesta 3" required><br>
    <label>Correcta (0-2):</label><br>
    <input type="number" name="correcta-${preguntaIndex}" min="0" max="2" required><br><br>
  `;
  container.appendChild(div);
  preguntaIndex++;
}

document.getElementById("test-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const title = document.getElementById("title").value;

  const user = await supabase.auth.getUser();
  const user_id = user.data.user.id;

  for (let i = 0; i < preguntaIndex; i++) {
    const question = form[`pregunta-${i}`].value;
    const answers = [
      form[`respuesta-${i}-0`].value,
      form[`respuesta-${i}-1`].value,
      form[`respuesta-${i}-2`].value
    ];
    const correct = parseInt(form[`correcta-${i}`].value);

    const { error } = await supabase.from("user_tests_questions").insert({
      user_id,
      test_title: title,
      question,
      answers,
      correct
    });

    if (error) {
      alert("Error al guardar una pregunta");
      console.error(error);
      return;
    }
  }

  alert("Test creado correctamente");
  form.reset();
  document.getElementById("preguntas-container").innerHTML = '';
  preguntaIndex = 0;
});