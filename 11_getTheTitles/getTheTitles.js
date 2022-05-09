const getTheTitles = function(books) {

    let bookArr = []

    for(let x = 0; x < books.length; x++){
        bookArr.push(books[x].title);
    }
    return bookArr;
    //const bookArr = books.map(books => books.title);

};

// Do not edit below this line
module.exports = getTheTitles;
