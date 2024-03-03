import ChapterDao from '../dao/chapterDao.js'

const getAllChapters = async (req, res) => {
    try {
        const response = await ChapterDao.getAllChapters(req)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error.toString())
    }
}

const insertChapter = async (req, res) => {
    try {
        const response = await ChapterDao.insertChapter(req)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error.toString())
    }
}

const getDetailChapter = async (req, res) => {
    try {
        const response = await ChapterDao.getDetailChapter(req)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error.toString())
    }
}
const updateChapter = async (req, res) => {
    try {
      const response = await ChapterDao.updateChapter(req)
      return res.status(response.StatusCode).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  const deleteChapter = async (req, res) => {
    try {
      const response = await ChapterDao.deleteChapter(req)
      return res.status(response.StatusCode).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
const ChapterController ={
    getAllChapters,
    insertChapter,
    getDetailChapter,
    updateChapter,
    deleteChapter,

}
export default ChapterController