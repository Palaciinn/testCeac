import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ttmzucvzmbuahakmauvz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXp1Y3Z6bWJ1YWhha21hdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzE3MjIsImV4cCI6MjA2Mzc0NzcyMn0.Npeft23fnGss2PTDbWd2CkdCRFFBhc_1TtZqb1N7JVI'
);

// Panel deslizante
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Manejo del formulario de registro
document.querySelector('.sign-up-container form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const nombre = document.getElementById('signup-nombre').value;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nombre: nombre
      }
    }
  });

  if (error) {
    alert("Error al registrarse: " + error.message);
  } else {
    alert("Registro exitoso. Revisa tu correo para confirmar tu cuenta.");
    container.classList.remove("right-panel-active");
  }
});

// Manejo del formulario de login
document.querySelector('.sign-in-container form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    alert("Error al iniciar sesión: " + error.message);
  } else {
    window.location.href = "index.html";
  }
});

//Funcion botones registrarse e iniciar sesion mobile
function mostrarRegistro() {
  const container = document.querySelector('.container');
  container.classList.add('right-panel-active');
}

function mostrarLogin() {
  const container = document.querySelector('.container');
  container.classList.remove('right-panel-active');
}

window.mostrarRegistro = function () {
  const container = document.querySelector('.container');
  container.classList.add('right-panel-active');
};

window.mostrarLogin = function () {
  const container = document.querySelector('.container');
  container.classList.remove('right-panel-active');
};




