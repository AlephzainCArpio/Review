require('dotenv').config();

const mysql = require('mysql2');

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

  const updateQuery = `
    UPDATE users
    SET age = ?
    WHERE id = ?
  `;

  connection.query(updateQuery, [23, 1], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      return;
    }

    console.log("Updated: Alice's age changed to 23");

    const deleteQuery = `
      DELETE FROM users
      WHERE id = ?
    `;

    connection.query(deleteQuery, [2], (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        return;
      }

      console.log('Deleted: Bob removed');

      const selectQuery = `SELECT * FROM users`;

      connection.query(selectQuery, (err, rows) => {
        if (err) {
          console.error('Error fetching users:', err);
          return;
        }

        console.log('Remaining users:', rows);

        connection.end();
      });
    });
  });
});