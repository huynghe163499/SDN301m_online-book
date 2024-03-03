import GenreDao from '../dao/genreDao.js'

const getAllGenres = async (req, res) => {
    try {
        const response = await GenreDao.getAllGenres(req)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error.toString())
    }
}

const insertGenre = async (req, res) => {
    try {
        const response = await GenreDao.insertGenre(req)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error.toString())
    }
}

const getDetailGenre = async (req, res) => {
    try {
        const response = await GenreDao.getDetailGenre(req)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error.toString())
    }
}
const updateGenre = async (req, res) => {
    try {
      const response = await GenreDao.updateGenre(req)
      return res.status(response.StatusCode).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
  const deleteGenre = async (req, res) => {
    try {
      const response = await genreService.deleteGenre(req)
      return res.status(response.StatusCode).json(response)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
  }
const GenreController ={
    getAllGenres,
    insertGenre,
    getDetailGenre,
    updateGenre,
    deleteGenre

}
export default GenreController