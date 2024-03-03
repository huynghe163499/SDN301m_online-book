import Comment from '../models/comment.js'
import User from '../models/user.js'

const insertComment = async (req) => {
    try {
        const { users } = req.body
        const user = await User.findOne({ _id: users })
        if (!user) return { msg: "Có lỗi" }
        const newComment = await Comment.create(req.body)
        return { ...newComment, user: { fullName: user.fullName, avatarPath: user.avatarPath }, msg: "Bình luận thành công" }
    } catch (error) {
        return error.toString()
    }
}

const getAllCommentByBook = async (req) => {
    try {
        const bookId = req.params.bookId
        const comments = await Comment.find({ book: bookId }).populate('author', ['_id', 'fullName', 'avatarPath'])
        return { List: comments, Total: comments.length, msg: "Lấy data thành công" }
    } catch (error) {
        return error.toString()
    }
}


const CommentDao = {
    insertComment,
    getAllCommentByBook
}

export default CommentDao