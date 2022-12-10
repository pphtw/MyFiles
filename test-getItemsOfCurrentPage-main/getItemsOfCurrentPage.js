const { template } = require('@babel/core')
//64130500066

function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  return (allItems === undefined || allItems === null)? undefined: (allItems.length === 0)? []:(currentPage === 0 || rowsPerPage === 0 || currentPage < 0 || rowsPerPage < 0)? allItems:allItems.slice((currentPage-1)*rowsPerPage, currentPage*rowsPerPage)
  // if (allItems === undefined || allItems === null) return undefined
  // if (allItems.length === 0) return []
  // if (currentPage === 0 || rowsPerPage === 0 || currentPage < 0 || rowsPerPage < 0) return allItems

  // return allItems.slice((currentPage-1)*rowsPerPage, currentPage*rowsPerPage)
}
module.exports = getItemsOfCurrentPage


//test
console.log(getItemsOfCurrentPage([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
],
3,
15))