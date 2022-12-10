const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
// 64130500066 Phutawan Palakavong
class BookMark {
  constructor(isbn, totalPages){
      this.isbn = isbn;
      this.totalPages = (totalPages === undefined || totalPages === null)? 0 : totalPages;
      this.bookMarks = [];
  }

  addBookMark(pageNumber){
      if(pageNumber > 0 && (pageNumber < this.totalPages || pageNumber === this.totalPages)){
        this.bookMarks.push(pageNumber)
      }
      return this.bookMarks.length;
  }
  removeBookMark(pageNumber){
      if(!this.bookMarks.includes(pageNumber)) return undefined
      let remove = this.bookMarks.splice(this.bookMarks.indexOf(pageNumber),1);
      return parseInt(remove);
      
  }
  goToFirstBookMark(){
    return (this.bookMarks.length === 0)? undefined : this.bookMarks[0] 
  }
  goToLastBookMark(){
      return (this.bookMarks.length === 0)? undefined : this.bookMarks[this.bookMarks.length - 1] 
  }
  getBookMarks(){
    return this.bookMarks;
  }

}
module.exports = BookMark

//test

// const bm1 = new BookMark('978-7-222-64532-2', 256)
//   const bmNumber1 = 10
//   const bmNumber2 = 20
//   const bmNumber3 = 33
//   bm1.bookMarks.push(bmNumber1)
//   bm1.bookMarks.push(bmNumber2)
//   bm1.bookMarks.push(bmNumber3)
//   console.log(bm1.bookMarks)
//   console.log(bm1.removeBookMark(bmNumber1))
//   console.log(bm1.removeBookMark(257));
//   console.log(bm1.bookMarks)
