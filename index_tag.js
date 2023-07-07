const { pool } = require("./db");

async function insertData() {
	const name = document.getElementById("link").value; 
	const id = document.getElementById("base").value; 
	pool.connect().then(() => {
	  return pool.request().query("INSERT INTO tags (tag, id_link) VALUES ($1, $2)",
		[name, id])	
	})
}