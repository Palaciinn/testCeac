import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ttmzucvzmbuahakmauvz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXp1Y3Z6bWJ1YWhha21hdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzE3MjIsImV4cCI6MjA2Mzc0NzcyMn0.Npeft23fnGss2PTDbWd2CkdCRFFBhc_1TtZqb1N7JVI'
);

async function main() {
  const { data: { session } } = await supabase.auth.getSession();

  // Redirigir si no hay sesión
  if (!session && window.location.pathname !== '/auth.html') {
    window.location.href = "auth.html";
    return;
  }

  // Mostrar botón "Mi perfil" si existe
  const perfilBtn = document.getElementById('perfil-btn');
  if (perfilBtn) {
    perfilBtn.style.display = session ? 'inline-block' : 'none';

    perfilBtn.addEventListener('click', () => {
      window.location.href = session ? 'perfil.html' : 'auth.html';
    });
  }

  // Botón cerrar sesión
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      const { error } = await supabase.auth.signOut();
      if (error) {
        alert("Error al cerrar sesión: " + error.message);
      } else {
        window.location.href = "auth.html";
      }
    });
  }
}

// Ejecutar todo cuando cargue el DOM
document.addEventListener('DOMContentLoaded', main);
