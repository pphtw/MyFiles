
//64130500066

function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  return (allItems === undefined || allItems === null)? undefined: (allItems.length === 0)? []:(currentPage === 0 || rowsPerPage === 0 || currentPage < 0 || rowsPerPage < 0)? allItems:allItems.slice((currentPage-1)*rowsPerPage, currentPage*rowsPerPage)
  // if (allItems === undefined || allItems === null) return undefined
  // if (allItems.length === 0) return []
  // if (currentPage === 0 || rowsPerPage === 0 || currentPage < 0 || rowsPerPage < 0) return allItems

  // return allItems.slice((currentPage-1)*rowsPerPage, currentPage*rowsPerPage)
}

function greetingSomeone(name){
  return 'Hello!, '+ name
}

const codeId = '1205'

// module.exports = {getItemsOfCurrentPage, greetingSomeone,codeId}
export {getItemsOfCurrentPage, greetingSomeone,codeId}

