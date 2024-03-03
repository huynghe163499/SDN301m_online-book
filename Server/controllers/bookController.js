import BookDao from '../dao/bookDao.js'
const getAllBooks = async (req, res) => {
    try {
      const response = await BookDao.getAllBooks(req)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  
  const getAllBooksByGenre = async (req, res) => {
    try {
      const response = await BookDao.getAllBooksByGenres(req)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  
  const getAllBooksByAuthor = async (req, res) => {
    try {
      const response = await BookDao.getAllBooksByAuthor(req)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  
  const insertBook = async (req, res) => {
    try {
      const response = await BookDao.insertBook(req)
      return res.status(201).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  
  const deleteBook = async (req, res) => {
    try {
      const response = await BookDao.deleteBook(req)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  
  const updateBook = async (req, res) => {
    try {
      const response = await BookDao.updateBook(req)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  
  const getDetailBook = async (req, res) => {
    try {
      const response = await BookDao.getDetailBook(req)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  const changeStatusBook= async (req, res) => {
    try {
      const response = await BookDao.changeStatusBook(req)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  
  const getAllChaptersByBook = async (req, res) => {
    try {
      const response = await BookDao.getAllChaptersByBook(req)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  const likeBook = async (req, res) => {
    try {
      const response = await BookDao.likeBook(req)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  const BookController = {
    getAllBooks,
    getAllBooksByGenre,
    getAllBooksByAuthor,
    insertBook,
    deleteBook,
    updateBook,
    getDetailBook,
    changeStatusBook,
    getAllChaptersByBook,
    likeBook
  }
  export default BookController