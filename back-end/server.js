const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de la API
app.get('/api/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});

app.post('/api/usuarios', (req, res) => {
  const { nombre, email } = req.body;
  
  db.query(
    'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
    [nombre, email],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json({ id: results.insertId, nombre, email });
    }
  );
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});