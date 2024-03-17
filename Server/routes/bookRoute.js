import express from 'express'

import BookController from '../controllers/bookController.js'
import upload from '../middlewares/clouddinary.middlewares.js'
const router = express.Router()
router.post('/getAllBooks',
  BookController.getAllBooks
)
router.post('/insertBook',
  upload.single('avatar'),
  BookController.insertBook
)
router.get('/getDetailBook/:BookID',
  BookController.getDetailBook
)
router.post('/deleteBook',
  BookController.deleteBook
)
router.put('/updateBook',
  upload.single('avatar'),
  BookController.updateBook
)
router.post('/getAllBooksByGenre',
  BookController.getAllBooksByGenre
)
router.post('/getAllBooksByAuthor',
  BookController.getAllBooksByAuthor
)
router.post('/changeStatusBook',
  BookController.changeStatusBook
)
router.get('/getAllChaptersByBook/:BookID',
  BookController.getAllChaptersByBook
)
router.get('/likeBook/:BookID',
  BookController.likeBook
)

export default router