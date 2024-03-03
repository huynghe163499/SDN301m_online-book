import GenreRoute from './genreRoute.js'
import BookRoute from './bookRoute.js'
import ChapterRoute from './chapterRoute.js'
import UserRoute from './userRoute.js'
import CommentRoute from './commentRoute.js'

const routes = (app) => {
    app.use('/genre', GenreRoute)
    app.use('/book', BookRoute)
    app.use('/chapter',ChapterRoute)
    app.use('/user', UserRoute)
    app.use('/comment', CommentRoute)
}

export default routes