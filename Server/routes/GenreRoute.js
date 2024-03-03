import express from 'express'
const router = express.Router()
import GenreController from '../controllers/GenreController.js'

router.get('/getAllGenres',
  GenreController.getAllGenres
)
router.post('/insertGenre',
  GenreController.insertGenre
)
router.post('/updateGenre',
  GenreController.updateGenre
 )
router.delete('/deleteGenre/:id',
  GenreController.deleteGenre
)
router.get('/getDetailGenre/:id',
  GenreController.getDetailGenre
)

export default router