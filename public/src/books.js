function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
   let result = [];
  let checkedOutArr = books.filter((book) => book.borrows[0].returned === false);
  let returnedArr  = books.filter((book) => book.borrows[0].returned === true);
  result.push(checkedOutArr, returnedArr);
     return result;
}

  function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrows) => {
    let account = accounts.find((account) => account.id === borrows.id);
    return { ...borrows, ...account };
  });

  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
