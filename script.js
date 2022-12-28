// Declare empty array for library
let myLibrary = [];


// Object Constructor
function Book (title, author, pages, info) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.status = info
}


// Add new book to an array 	
function addBookToLibrary( title, author, pages, info){
	const book = new Book(title, author, pages, info)
	myLibrary.push(book)
}

addBookToLibrary('Harry Potter','J.K.Rowling', 453, 'Not read')
addBookToLibrary('Lex','O.S.Syzoniuk', 715, 'Read')



console.log(myLibrary.length)





// console.log(theHobbit.info());

