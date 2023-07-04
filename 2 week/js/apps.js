const { pool } = require("./db");

async function insertData() {
  const [name] = process.argv.slice(2);
  try {
    const res = await pool.query(
      "INSERT INTO base_link (link) VALUES ($1)",
      [name]
    );
    console.log(`Added a shark with the name ${name}`);
  } catch (error) {
    console.error(error)
  }
}

insertData()