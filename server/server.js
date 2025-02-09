const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');  // Import cors package
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

// Enable CORS for all origins (or configure it as needed)
app.use(cors());  // Allow all origins by default

app.use(express.json());

// Endpoint to fetch donations
app.get('/api/donations', async (req, res) => {
  console.log("Fetching donations...");
  try {
    const result = await pool.query("SELECT * FROM donations");
    console.log("Result from database:", result.rows);

    // Return the donations without the location field
    const donations = result.rows.map((donation) => {
      // Remove 'location' from the donation object
      delete donation.location;
      return donation;
    });

    res.json(donations);
  } catch (err) {
    console.error("Error fetching donations:", err);
    res.status(500).json({ error: "Error fetching donations" });
  }
});

// Endpoint to handle donation submission
app.post('/api/donations', async (req, res) => {
  const { firstName, lastName, phone, email, date } = req.body;

  // Validate incoming data
  if (!firstName || !lastName || !phone || !email || !date) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const query = 'INSERT INTO donations (first_name, last_name, phone, email, donation_date) VALUES ($1, $2, $3, $4, $5)';
    const values = [firstName, lastName, phone, email, date];

    await pool.query(query, values);
    res.status(200).send("Donation submitted successfully!");
  } catch (err) {
    console.error("Error inserting donation:", err);
    res.status(500).send("Server error while adding donation");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
