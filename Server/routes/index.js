import genreRoute from './genreRoute.js'
import UserRoute from './userRoute.js'
import CommentRoute from './commentRoute.js'

const routes = (app) => {
    app.use('/genre', genreRoute)
    app.use('/user', UserRoute)
    app.use('/comment', CommentRoute)
    // app.use('/category', CategoryRoute)
    // app.use('/image', ImageRoute)
}

export default routes