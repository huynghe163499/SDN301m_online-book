import GenreRoute from './GenreRoute.js'
const routes = (app) => {
    app.use('/genre', GenreRoute)
    // app.use('/comment', CommentRoute)
    // app.use('/category', CategoryRoute)
    // app.use('/image', ImageRoute)
}
export default routes