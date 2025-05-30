import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://ttmzucvzmbuahakmauvz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXp1Y3Z6bWJ1YWhha21hdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzE3MjIsImV4cCI6MjA2Mzc0NzcyMn0.Npeft23fnGss2PTDbWd2CkdCRFFBhc_1TtZqb1N7JVI'
);

async function cargarTests() {
  const container = document.getElementById("test-list");
  const newTestWrapper = document.getElementById("new-test-wrapper");
  container.innerHTML = '';
  newTestWrapper.innerHTML = '';

  const { data: userData, error: authError } = await supabase.auth.getUser();
  if (authError || !userData?.user) {
    container.innerHTML = "<p style='color:red;'>⚠️ Debes iniciar sesión para ver tus tests.</p>";
    return;
  }

  // Tarjeta para crear nuevo test
  const newTestCard = document.createElement('div');
  newTestCard.classList.add('test-card', 'new-test');
  newTestCard.onclick = () => window.location.href = 'crearTest.html';
  newTestCard.innerHTML = `
    <div class="new-test-title">Nuevo</div>
    <span class="material-symbols-outlined new-test-icon">add</span>
  `;
  newTestWrapper.appendChild(newTestCard);

  const { data, error } = await supabase
    .from('user_tests_questions')
    .select('test_title')
    .eq('user_id', userData.user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    container.innerText = "Error al cargar tus tests.";
    return;
  }

  const titulosUnicos = [...new Set(data.map(q => q.test_title))];

  titulosUnicos.forEach(titulo => {
    const card = document.createElement('div');
    card.classList.add('test-card');
    card.innerHTML = `
      <h2 class="test-title">Test: ${titulo}</h2>
      <a href="jugarTest.html?test=${encodeURIComponent(titulo)}" class="play-button">Hacer Test</a>
      <button class="delete-button" title="Eliminar">
        <img src="../img/trash_icon.svg" alt="Eliminar">
      </button>
    `;

    card.querySelector('.delete-button').addEventListener('click', async () => {
      const confirmar = confirm(`¿Seguro que deseas eliminar el test "${titulo}"?`);
      if (!confirmar) return;

      const { error: deleteError } = await supabase
        .from('user_tests_questions')
        .delete()
        .eq('test_title', titulo)
        .eq('user_id', userData.user.id);

      if (deleteError) {
        alert("Error al eliminar el test.");
        console.error(deleteError);
      } else {
        cargarTests(); // recargar la lista
      }
    });

    container.appendChild(card);
  });
}

cargarTests();