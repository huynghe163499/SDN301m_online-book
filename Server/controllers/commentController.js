import CommentDao from '../dao/commentDao.js'

const insertComment = async (req, res) => {
  try {
    const response = await CommentDao.insertComment(req)
    return res.status(201).json(response)
  } catch (error) {
    return res.status(500).json(error.toString())
  }
}

const getAllCommentByComic = async (req, res) => {
  try {
    const response = await CommentDao.getAllCommentByBook(req)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error.toString())
  }
}

const CommentController = {
  insertComment,
  getAllCommentByComic
}

export default CommentController