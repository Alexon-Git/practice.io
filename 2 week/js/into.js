
const { pool } = require("./db");

var http = require("http");
http.createServer(function(req, res, rows){
	res.writeHead(200,{
		'Content-Type':'text/html'
	});
	res.write(
		"<!DOCTYPE html>"
		+"<head>"
		+"<meta charset='UTF-8'>"
		+"<title>BD</title>"
		+"</head>"
		+'<table align="center" border="1px solid #bdbdbd">'
		+'<h2 align="center">Ссылки</h2>');
	var qveryString = "SELECT * FROM base_link";
	var stroka = "";
	pool.query(qveryString, function (err, rows, fields) {
		if (err) throw err;

		for (var i in rows) {
			stroka = '<tr><td>'+rows[i].id +'</td><td>'+rows[i].link+'</td></tr>';
			res.write(stroka);
		}

		res.write(
			"</table>",
			+"</body>",
			+"</html>");
		res.end();
	});
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000");