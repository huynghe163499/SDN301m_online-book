import genreRoute from './genreRoute.js'
import bookRoute from './bookRoute.js'
 import chapterRoute from './chapterRoute.js'
const routes = (app) => {
    app.use('/genre', genreRoute)
    app.use('/book', bookRoute)
    app.use('/chapter',chapterRoute)

}
export default routes