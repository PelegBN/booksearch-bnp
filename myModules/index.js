var bookList = [
{id:"1", name:"Me and Shmerling", author:"Peleg", year:"1991", type:"Comedy", price:"79"},
{id:"2", name:"Down memory lane", author:"Natalie", year:"1991", type:"Drama", price:"52"},
{id:"3", name:"Summer Time At Nowhere", author:"Peleg", year:"1987", type:"Youth", price:"45"},
{id:"4", name:"Making Friends", author:"Peleg", year:"2013", type:"Drama", price:"44"},
{id:"5", name:"Fluffy MacFluff", author:"Natalie", year:"2010", type:"Children", price:"35"},
{id:"6", name:"Lillian Made a Mess", author:"Natalie", year:"2002", type:"Thriller", price:"35"},
{id:"7", name:"Somethin' About Us", author:"Peleg", year:"1998", type:"Drama", price:"79"},
{id:"8", name:"Killing Time", author:"Natalie", year:"2002", type:"Thriller", price:"52"},
{id:"9", name:"You're Weird? So am I", author:"Peleg", year:"2007", type:"Youth", price:"68"},
{id:"10", name:"What's That Smell?", author:"Peleg", year:"1973", type:"Comedy", price:"53"},
{id:"11", name:"YOU'RE IT!", author:"Natalie", year:"2010", type:"Children", price:"66"},
{id:"12", name:"You Gonna Eat This?", author:"Natalie", year:"2002", type:"Comedy", price:"33"}
];

exports.getAllBooks = function () {
	return bookList;
}

exports.getBook = function (id) {
	for (var i=0 ; i < bookList.length ; i++)
	{
		if (bookList[i].id == id) return bookList[i];
	}
}

exports.getType = function (type) {
	var typeList = [];
	for (var i=0 ; i < bookList.length ; i++)
	{
		if (bookList[i].type == type)
		{
			typeList.push(bookList[i]);
		} 	
	}
	if (typeList.length > 0) return typeList;
	else return "No Books by That Type Were Found";
}

exports.getMaxPrice = function (price) {
	var priceList = [];
	for (var i=0 ; i < bookList.length ; i++)
	{
		if (bookList[i].price <= price)
		{
			priceList.push(bookList[i]);
		} 	
	}
	if (priceList.length > 0) return priceList;
	else return "No Books Under (or Equal) that Price Were Found";
}

exports.findYear = function (year) {
	var yearList = [];
	for (var i=0 ; i < bookList.length ; i++)
	{
		if (bookList[i].year == year)
		{
			yearList.push(bookList[i]);
		} 	
	}
	if (yearList.length > 0) return yearList;
	else return "No Books on That Year Were Found";	
}

exports.findAuthor = function (author) {
	var authorList = [];
	for (var i=0 ; i < bookList.length ; i++)
	{
		if (bookList[i].author == author)
		{
			authorList.push(bookList[i]);
		} 	
	}
	if (authorList.length > 0) return authorList;
	else return "No Books by That Author Were Found";	
}

exports.findBoth = function (author, year) {
	var authorList = [];
	var BothList = [];
	for (var i=0 ; i < bookList.length ; i++)
	{
		if (bookList[i].author == author)
		{
			authorList.push(bookList[i]);
		} 	
	}
	for (i=0 ; i < authorList.length ; i++)
	{
		if (authorList[i].year == year)
		{
			BothList.push(authorList[i]);
		} 	
	}
	if (BothList.length > 0) return BothList;
	else return "No Books by That Author, On that Year, Were Found";	
}