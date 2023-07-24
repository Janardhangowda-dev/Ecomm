const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'your_db_username',
  host: 'your_db_host',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432, // or your database port
});

app.use(express.json());

// API endpoint to handle form submission
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Insert the form data into the PostgreSQL database
  pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
    [username, email, password],
    (err, result) => {
      if (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Error executing query' });
      } else {
        console.log('Form data inserted successfully');
        res.status(200).json({ message: 'Form data inserted successfully' });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
