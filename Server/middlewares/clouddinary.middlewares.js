import cloud from 'cloudinary'
const cloudinary = cloud.v2
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'
import * as dotenv from 'dotenv'
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})


const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: `SDN301m`,
        resource_type: 'auto',
        allowedFormats: ['jpg', 'png', 'jpeg'],
    },
})

const upload = multer({ storage: storage })


export default upload