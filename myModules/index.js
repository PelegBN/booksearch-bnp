var bookList = [
{id:"1", name:"a", author:"aa", year:"2015", type:"Comedy", price:"11", rate:"1"},
{id:"2", name:"b", author:"bb", year:"2015", type:"Drama", price:"22", rate:"2"},
{id:"3", name:"c", author:"cc", year:"2015", type:"Drama", price:"33", rate:"3"},
{id:"4", name:"d", author:"dd", year:"2015", type:"Drama", price:"44", rate:"4"},
{id:"5", name:"e", author:"ee", year:"2015", type:"Comedy", price:"55", rate:"5"},
{id:"6", name:"f", author:"ff", year:"2015", type:"Comedy", price:"66", rate:"6"}
];

exports.getAllBooks = function () {
	return JSON.stringify(bookList);
}

exports.getBook = function (id) {
	for (var i=0 ; i < bookList.length ; i++)
	{
		if (bookList[i].id == id) return JSON.stringify(bookList[i]);
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
	if (typeList.length > 0) return JSON.stringify(typeList);
	else return "No Books by That Type Were Found";
}