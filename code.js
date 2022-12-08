let container = document.querySelector('#container');
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.flexWrap = 'wrap';

let shelf = document.querySelector('.shelf')
let book_holder = document.querySelector('.book_holder')

let myLibrary = [];


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.readstatus = ''
    if(read == false){
        this.readStatus = 'not read yet'
    } else {
        this.readStatus = 'already read'
    }
    this.info = function () {
        return `${title} by ${author}, ${pages}, ${readStatus}`
    }
};


function addBook (book) {
    myLibrary.push(book)
};



function hoverBook (book) {
    book.addEventListener('mouseover', function (book) {
        this.classList.remove('lowerBook')
        this.classList.add('raiseBook')
    })
}

function lowerBook (book) {
    book.addEventListener('mouseout', function (book) {
        this.classList.remove('raiseBook')
        this.classList.add('lowerBook')
    })
}


function chooseBook(book) {
    book.addEventListener('click', function(book){
        this.classList.add('no_hover')
        this.style.animation = 'select 5s ease';
        this.style.animationFillMode = 'forwards';
    })
}

function showBooks () {
    for(let i = 0; i < myLibrary.length; i++){

        let outerBook = document.createElement('div')

        let book = document.createElement('div')
        book.style.alignItems = 'center';
        book.style.justifyContent = 'space-around'
        book.style.width = '5vw';
        book.style.height = '18vw';
        book.style.backgroundColor = 'brown';
        book.style.borderRadius = '5%';
        book.style.position = 'relative';
        book.style.display = 'inline-block';
        book.style.marginLeft = '3vw';
        hoverBook(book);
        lowerBook(book)
        chooseBook(book);



        let titleSection = document.createElement('dvi');

        let bookTitle = document.createTextNode(myLibrary[i].title);

        titleSection.appendChild(bookTitle);

        titleSection.style.transform = 'rotate(-90deg)';

        book.appendChild(titleSection);

        //book.style.flex = 'auto';
        book_holder.appendChild(book);

    }
};

let poop = new Book('poop', 'mrpoop', 123, false);
let poopThree = new Book('poopoo', 'mrpoop', 123, false);
let poopTwo = new Book('poopoo', 'mrpoop', 123, false);
let poopFour = new Book('poop', 'mrpoop', 123, false);
let poopFive = new Book('poop', 'mrpoop', 123, false);
let poopSix = new Book('poop', 'mrpoop', 123, false);
let poopSeven = new Book('poop', 'mrpoop', 123, false);

addBook(poop);
addBook(poopTwo);
addBook(poopThree);
addBook(poopFour);
addBook(poopFive);
addBook(poopSix);
addBook(poopSeven);


showBooks()

console.log(myLibrary)


/*
let authorSection = document.createElement('div');
let pagesSection = document.createElement('div');
let statusSection = document.createElement('div');

let bookAuthor = document.createTextNode(myLibrary[i].author);
let bookPages = document.createTextNode(myLibrary[i].pages);
let bookStatus = document.createTextNode(myLibrary[i].readStatus);

let bookAuthor = document.createTextNode(myLibrary[i].author);
let bookPages = document.createTextNode(myLibrary[i].pages);
let bookStatus = document.createTextNode(myLibrary[i].readStatus);

book.appendChild(authorSection);
book.appendChild(pagesSection);
book.appendChild(statusSection);
*/