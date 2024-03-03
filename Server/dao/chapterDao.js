import Chapter from '../models/chapter.js'
const getAllChapters = async (req) =>{
    try {
        const chapters = await Chapter.find()
        return chapters    
    } catch (error) {
        return error.toString()
    }
}
const insertChapter = async(req) =>{
    try {
        const {name} = req.body
        const chapter = await Chapter.findOne({name})
        if(chapter){
            return {msg: `Chương: ${name} đã tồn tại`}
        }
        const newChapter = await Chapter.create(req.body)
        return newChapter
    } catch (error) {
        return error.toString()
    }
}
const deleteChapter = async(req) => {
    try {
        const id = req.params.id
        const response = await Chapter.findByIdAndDelete({_id: id})
        return response
    } catch (error) {
        return error.toString()
    }
}
const updateChapter = async(req) => {
    try {
        const id = req.params.id
        const {name} = req.body
        const chapter = await Chapter.findByIdAndUpdate({_id: id},req.body)
        return chapter
    } catch (error) {
        return error.toString()
    }
}
const getDetailChapter = async (req) => {
    try {
        const id = req.params.id
        const chapter = await Chapter.findOne({ _id: id })
        if (!chapter) return { msg: 'Chương không tồn tại' }
        return chapter
    } catch (error) {
        return error.toString()
    }
}

const ChapterDao = {
    getAllChapters,
    insertChapter,
    deleteChapter,
    updateChapter,
}
export default ChapterDao
   