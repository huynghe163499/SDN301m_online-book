import genreRoute from './genreRoute.js'
import bookRoute from './bookRoute.js'
import chapterRoute from './chapterRoute.js'
import UserRoute from './userRoute.js'
import CommentRoute from './commentRoute.js'

const routes = (app) => {
    app.use('/genre', genreRoute)
    app.use('/book', bookRoute)
    app.use('/chapter',chapterRoute)
    app.use('/user', UserRoute)
    app.use('/comment', CommentRoute)
}

export default routes