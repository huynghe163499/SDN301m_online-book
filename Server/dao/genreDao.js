import Genre from "../models/genre.js" 


const getAllGenres = async (req) => {
    try {
        const { TextSearch, CurrentPage, PageSize } = req.body
    let genres
    if (!!CurrentPage && !!PageSize && !!TextSearch) {
      genres = await Genre
        .find({ Title: { $regex: TextSearch, $options: 'i' } })
        .skip((CurrentPage - 1) * PageSize)
        .limit(PageSize)
    } else {
      genres = await Genre.find()
    }
    return { List: genres, Total: genres.length }
    
    } catch (error) {
        return error.toString()
    }
}

const insertGenre = async (req) => {
    try {
        const { title } = req.body
        const genre = await Genre.findOne({ title })
        if (genre) {
            return { msg: `Thể loại sách: ${title} đã tồn tại` }
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
        if (!genre) return { msg: 'Thể loại không tồn tại' }
        return genre
    } catch (error) {
        return error.toString()
    }
}
const updateGenre = async (req) =>{
    try{
        const {id, title} = req.body
        const checkExistGenre = await Genre.find({ _id: id })
        if(!checkExistGenre) return { msg: 'Thể loại sách không tồn tại'}
        const checkExistTitle = await Genre.findOne({ title })
        if(!!checkExistTitle && !checkExistGenre._id.equals(checkExistTitle._id)){
            return { msg: `Thể loại sách: ${title} đã tồn tại` }
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




