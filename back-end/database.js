const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'arconorte',
  port: process.env.DB_PORT || 3306
});

connection.connect((error) => {
  if (error) {
    console.error('Error conectando a la BD:', error);
    return;
  }
  console.log('✅ Conectado a MySQL');
});

module.exports = connection;