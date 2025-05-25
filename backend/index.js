const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/preguntas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM preguntas ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error al obtener preguntas');
  }
});

app.get('/preguntas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM preguntas WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Pregunta no encontrada');
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Error al obtener pregunta');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
