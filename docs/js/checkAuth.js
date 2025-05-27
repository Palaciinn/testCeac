import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ttmzucvzmbuahakmauvz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXp1Y3Z6bWJ1YWhha21hdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzE3MjIsImV4cCI6MjA2Mzc0NzcyMn0.Npeft23fnGss2PTDbWd2CkdCRFFBhc_1TtZqb1N7JVI'
);

// Ruta base dinámica según si estás en GitHub Pages o local
const basePath = window.location.pathname.includes('/testCeac') ? '/testCeac/' : '/';

async function main() {
  // Captura el token desde la URL si viene de verificación por email
  await supabase.auth.getSessionFromUrl();

  const { data: { session } } = await supabase.auth.getSession();

  // Redirige si no hay sesión y no estás en auth.html
  if (!session && !window.location.pathname.endsWith('auth.html')) {
    window.location.href = `${basePath}auth.html`;
    return;
  }

  const perfilBtn = document.getElementById('perfil-btn');
  if (perfilBtn) {
    perfilBtn.style.display = session ? 'inline-block' : 'none';

    perfilBtn.addEventListener('click', () => {
      const target = session ? 'perfil.html' : 'auth.html';
      window.location.href = `${basePath}${target}`;
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      const { error } = await supabase.auth.signOut();
      if (error) {
        alert("Error al cerrar sesión: " + error.message);
      } else {
        window.location.href = `${basePath}auth.html`;
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', main);
