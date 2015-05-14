var bookList = [
{id:"1", name:"Me and Shmerling", author:"BNP", year:"1991", type:"Comedy", price:"79$"},
{id:"2", name:"Down memory lane", author:"Peleg", year:"1982", type:"Drama", price:"52$"},
{id:"3", name:"Summer Time At Nowhere", author:"PelegBN", year:"1987", type:"Youth", price:"45$"},
{id:"4", name:"Making Friends", author:"BNP", year:"2013", type:"Drama", price:"44$"},
{id:"5", name:"Fluffy McFluff", author:"Natalie", year:"2010", type:"Children", price:"35$"},
{id:"6", name:"Lillian Made a Mess", author:"Tuti", year:"2002", type:"Thriller", price:"35$"}
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