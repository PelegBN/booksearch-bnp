var books = require('./myModules');
var express = require ('express');
var app = express();

app.get('/getAllBooks' ,function(req,res) {
	console.log('"getAllBooks" initiated');
	var list = books.getAllBooks();
	res.json(list);
});

app.get('/getBook/:id' ,function(req,res) {
	console.log('"getBook" initiated with the value ' + req.params.id);
	var book = books.getBook(req.params.id);
	res.json(book);
});

app.get('/getType/:type' ,function(req,res) {
	console.log('"getType" initiated with the value ' + req.params.type);
	var bookType = books.getType(req.params.type);
	res.json(bookType);
});

app.listen(process.env.PORT || 3000);
console.log('listening on port 3000');