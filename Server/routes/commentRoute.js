import express from 'express'
const router = express.Router()
import CommentController from '../controllers/commentController.js'

router.post("/insertComment",
  CommentController.insertComment
)
router.get("/getAllCommentByBook/:bookId",
  CommentController.getAllCommentByComic
)

export default router