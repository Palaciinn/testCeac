import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient('https://TU-URL.supabase.co', 'TU-CLAVE-PUBLICA')

const { data: { user } } = await supabase.auth.getUser();
const { data, error } = await supabase
  .from('user_tests_questions')
  .select('*')
  .eq('user_id', user.id)
  .order('created_at', { ascending: false });

if (error) {
  console.error(error);
  document.getElementById("test-list").innerText = "Error al cargar tus tests.";
} else {
  const container = document.getElementById("test-list");

  const agrupados = {};
  data.forEach(q => {
    if (!agrupados[q.test_title]) agrupados[q.test_title] = [];
    agrupados[q.test_title].push(q);
  });

  for (const [titulo, preguntas] of Object.entries(agrupados)) {
    const div = document.createElement('div');
    div.innerHTML = `<h2>${titulo}</h2><ul>${preguntas.map(p => `<li>${p.question}</li>`).join('')}</ul>`;
    container.appendChild(div);
  }
}