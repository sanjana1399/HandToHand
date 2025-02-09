const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 5001;

// PostgreSQL pool setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
});

app.use(express.json());

app.post('/api/markers', async (req, res) => {
  const { lat, lng, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO markers (lat, lng, description) VALUES ($1, $2, $3)',
      [lat, lng, description]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
