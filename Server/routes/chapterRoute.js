import express from 'express'
const router = express.Router()
import ChapterController from '../controllers/chapterController.js'

router.get('/getAllChapters',
  ChapterController.getAllChapters
)
router.post('/insertChapter',
  ChapterController.insertChapter
)
router.post('/updateChapter',
  ChapterController.updateChapter
 )
router.delete('/deleteChapter/:id',
  ChapterController.deleteChapter
)
router.get('/getDetailChapter/:id',
  ChapterController.getDetailChapter
)

export default router