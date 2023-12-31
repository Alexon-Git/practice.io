const { pool } = require("./db");

let tag = 		+'<div class="content" >'
+'<div class="item" style="max-width: 600px; margin-left: auto; margin-right: auto; padding: 15px; margin-top: 50px;">'
+'<div class="text-field">'
+'<label class="text-field__label" for="search">Добавление в базу данных</label>'
+'<div class="text-field__icon">'
+'<input class="text-field__input" type="text" name="link" id="link" placeholder="Вставь ссылку" value="" >'
+'<button class="text-field__aicon" onclick="add_base()">'
+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">'
+'<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />'
+'</svg>'
+'</button>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var http = require("http");
http.createServer(function(req, res, rows){
	res.writeHead(200,{
		'Content-Type':'text/html'
	});
	res.write(
		"<!DOCTYPE html>"
		+"<head>"
		+"<meta charset='UTF-8'>"
		+'<link rel="stylesheet" href="styles.css">'
		+"<title>BD</title>"
		+'<style>'
		+'	*,'
    +'*::before,'
    +'*::after {'
    +'  box-sizing: border-box;'
    +'}'
    +'body {'
    +'  margin: 0;'
    +'  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
    +'  font-size: 1rem;'
    +'  font-weight: 400;'
    +'  line-height: 1.5;'
    +'  color: #212529;'
    +'  background-color: #fff;'
    +'  -webkit-text-size-adjust: 100%;'
    +'  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);'
    +'}'
    +'h1 {'
    +'  font-size: 1.25rem;'
    +'  font-weight: 500;'
    +'}'
    +'p {'
    +'  font-weight: 500;'
    +'}'
    +'/* text field */'
    +'.text-field {'
    +'  margin-bottom: 1rem;'
    +'}'
    +'.text-field__label {'
    +'  display: block;'
    +'  margin-bottom: 0.25rem;'
    +'}'
    +'.text-field__input {'
    +'  display: block;'
    +'  width: 100%;'
    +'  height: calc(2.25rem + 2px);'
    +'  padding: 0.375rem 0.75rem;'
    +'  font-family: inherit;'
    +'  font-size: 1rem;'
    +'  font-weight: 400;'
    +'  line-height: 1.5;'
    +'  color: #212529;'
    +'  background-color: #fff;'
    +'  background-clip: padding-box;'
    +'  border: 1px solid #bdbdbd;'
    +'  border-radius: 0.25rem;'
    +'  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;'
    +'  -webkit-appearance: none;'
    +'  -moz-appearance: none;'
    +'  appearance: none;'
    +'}'
    +'.text-field__input[type="search"]::-webkit-search-decoration,'
    +'.text-field__input[type="search"]::-webkit-search-cancel-button,'
    +'.text-field__input[type="search"]::-webkit-search-results-button,'
    +'.text-field__input[type="search"]::-webkit-search-results-decoration {'
    +'  -webkit-appearance: none;'
    +'}'
    +'.text-field__input::placeholder {'
    +'  color: #212529;'
    +'  opacity: 0.4;'
    +'}'
    +'.text-field__input:focus {'
    +'  color: #212529;'
    +'  background-color: #fff;'
    +'  border-color: #bdbdbd;'
    +'  outline: 0;'
    +'  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);'
    +'}'
    +'  .text-field__aicon-2 {'
    +'  position: absolute;'
    +'  display: flex;'
    +'  align-items: center;'
    +'  justify-content: center;'
    +'  top: 0;'
    +'  bottom: 0;'
    +'  right: 0;'
    +'  width: 2.5rem;'
    +'  border: 1px solid #bdbdbd;'
    +'  background-color: #f5f5f5;'
    +'  cursor: pointer;'
    +'  color: #212529;'
    +'  transition: background-color 0.15s ease-in-out;'
    +'  border-top-right-radius: 0.25rem;'
    +'  border-bottom-right-radius: 0.25rem;'
    +'}'
    +'.text-field__aicon-2:hover {'
    +'  background-color: #e0e0e0;'
    +'}'
		+'</style>'
		+"</head>"
		+'<div class="content" >'
		+'<div class="item" style="max-width: 600px; margin-left: auto; margin-right: auto; padding: 15px; margin-top: 50px;">'
		+'<div class="text-field">'
		+'<label class="text-field__label" for="search">Добавление в базу данных</label>'
		+'<div class="text-field__icon">'
		+'<input class="text-field__input" type="text" name="link" id="link" placeholder="Вставь ссылку" value="" >'
		+'<button class="text-field__aicon" onclick="add_base()">'
		+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">'
		+'<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />'
		+'</svg>'
		+'</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		);

		res.write(
		'<table align="center" border="1px solid #bdbdbd">'
		+'<h2 align="center">Ссылки</h2>');
		
		var stroka = "";

		async function getDataFromDb(text) {
			const query = pool.query(text);
			return query;
		}
		(async function() {
			const query = await getDataFromDb(`SELECT * FROM base_link`);
			let BASE_len = query.rows.length;
			const base = query.rows
			for (let i = 0; i <= BASE_len-1; i++) {
				let getId = base[i];
				stroka = '<tr name="base" value="'+getId['id']+'"><td>'+getId['link']+'</td></tr>';
				res.write(stroka);
			}
			
			
			res.write(
				"</table>",
				+"</body>",
				+"</html>");
				res.end();
		})();

	
  }).listen(8000);
console.log("Server running at http://127.0.0.1:8000");