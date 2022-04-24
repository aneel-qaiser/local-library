function getTotalBooksCount(books) {
  let result = 0;
  result = books.length;
  return result;
}


function getTotalAccountsCount(accounts) {
   let result = 0;
  result = accounts.length;
  return result;
}

function getBooksBorrowedCount(books) {
  let result = 0;
  for (let i = 0; i < books.length; i++) { 
    if (books[i].borrows[0].returned === false) {
      result += 1;
  }
} return result;
}
   

function getMostCommonGenres(books) {
     let obj = {}
    books.forEach((book)=>{
     if(obj[book.genre]){
       obj[book.genre]++;
     } else {
       obj[book.genre] = 1
     }
    });
    let genreCount = [];
    for (let [key, value] of Object.entries(obj)) {
      genreCount.push({
        'name' : key,
        'count' : value
      });
    }
    genreCount.sort((genreA,genreB) => genreB.count - genreA.count);
    return genreCount.slice(0, 5);
  }
   
  
function getMostPopularBooks(books) {
  const borrows = books.map(book=>({name:book.title, count:book.borrows.length}));
    borrows.sort((bookA,bookB) => bookB.count - bookA.count);
    return borrows.slice(0, 5);
  }


function getMostPopularAuthors(books, authors) {
 return authors.map(author => {
      author.count = books.filter(book => book.authorId === author.id).reduce((book, author) => book + (author.borrows && author.borrows.length || 0), 0);
    author.name = `${author.name.first} ${author.name.last}`;
    delete author.id;
      return author;
  }).sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5)

}
  


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
