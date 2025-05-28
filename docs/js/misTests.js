import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://ttmzucvzmbuahakmauvz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXp1Y3Z6bWJ1YWhha21hdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzE3MjIsImV4cCI6MjA2Mzc0NzcyMn0.Npeft23fnGss2PTDbWd2CkdCRFFBhc_1TtZqb1N7JVI'
)

async function cargarTests() {
  const container = document.getElementById("test-list");

  const { data: userData, error: authError } = await supabase.auth.getUser();
  if (authError || !userData || !userData.user) {
    container.innerHTML = "<p style='color:red;'>⚠️ Debes iniciar sesión para ver tus tests.</p>";
    return;
  }

  const user_id = userData.user.id;

  const { data, error } = await supabase
    .from('user_tests_questions')
    .select('*')
    .eq('user_id', user_id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    container.innerText = "Error al cargar tus tests.";
    return;
  }

  if (data.length === 0) {
    container.innerHTML = "<p>No has creado ningún test aún.</p>";
    return;
  }

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

cargarTests();
