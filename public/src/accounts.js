function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) =>
  nameA.name.last > nameB.name.last ? 1 : -1);
  return accounts;
}


function getTotalNumberOfBorrows(account, books) {
  let borrowedBooks = 0;
  books.forEach(( book )=> {
  book.borrows.forEach((borrow) => {
    if (account.id === borrow.id) { borrowedBooks ++; }
  })
})
return borrowedBooks;
}


function getBooksPossessedByAccount(account, books, authors) {
   const booksOut = books.filter((book) => book.borrows.some(borrow => !borrow.returned && borrow.id === account.id));
  booksOut.forEach((book) => book.author = authors.find((author) => book.authorId == author.id))
  return booksOut;
}

  
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
