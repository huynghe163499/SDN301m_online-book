import Genre from "../models/genre.js" 


const getAllGenres = async (req) => {
    try {
        const genres = await Genre.find()
        return genres
    } catch (error) {
        return error.toString()
    }
}

const insertGenre = async (req) => {
    try {
        const { title } = req.body
        const genre = await Genre.findOne({ title })
        if (genre) {
            return { msg: `Thể loại truyện: ${title} đã tồn tại` }
        }
        const create = await Genre.create(req.body)
        return create
    } catch (error) {
        return error.toString()
    }
}


const getDetailGenre = async (req) => {
    try {
        const id = req.params.id
        const genre = await Genre.findOne({ _id: id })
        if (!genre) return { msg: 'Genre không tồn tại' }
        return genre
    } catch (error) {
        return error.toString()
    }
}
const updateGenre = async (req) =>{
    try{
        const {id, title} = req.body
        const checkExistGenre = await Genre.find({ _id: id })
        if(!checkExistGenre) return { msg: 'Thể loại truyện không tồn tại'}
        const checkExistTitle = await Genre.findOne({ title })
        if(!!checkExistTitle && !checkExistGenre._id.equals(checkExistTitle._id)){
            return { msg: `Thể loại truyện: ${title} đã tồn tại` }
        }
        await Genre.updateOne({_id: id},req.body);
        return {msg: 'Cập nhật thành công'}
    }catch(error){
        return error.toString()
    }
}
const deleteGenre = async(req) => {
    try {
        const id = req.params.id
        const genre = await Genre.findByIdAndDelete({ _id: id })
        return genre
    } catch (error) {
        return error.toString()
    }
}


const GenreDao = {
    getAllGenres,
    insertGenre,
    getDetailGenre,
    updateGenre,
    deleteGenre
}

export default GenreDao




