app.see('/users', function (req, res) {

  db.list(function(data){ 
    console.log(data); 
    res.send(data); 
  }); 

});