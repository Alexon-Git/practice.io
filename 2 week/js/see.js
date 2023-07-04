function list(callback) {
	pg.connect(cstr, function(err, client, done) {
					if (err) {
							callback(err);
					} else {
							client.query('select fname from users', function(err, result) {
									// Ends the "transaction":
									done();
									// Disconnects from the database:
									client.end();
									if (err) {
											callback(err);
									} else {
											callback(result.rows);
									}
							});
					}
			});
	}