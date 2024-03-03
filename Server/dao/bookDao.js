import Book from '../models/book.js'
 
const getAllBooks = async(req) =>{
    try {
        const { TextSearch, CurrentPage, PageSize, isAdmin } = req.body
    let query
    if (isAdmin) {
      query = { title: { $regex: TextSearch, $options: 'i' } }
    } else {
      query = { title: { $regex: TextSearch, $options: 'i' }, Status: true }
    }
    const books = await Book
      .find(query)
      .sort({ "createdAt": -1 })
      .skip((CurrentPage - 1) * PageSize)
      .limit(PageSize)
      .populate('author', ['_id', 'nickName'])
      .populate('genres', ['title'])
    return { List: comics, Total: comics.length }
    
    } catch(error){
        return error.toString()
    }
}
const getAllBooksByGenres = async (req) => {
    try {
      const { TextSearch, CurrentPage, PageSize, GenreID } = req.body
      let query
      if (!!GenreID) {
        query = {
          Title: { $regex: TextSearch, $options: 'i' },
          genres: GenreID,
        }
      } else {
        query = {
          title: { $regex: TextSearch, $options: 'i' },
        }
      }
      const books = await Book
        .find(query)
        .sort({ "createdAt": -1 })
        .skip((CurrentPage - 1) * PageSize)
        .limit(PageSize)
      if (!books.length) {
        return { List: [], Total: 0 }
      }
      return { List: comics, Total: comics.length }
    } catch (error) {
      return error.toString()
    }
  }
  const getAllBooksByAuthor = async (req) => {
    try {
      const { TextSearch, CurrentPage, PageSize, UserID, IsPrivated } = req.body
      let data, query
      const user = await user.findOne({ _id: UserID })
      if (!user) return {msg: 'user ko tồi tại'}
      if (!IsPrivated) {
        query = {
          title: { $regex: TextSearch, $options: 'i' },
          author: UserID,
          status: true
        }
      } else {
        query = {
          title: { $regex: TextSearch, $options: 'i' },
          author: UserID,
        }
      }
      const books = await Book
        .find(query)
        .skip((CurrentPage - 1) * PageSize)
        .limit(PageSize)
      
      return {data , msg:"Lấy data thành công"}
    } catch (error) {
      return error.toString()
    }
  }
  const insertBook = async (req) => {
    try {
      const { title } = req.body
      const book = await Book.findOne({ title })
      if (book) {
        cloudinaryV2.uploader.destroy(req.file.filename)
        return {msg : `Sách: ${title} đã tồn tại`}
      }
      console.log(req.file);
      const create = await Book.create({ ...req.body, avatarPath: req.file.path})
      return {msg : "Thêm mới thành công",book: create._id}
    } catch (error) {
      return error.toString()
    }
  }
  const updateBook = async (req) => {
    try {
      const { BookID, Author, Title } = req.body
      const checkExist = await Book.findOne({ _id: BookID, author: Author })
      if (!checkExist) return {checkExist,msg: 'Truyện không tồn tại'}
      const checkExistTitle = await Book.findOne({ Title })
      if (!!checkExistTitle && !checkExist._id.equals(checkExistTitle._id)) {
        if (!!req.file) cloudinaryV2.uploader.destroy(req.file.filename)
        return {msg: `Truyện: ${Title} đã tồn tại`}
      }     
      const updateBook = await Book.findByIdAndUpdate({ _id: BookID, author: Author }, {
        ...req.body,
        avatarPath: !!req.file ? req.file.path : checkExistTitle?.AvatarPath      
      })
      return {bookID:updateBook._id,msg: "Cập nhật thành công thành công"}
    } catch (error) {
      return error.toString()
    }
  }
  const deleteComic = async (req) => {
    try {
      const { BookID, UserID } = req.body
      const deleteComic = await Book.deleteOne({ _id: BookID, author: UserID })
      if (!deleteBook.deletedCount) return {msg:"Có lỗi khi xóa" } 
      return {deleteComic,msg: "Xóa thành công"}
    } catch (error) {
      return error.toString()
    }
  }
  const getDetailBook = async (req) => {
    try {
      const id = req.params.BookID
      const book = await Book.findOne({ _id: id })
        .populate('author', ['_id', 'nickName'])
        .populate('genres', ['title'])
      if (!book) return {msg: 'Truyện không tồn tại'} 
      return {comic,msg: 'Lấy data thành công'}
    } catch (error) {
      return error.toString()
    }
  }
  const changeStatusBook = async (req) => {
    try {
      const { BookID, Status } = req.body
      const updateBook = await Book.findByIdAndUpdate({ _id: BookID }, { Status: Status })
      if (!updateBook) return {msg:'Truyện không tồn tại'} 
      return {msg:'Cập nhật thành công'}
    } catch (error) {
      return error.toString()
    }
  }
  const getAllChaptersByBook = async (req) => {
    try {
      const BookID = req.params.BookID
      const chapters = await Book.findOne({ _id: BookID }).select('Chapters Title createdAt')
      if (!chapters) return {msg:"Có lỗi"}
      return { chapters,msg: 'Lấy data thành công'}
    } catch (error) {
      return error.toString()    
    }
  }
  const likeBook = async (req) => {
    try {
      const bookID = req.params.BookID
      const book = await Book.findById(bookID)
      if (!book) {
        return res.status(404).json({ message: 'Book not found' })
      }
      const updateResult = await Book.updateOne(
        { _id: bookID },
        { $inc: { likes: 1 } }
      )
  
      if (updateResult.matchedCount === 0) {
        return res.status(404).json({ message: 'Book not found' })
      }
      return { message: 'Book liked successfully' }
    } catch (error) {
      return error.toString()
    }
  }

const BookDao ={
    getAllBooks,
    getAllBooksByGenres,
    getAllBooksByAuthor,
    insertBook,
    updateBook,
    deleteComic,
    getDetailBook,
    changeStatusBook,
    getAllChaptersByBook,
    likeBook
}
export default BookDao
