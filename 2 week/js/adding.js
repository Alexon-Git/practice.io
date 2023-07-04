const { pool } = require("./db");

	async function add_base(){
		const name = document.getElementById("name").value; 
		const res = await pool.query(
      "INSERT INTO base_link (link) VALUES ($1)",
      [name]
    );
	};