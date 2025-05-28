import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient('https://ttmzucvzmbuahakmauvz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXp1Y3Z6bWJ1YWhha21hdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzE3MjIsImV4cCI6MjA2Mzc0NzcyMn0.Npeft23fnGss2PTDbWd2CkdCRFFBhc_1TtZqb1N7JVI')

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

document.getElementById("btn-agregar-pregunta").addEventListener("click", agregarPregunta);

document.getElementById("test-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const title = document.getElementById("title").value;

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) {
    alert("Debes iniciar sesión para crear tests.");
    return;
  }

  const user_id = userData.user.id;

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