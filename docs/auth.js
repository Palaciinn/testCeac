import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ttmzucvzmbuahakmauvz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXp1Y3Z6bWJ1YWhha21hdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzE3MjIsImV4cCI6MjA2Mzc0NzcyMn0.Npeft23fnGss2PTDbWd2CkdCRFFBhc_1TtZqb1N7JVI'
);

// FORM login/register
document.getElementById('auth-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Intenta iniciar sesión
  const { error, data: loginData } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Si falla, intenta registrar
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });
    if (signUpError) {
      alert("Error: " + signUpError.message);
    } else {
      alert("Registro exitoso. Revisa tu email para confirmar.");
    }
  } else {
    location.href = "index.html"; // Redirigir al test
  }
});

// FORM magic link
document.getElementById('magic-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('magic-email').value;

  const { error } = await supabase.auth.signInWithOtp({
    email,
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Revisa tu email para acceder con el enlace mágico.");
  }
});