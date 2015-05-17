var books = require('./myModules');
var url = require('url');
var express = require ('express');
var app = express();

app.get('/', function(req, res) {
 	res.sendFile(__dirname + '/index.html');
 });

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

app.get('/getMaxPrice/:price' ,function(req,res) {
	console.log('"getMaxPrice" initiated with the value ' + req.params.price);
	var bookPrice = books.getMaxPrice(req.params.price);
	res.json(bookPrice);
});

app.get('/find', function (req, res) {
	var urlPart = url.parse(req.url, true);
	var query = urlPart.query;
	if ((query.author == undefined) && (query.year != undefined)) res.json(books.findYear(query.year));
	if ((query.author != undefined) && (query.year == undefined)) res.json(books.findAuthor(query.author));
	if ((query.author != undefined) && (query.year != undefined)) res.json(books.findBoth(query.author, query.year));
	if ((query.author == undefined) && (query.year == undefined)) res.send('No Values were Entered for Either Parameter ("author" or "year")');
});

app.listen(process.env.PORT || 3000);
console.log('listening on port 3000');