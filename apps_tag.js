const { pool } = require("./db");

async function insertData() {
  const [name] = process.argv.slice(2);
	const [id] = process.argv.slice(3);
  try {
    const res = await pool.query(
      "INSERT INTO tags (tag, id_link) VALUES ($1, $2)",
      [name, id]
    );
    console.log(`Added a tags with the tag ${name}`);
  } catch (error) {
    console.error(error)
  }
}

insertData()