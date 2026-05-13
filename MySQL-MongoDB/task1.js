const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
connection.connect((err) => {
  if (err) {
    console.error('Connection failed:', err);
    return;
  }

  console.log('MySQL connected');


  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      age INT
    )
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }

    console.log('Table created successfully');

    connection.end();
  });
});