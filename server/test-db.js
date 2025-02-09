const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "admin",
  port: 5432,
});

pool
  .query("SELECT NOW()")
  .then((res) => {
    console.log("Connected to PostgreSQL! Current time:", res.rows[0].now);
    pool.end();
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
