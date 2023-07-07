const { pool } = require("./db");

async function insertData() {
	const name = document.getElementById("link").value; 
	pool.connect().then(() => {
	  return pool.request().query("INSERT INTO base_link (link) VALUES ($1)",
		[name])	
	})
}